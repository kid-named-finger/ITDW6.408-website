import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Invoice() { 
    const location = useLocation();   
    const receivedData = location.state.attachedData;
    
    // Create a randomly generated Job Number
    const [jobNumber, setJobNumber] = useState("");
    useEffect(() => {
        const randomJobNumber = Math.floor(100000 + Math.random() * 900000);
        setJobNumber(randomJobNumber);
    }, []);
    
    // Check if component is receiving data from Home component
    if (!receivedData) { 
        return <h2>Error: No data is being passed on.</h2>; 
    } 
    return (
        <>
            <div style={{minHeight: '60vh'}}>
                {/* Header */}
                <div className="bg-secondary p-3 row">
                    <h1 className="col-6">Repair Booking</h1>
                    <p className="col-6">Amount Due: <br></br>
                    <span style={{fontSize: "23px"}}>${receivedData.costDetails.totalfee}</span></p>
                </div>
                {/* Customer Details */}
                <div className="p-3 row">
                    <div className="col-6"> 
                        <h4>Customer Details:</h4> 
                        <p>Customer type: {receivedData.sharedCustomerType ? "Customer" : "Business" } </p>
                        <p>Name: {receivedData.customerDetails.title} {receivedData.customerDetails.firstname} {receivedData.customerDetails.lastname}</p>
                        <p>Suburb: {receivedData.customerDetails.street}, {receivedData.customerDetails.suburb}</p>
                        <p>{receivedData.customerDetails.city} {receivedData.customerDetails.postcode}</p>
                        <p>{receivedData.customerDetails.phone}</p>
                        <p>{receivedData.customerDetails.email}</p>
                    </div>

                    <div className="col-6">
                        <h4>Repair Job:</h4>
                        <p>Job Number: {jobNumber}</p>
                        <p>Invoice Date: {new Date().toLocaleDateString("en-NZ", {year: 'numeric', month: '2-digit', day: '2-digit'})}</p>
                        <p>Invoice Time: {new Date().toLocaleTimeString("en-NZ", {hour: '2-digit', minute: '2-digit', hour12: false})}</p>
                    </div>
                </div>
                {/* Repair Details */}
                <hr/>
                <div className="p-3">
                    <h4>Repair Details:</h4>
                    <p>Purchase Date: {receivedData.repairDetails.purchasedate}</p>
                    <p>Repair Date: {receivedData.repairDetails.repairdate}</p>
                    <p>Warranty: {receivedData.repairDetails.warranty}</p>
                    <p>IMEI #: {receivedData.repairDetails.imei}</p>
                    <p>Device Make: {receivedData.repairDetails.make}</p>
                    <p>Model Number: {receivedData.repairDetails.modelnumber}</p>
                    <p>Fault: {receivedData.repairDetails.fault}</p>
                    <p>Description: {receivedData.repairDetails.description}</p>
                </div>
                {/* Courtesy loan device detials */}
                <div className="p-3">
                    <h4>Courtesy Loan Device Details:</h4>
                    <div className="mt-2 ms-4 me-3 bg-white">
                        <table className="table table-bordered" style={{width: '40%'}}>
                            <tbody>
                                <tr>
                                    <td>Item</td>
                                    <td>Cost</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* Totals */}
                <div className="p-3 row">
                    <div className="col-6"></div>
                    <div className="col-6">
                        <h4>Totals:</h4>
                        <p>Bond: ${Number(receivedData.sharedBond || 0).toFixed(2)}</p>
                        <p>Service Fee: ${receivedData.costDetails.servicefee}</p>
                        <p>Total: ${receivedData.costDetails.total}</p>
                        <p>GST: ${receivedData.costDetails.GST}</p>
                        <p>Total + GST: ${receivedData.costDetails.totalfee}</p>
                    </div>
                </div>
                {/* Footer */}
                <hr/>
                <div className="p-3 row">
                    <div className="col-6">
                        <p className="fs-5"><strong>Phone Fix Services</strong></p>
                        <p>Address: 501 Gloucester Street<br></br> Taradale, Napier 4112</p>
                    </div>
                    <div className="col-6">
                        <p className="fs-5"><strong>Contact Us:</strong></p>
                        <p>Phone: 06 974 8000</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Invoice;