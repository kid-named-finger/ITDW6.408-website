import { useState, useEffect } from "react";

function FormCustomerDetail({passDataToParent, sendCustomerDetails}) { 
    
    const [type, setType] = useState({customer: "checked", business: ""});  
 
    const updateCustomerType = (event) => { 
        if (event.target.value === "customer") { 
            passDataToParent(true); 
            setType({customer: "checked", business: ""}); 
        } else { 
            passDataToParent(false); 
            setType({customer: "", business: "checked"}); 
        } 
    }  
    const [customerDetails, setCustomerDetails] = useState({title: "Mr", firstname: "", lastname: "", street: "", suburb: "", city: "", postcode: "", phone: "", email: ""}); 
 
    const handleChange = (event) => { 
        const {name, value} = event.target; 
        setCustomerDetails( {...customerDetails, ...{[name]: value}}); 
    } 
   
    useEffect( () => { 
        sendCustomerDetails(customerDetails); 
    }, [customerDetails]); 

    return (
        <>
            <h2>Customer Details</h2>
            {/* Customer Type */}
            <div className="row">
                <fieldset className="border border-primary col-12 col-lg-11 ms-2 me-4">
                    <legend className="col-11 float-none w-auto">Customer type *</legend>
                    <div>
                        <label className="col-12 col-md-12 col-lg-4">Customer</label>
                        <input type="radio" id="customerType" name="customer-type" value="customer" checked={type.customer} onChange={(event) => updateCustomerType(event)}/>
                    </div>

                    <div>
                        <label className="col-12 col-md-12 col-lg-4">Business</label>
                        <input type="radio" id="businessType" name="customer-type" value="business" checked={type.business} onChange={(event) => updateCustomerType(event)}/>
                    </div>
                </fieldset>
            </div>

            {/* Details */}
            <div className="row mt-2"> 
                <label className="col-12 col-md-12 col-lg-4">Title *</label>                 
                <select className="col-12 col-md-12 col-lg-7" defaultValue="Mr" name="title" onChange={handleChange} required> 
                    <option value="Mr">Mr</option> 
                    <option value="Mrs">Mrs</option> 
                    <option value="Ms">Ms</option> 
                    <option value="Miss">Miss</option> 
                    <option value="Dr">Dr</option> 
                </select>    
            </div>                                   
            <div className="row mt-1"> 
                <label className="col-12 col-md-12 col-lg-4">First Name *</label> 
                <input className="col-12 col-md-12 col-lg-7" type="text" name="firstname" onChange={handleChange} pattern="^[a-zA-Z\s]+$" title="Name must include letters or spaces" required/> 
            </div> 
            <div className="row mt-1"> 
                <label className="col-12 col-md-12 col-lg-4">Last Name *</label> 
                <input className="col-12 col-md-12 col-lg-7" type="text" name="lastname" onChange={handleChange} pattern="^[a-zA-Z\s]+$" title="Name must include letters or spaces" required/> 
            </div> 
            {/* Street */}
            <div className="row mt-1">
                <label className="col-12 col-md-12 col-lg-4">Street: *</label>
                <input className="col-12 col-md-12 col-lg-7" type="text" name="street" onChange={handleChange} id="street" required/>
            </div>
            {/* Suburb */}
            <div className="row mt-1">
                <label className="col-12 col-md-12 col-lg-4">Suburb:</label>
                <input className="col-12 col-md-12 col-lg-7" type="text" name="suburb" onChange={handleChange} id="suburb" required/>
            </div>
            {/* City */}
            <div className="row mt-1">
                <label className="col-12 col-md-12 col-lg-4">City: *</label>
                <input className="col-12 col-md-12 col-lg-7" type="text" name="city" id="city" onChange={handleChange} required/>
            </div>
            {/* Post Code */}
            <div className="row mt-1">
                <label className="col-12 col-md-12 col-lg-4">Post Code:</label>
                <input className="col-12 col-md-12 col-lg-7" type="text" name="postcode" id="postcode" onChange={handleChange} maxLength="4" pattern="\d{4}" title="Post code must be 4 numbers"/>
            </div>
            {/* Phone Number */}
            <div className="row mt-1">
                <label for="phone" className="col-12 col-md-12 col-lg-4">Phone Number: *</label>
                <input className="col-12 col-md-12 col-lg-7" type="tel" id="phone" name="phone" onChange={handleChange} pattern="[0-9\s\(\)\-\+]+" title="+##-###-###-####" required/>
            </div>
            {/* Email */}
            <div className="row mt-1">
                <label className="col-12 col-md-12 col-lg-4">Email: *</label>
                <input className="col-12 col-md-12 col-lg-7" type="text" name="email" id="email" onChange={handleChange} required/>
            </div>
        </>
    );
};

export default FormCustomerDetail;