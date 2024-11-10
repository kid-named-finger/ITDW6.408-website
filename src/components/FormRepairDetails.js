import { useEffect, useState } from "react";

function FormRepairDetail({ passDataToParent, sendRepairDetails }) {
    const updateWarranty = (value) => {
        passDataToParent(value);
    }

    const [repairDetails, setRepairDetails] = useState({purchasedate: "", repairdate: "", warranty: "", imei: "", make: "", modelnumber: "", fault: "", description: ""});
    const [isWarrantyDisabled, setIsWarrantyDisabled] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setRepairDetails({...repairDetails, [name]: value });
    };

    // Disable warranty checkbox if purchase date is more than 24 months ago
    const checkWarrantyEligibility = (purchaseDate) => {
        if (purchaseDate) {
            const currentDate = new Date();
            const selectedDate = new Date(purchaseDate);
            const monthDifference = (currentDate.getFullYear() - selectedDate.getFullYear()) * 12 + (currentDate.getMonth() - selectedDate.getMonth());

            setIsWarrantyDisabled(monthDifference > 24);
        } else {
            setIsWarrantyDisabled(false);
        }
    };

    useEffect(() => {
        checkWarrantyEligibility(repairDetails.purchasedate);
    }, [repairDetails.purchasedate]);

    useEffect(() => {
        sendRepairDetails(repairDetails);
    }, [repairDetails]);

    return (
        <>
            <h2>Purchase Details</h2>
            <div className="row mt-1">
                <label>
                    Purchase Date:
                    <input type="date" name="purchasedate" onChange={handleChange} required />
                </label>
            </div>

            <h2>Repair Details</h2>
            <div className="row mt-1">
                <label>
                    Repair Date:
                    <input className="" name="repairdate" id="repairDate" onChange={handleChange} type="date" max={new Date().toJSON().slice(0,10)} required />
                </label>
            </div>

            {/* Warranty */}
            <div className="row">
                <fieldset className="border border-primary col-12 col-lg-11 ms-1 me-3 mb-3">
                    <legend className="col-11 float-none w-auto">Under Warranty</legend>
                    <div>
                        <label className="col-12 col-md-12 col-lg-4">Warranty</label>
                        <input type="checkbox" name="warranty" id="warranty" onChange={(event) => updateWarranty(event.target.checked)} disabled={isWarrantyDisabled}/>
                    </div>
                </fieldset>
            </div>

            {/* IMEI */}
            <div className="row mt-1">
                <label className="col-12 col-md-12 col-lg-4 me-3">IMEI: *</label>
                <input className="col-12 col-md-12 col-lg-7" type="text" onChange={handleChange} name="imei" id="imei" maxLength="15" pattern="\d{15}" title="IMEI must be a 15 digit long code" required />
            </div>

            {/* Make */}
            <div className="row mt-2">
                <label className="col-12 col-md-12 col-lg-4 me-3">Make: *</label>
                <select className="col-12 col-md-12 col-lg-7" defaultValue="Apple" name="make" onChange={handleChange} required>
                    <option value="Apple">Apple</option>
                    <option value="LG">LG</option>
                    <option value="Motorola">Motorola</option>
                    <option value="Nokia">Nokia</option>
                    <option value="Samsung">Samsung</option>
                    <option value="Sony">Sony</option>
                    <option value="Other">Other</option>
                </select>
            </div>

            {/* Model Number */}
            <div className="row mt-1">
                <label className="col-12 col-md-12 col-lg-4 me-3">Model Number: </label>
                <input className="col-12 col-md-12 col-lg-7" onChange={handleChange} type="number" name="modelnumber" id="modelNumber" />
            </div>

            {/* Fault */}
            <div className="row mt-2">
                <label className="col-12 col-md-12 col-lg-4 me-3">Fault Category:*</label>
                <select className="col-12 col-md-12 col-lg-7" defaultValue="Screen" onChange={handleChange} name="fault" required>
                    <option value="Screen">Screen</option>
                    <option value="Charging">Charging</option>
                    <option value="Battery">Battery</option>
                    <option value="SD-Storage">SD Storage</option>
                    <option value="Software">Software</option>
                    <option value="Other">Other</option>
                </select>
            </div>

            {/* Description */}
            <div className="row mt-1">
                <label className="col-12 col-md-12 col-lg-4 me-3">Description: </label>
                <textarea className="col-12 col-md-12 col-lg-7" onChange={handleChange} type="text" name="description" id="description" style={{ maxHeight: '150px' }} />
            </div>
        </>
    );
}

export default FormRepairDetail;
