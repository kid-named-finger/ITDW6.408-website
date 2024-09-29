function FormCost() {
    return (
        <>
            <h2>Cost</h2>
            <div className="row mt-2 ms-1">
                <label className="col-12 col-md-12 col-lg-4">Bond ($):</label>
                <input className="col-12 col-md-12 col-lg-7" type="number" id="bond" value="0.00" readonly/>
            </div>
            <div className="row mt-1 ms-1">
                <label className="col-12 col-md-12 col-lg-4">Service Fee ($):</label>
                <input className="col-12 col-md-12 col-lg-7" type="number" id="serviceFee" value="85.00" readonly/>
            </div>
            <div className="row mt-1 ms-1">
                <label className="col-12 col-md-12 col-lg-4">Total ($):</label>
                <input className="col-12 col-md-12 col-lg-7" type="number" id="totalFee" value="0.00" readonly/>
            </div>
            <div className="row mt-1 ms-1">
                <label className="col-12 col-md-12 col-lg-4">GST:</label>
                <input className="col-12 col-md-12 col-lg-7" type="number" id="GST" value="0.00" readonly/>
            </div>
            <div className="row mt-1 ms-1">
                <label className="col-12 col-md-12 col-lg-4">Total(+GST):</label>
                <input className="col-12 col-md-12 col-lg-7" type="number" id="totalFee" value="0.00" readonly/>
            </div>
        </>
    );
}

export default FormCost;
   
