import { isValidDateValue } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
<script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>




function FormRepairDetail() {
    // The date you want to check
    const inputDate = new Date('2023-08-20'); 

    // Get the current date
    const currentDate = new Date();

    // Compare the input date with the current date
    if (inputDate < currentDate) {
        console.log('The input date is in the past.');
    } else {
        console.log('The input date is in the future.');
    }

    return (
        <>
            <h2>Purchase Details</h2>
            <div className="row mt-1">
                <label>
                    Purchase Date: 
                    <input type="date"/>
                </label>
            </div>

            <h2>Repair Details</h2>
            <div className="row mt-1">
                <label>
                Repair Date: 
                    <input className="" id="repairDate" type="date" max={new Date().toJSON().slice(0,10)}/>
                </label>
            </div>
            

            {/* Warranty */}
            <div className="row">
                <fieldset className="border border-primary col-12 col-lg11 ms-1 me-3 mb-3">
                    <legend className="col-11 float-none w-auto">Under Warranty</legend>
                    <div>
                        <label className="col-12 col-md-12 col-lg-4">Warranty</label>
                        <input type="checkbox" id="warranty"/>
                    </div>
                </fieldset>
            </div>

    
            {/* Other Details */}
            <div className="row mt-1">
                <label className="col-12 col-md-12 col-lg-4 me-3">IMEI: *</label>
                <input className="col-12 col-md-12 col-lg-7" type="text" id="imei" maxLength="15" pattern="\d{15}" title="IMEI must be a 15 digit long code" required/>
            </div>

            {/* Make */}
            <div className="row mt-2">
                <label className="col-12 col-md-12 col-lg-4 me-3">Make: *</label>
                <select className="col-12 col-md-12 col-lg-7">
                    <option value="Apple" selected>Apple</option>
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
                <input className="col-12 col-md-12 col-lg-7" type="number" id="modelNumber"/>
            </div>

            {/* Make */}
            <div className="row mt-2">
                <label className="col-12 col-md-12 col-lg-4 me-3">Fault Category:*</label>
                <select className="col-12 col-md-12 col-lg-7 ">
                    <option value="Screen" selected>Screen</option>
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
                <textarea className="col-12 col-md-12 col-lg-7" type="text" id="description" style={{maxHeight: '150px'}}/>
            </div>
        </>
    );
};

export default FormRepairDetail;