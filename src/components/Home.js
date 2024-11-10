import FormButtons from "./FormButtons";
import FormCourtesyPhone from "./FormCourtesyPhone";
import FormCustomerDetail from "./FormCustomerDetail";
import FormRepairDetail from "./FormRepairDetails";
import FormCost from "./FormCost";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Home() {
    // Parent component 'Home'
    const updateSharedState = (value) => setSharedBond(value);
    const [sharedBond, setSharedBond] = useState(0);

    const updateWarranty = (value) => {setsharedWarranty(value);};
    const [sharedWarranty, setsharedWarranty] = useState(false);

    const updateCustomerType = (value) => setSharedCustomerType(value);
    const [sharedCustomerType, setSharedCustomerType] = useState(true);

    const [customerDetails, setCustomerDetails] = useState({title: "Mr", firstname: "", lastname: "",});
    const [repairDetails, setRepairDetails] = useState({purchasedate: "", repairdate: "", warranty: "", imei: "", make: "", modelnumber: "", fault: "", description: ""});
    const [costDetails, setCostDetails] = useState({servicefee: "", total: "", GST: "", totalfee: ""});

    // Async data fetching
    const navigate = useNavigate();
    const onSubmit = async(event) => { 
        event.preventDefault(); //Prevent browser from sending data to server
        try {
            const attachedData = {sharedBond, sharedCustomerType, customerDetails, repairDetails, costDetails};
            navigate("/invoice", {state: {attachedData}});
        }
        catch(e) {
            alert('Error'); 
        }
    }

    return (
        <>
            <div className="container-fluid">
                <form className="row" style={{minHeight: '60vh'}} onSubmit={onSubmit}>
                    {/* Customer Details */}
                    <div className="col-12 col-lg-4 p-4 m-0" style={{minHeight: '30vh', backgroundColor: '#FCF3CF'}}>
                        <FormCustomerDetail passDataToParent={updateCustomerType} sendCustomerDetails={(value) => setCustomerDetails(value)} /> 
                    </div>

                    {/* Repair Details */}
                    <div className="col-12 col-lg-4 p-4 m-0" style={{minHeight: '30vh', backgroundColor: '#D5F5E3'}}>
                        <FormRepairDetail passDataToParent={updateWarranty} sendRepairDetails={(value) => setRepairDetails(value)}/>
                    </div>

                    {/* Phone and Cost */}
                    <div className="col-12 col-lg-4 p-0 m-0">
                        {/* Phone */}
                        <div className="p-4" style={{minHeight: '50vh', backgroundColor: '#2874A6'}}>
                            <FormCourtesyPhone passDataToParent={updateSharedState}/>
                        </div>
                        {/* Cost */}
                        <div className="p-4" style={{minHeight: '30vh', backgroundColor: '#EDBB99'}}>
                            <FormCost sendCostDetails={(value) => setCostDetails(value)} sharedPropBond={sharedBond} sharedPropWarranty={sharedWarranty} sharedPropCustomerType={sharedCustomerType} /> 
                        </div>
                    </div>

                    {/* Button Area */}
                    <div className="p-4 text-center" style={{minHeight: '10vh', backgroundColor: '#EDBB99'}}>
                        <FormButtons></FormButtons>
                    </div>
                    
                </form>
            </div>
        </>
    );
};

export default Home;