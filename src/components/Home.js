import FormButtons from "./FormButtons";
import FormCourtesyPhone from "./FormCourtesyPhone";
import FormCustomerDetail from "./FormCustomerDetail";
import FormRepairDetail from "./FormRepairDetails";
import FormCost from "./FormCost";
import { useNavigate } from "react-router-dom";

function Home() {

    // Async data fetching
    const navigate = useNavigate();
    const onSubmit = async(event) => { 
        event.preventDefault();//prevent browser from sending data to server
        try {
            navigate("/invoice");
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
                        <FormCustomerDetail></FormCustomerDetail>
                    </div>

                    {/* Repair Details */}
                    <div className="col-12 col-lg-4 p-4 m-0" style={{minHeight: '30vh', backgroundColor: '#D5F5E3'}}>
                        <FormRepairDetail></FormRepairDetail>
                    </div>

                    {/* Phone and Cost */}
                    <div className="col-12 col-lg-4 p-0 m-0">
                        {/* Phone */}
                        <div className="p-4" style={{minHeight: '50vh', backgroundColor: '#2874A6'}}>
                            <FormCourtesyPhone></FormCourtesyPhone>
                        </div>
                        {/* Cost */}
                        <div className="p-4" style={{minHeight: '30vh', backgroundColor: '#EDBB99'}}>
                            <FormCost></FormCost>
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