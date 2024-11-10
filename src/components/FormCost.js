import { useEffect, useState } from "react";

function FormCost({ sharedPropBond, sharedPropWarranty, sendCostDetails }) {
    const [total, setTotal] = useState(0);
    const [GST, setGST] = useState(0);
    const [totalFee, setTotalFee] = useState(0);

    useEffect(() => {
        const serviceFee = sharedPropWarranty ? 0 : 85;
        const serviceTotal = parseFloat(sharedPropBond || 0) + serviceFee;
        const calculatedGST = (serviceTotal * 0.15).toFixed(2);
        const calculatedTotalFee = (parseFloat(calculatedGST) + serviceTotal).toFixed(2);

        setTotal(serviceTotal);
        setGST(calculatedGST);
        setTotalFee(calculatedTotalFee);

        sendCostDetails({servicefee: serviceFee, total: serviceTotal, GST: calculatedGST, totalfee: calculatedTotalFee});
    }, [sharedPropBond, sharedPropWarranty, sendCostDetails]);

    return (
        <>
            <h2>Cost</h2>
            <div className="row mt-2 ms-1">
                <label className="col-12 col-md-12 col-lg-4">Bond ($):</label>
                <input className="col-12 col-md-12 col-lg-7" type="number" value={sharedPropBond || 0} readOnly />
            </div>
            <div className="row mt-1 ms-1">
                <label className="col-12 col-md-12 col-lg-4">Service Fee ($):</label>
                <input className="col-12 col-md-12 col-lg-7" type="number" value={sharedPropWarranty ? 0 : 85} readOnly />
            </div>
            <div className="row mt-1 ms-1">
                <label className="col-12 col-md-12 col-lg-4">Total ($):</label>
                <input className="col-12 col-md-12 col-lg-7" type="number" value={total} readOnly />
            </div>
            <div className="row mt-1 ms-1">
                <label className="col-12 col-md-12 col-lg-4">GST:</label>
                <input className="col-12 col-md-12 col-lg-7" type="number" value={GST} readOnly />
            </div>
            <div className="row mt-1 ms-1">
                <label className="col-12 col-md-12 col-lg-4">Total(+GST):</label>
                <input className="col-12 col-md-12 col-lg-7" type="number" value={totalFee} readOnly />
            </div>
        </>
    );
}

export default FormCost;
