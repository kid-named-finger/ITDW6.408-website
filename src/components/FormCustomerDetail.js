function FormCustomerDetail() {
    return (
        <>
            <h2>Customer Details</h2>
            {/* Customer Type */}
            <div className="row">
                <fieldset className="border border-primary col-12 col-lg-11 ms-2 me-4">
                    <legend className="col-11 float-none w-auto">Customer type *</legend>
                    <div>
                        <label className="col-12 col-md-12 col-lg-4">Customer</label>
                        <input type="radio" id="customerType" name="customer-type" value="customer" checked />
                    </div>

                    <div>
                        <label className="col-12 col-md-12 col-lg-4">Business</label>
                        <input type="radio" id="businessType" name="customer-type" value="business" />
                    </div>
                </fieldset>
            </div>

            {/* Details */}
            <div className="row mt-2">
                <label className="col-12 col-md-12 col-lg-4">Title  *</label>
                <select className="col-12 col-md-12 col-lg-7">
                    <option value="Mr" selected>Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Ms">Ms</option>
                    <option value="Miss">Miss</option>
                    <option value="Dr">Dr</option>
                </select>
            </div>

            {/* First Name */}
            <div className="row mt-1">
                <label className="col-12 col-md-12 col-lg-4">First Name: *</label>
                <input className="col-12 col-md-12 col-lg-7" type="text" id="fname" pattern="^[a-zA-Z\s]+$" title="Name must include letters or spaces" required/>
            </div>
            {/* Last Name */}
            <div className="row mt-1">
                <label className="col-12 col-md-12 col-lg-4">Last Name: *</label>
                <input className="col-12 col-md-12 col-lg-7" type="text" id="lname" pattern="^[a-zA-Z\s]+$" title="Name must include letters or spaces" required/>
            </div>
            {/* Street */}
            <div className="row mt-1">
                <label className="col-12 col-md-12 col-lg-4">Street: *</label>
                <input className="col-12 col-md-12 col-lg-7" type="text" id="street" required/>
            </div>
            {/* Suburn */}
            <div className="row mt-1">
                <label className="col-12 col-md-12 col-lg-4">Suburb:</label>
                <input className="col-12 col-md-12 col-lg-7" type="text" id="suburb"/>
            </div>
            {/* City */}
            <div className="row mt-1">
                <label className="col-12 col-md-12 col-lg-4">City: *</label>
                <input className="col-12 col-md-12 col-lg-7" type="text" id="city" required/>
            </div>
            {/* Post Code */}
            <div className="row mt-1">
                <label className="col-12 col-md-12 col-lg-4">Post Code:</label>
                <input className="col-12 col-md-12 col-lg-7" type="text" id="postcode" maxLength="4" pattern="\d{4}" title="Post code must be 4 numbers"/>
            </div>
            {/* Phone Number */}
            <div className="row mt-1">
                <label for="phone" className="col-12 col-md-12 col-lg-4">Phone Number: *</label>
                <input className="col-12 col-md-12 col-lg-7" type="tel" id="phone" name="phone" pattern="^\+[1-9]{1}[0-9]{0,2}-[2-9]{1}[0-9]{2}-[2-9]{1}[0-9]{2}-[0-9]{4}$" title="+##-###-###-####" required/>
            </div>
            {/* Email */}
            <div className="row mt-1">
                <label className="col-12 col-md-12 col-lg-4">Email: *</label>
                <input className="col-12 col-md-12 col-lg-7" type="text" id="email" required/>
            </div>
        </>
    );
};

export default FormCustomerDetail;