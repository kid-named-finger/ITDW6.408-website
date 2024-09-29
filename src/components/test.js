import React, { useState } from 'react';

const DateForm = () => {
  const [purchaseDate, setPurchaseDate] = useState('');
  const [repairDate, setRepairDate] = useState('');
  const [warranty, setWarranty] = useState(false);
  const [errors, setErrors] = useState({
    purchaseDate: '',
    repairDate: '',
  });

  const today = new Date();
  today.setHours(0, 0, 0, 0); // Set to start of the day for comparison

  const validateDate = (dateStr) => {
    // Check if the date string is a valid date
    const date = new Date(dateStr);
    return date instanceof Date && !isNaN(date);
  };

  const handlePurchaseDateChange = (e) => {
    const value = e.target.value;
    setPurchaseDate(value);

    // Validate purchase date
    if (!validateDate(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        purchaseDate: 'Invalid date format.',
      }));
    } else if (new Date(value) >= today) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        purchaseDate: 'Purchase date cannot be in the future or today.',
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, purchaseDate: '' }));
    }
  };

  const handleRepairDateChange = (e) => {
    const value = e.target.value;
    setRepairDate(value);

    // Validate repair date
    if (!validateDate(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        repairDate: 'Invalid date format.',
      }));
    } else if (new Date(value) <= today) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        repairDate: 'Repair date must be after today.',
      }));
    } else if (new Date(value) <= new Date(purchaseDate)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        repairDate: 'Repair date must be later than the purchase date.',
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, repairDate: '' }));
    }
  };

  const handleWarrantyChange = (e) => {
    setWarranty(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check for errors before submission
    if (!errors.purchaseDate && !errors.repairDate && purchaseDate && repairDate) {
      alert('Dates are valid. Form submitted!');
    } else {
      alert('Please fix the errors before submitting the form.');
    }
  };

  const isWarrantyDisabled = () => {
    if (!purchaseDate || !validateDate(purchaseDate)) return true;

    const purchase = new Date(purchaseDate);
    purchase.setHours(0, 0, 0, 0);
    const monthsDiff = (today.getFullYear() - purchase.getFullYear()) * 12 + (today.getMonth() - purchase.getMonth());
    return monthsDiff > 24;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="purchaseDate">Purchase Date:</label>
        <input
          type="date"
          id="purchaseDate"
          value={purchaseDate}
          onChange={handlePurchaseDateChange}
        />
        {errors.purchaseDate && <p style={{ color: 'red' }}>{errors.purchaseDate}</p>}
      </div>
      <div>
        <label htmlFor="repairDate">Repair Date:</label>
        <input
          type="date"
          id="repairDate"
          value={repairDate}
          onChange={handleRepairDateChange}
        />
        {errors.repairDate && <p style={{ color: 'red' }}>{errors.repairDate}</p>}
      </div>
      <div>
        <label htmlFor="warranty">Warranty:</label>
        <input
          type="checkbox"
          id="warranty"
          checked={warranty}
          onChange={handleWarrantyChange}
          disabled={isWarrantyDisabled()}
        />
        {isWarrantyDisabled() && (
          <p style={{ color: 'gray' }}>
            Warranty option is disabled as the purchase date is over 24 months ago.
          </p>
        )}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default DateForm;