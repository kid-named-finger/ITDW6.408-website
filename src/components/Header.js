import { Link } from "react-router-dom";

function Header() {

    const headerStyle = {
        minHeight: '15vh',
        backgroundColor: '#2C3E50'
    };
    const taglineStyle= {
        minHeight: '15vh',
        backgroundColor: '#2C3E50'
    };
    
    // Component
    return (
        <>  
            <div className="container-fluid">
                <header className="row" style={headerStyle}>
                    <div className="col-12 col-md-12 col-lg-8 text-center text-white display-5"
                        style={taglineStyle}>
                            Phone Fix Booking System
                    </div>

                    <div className="col-12 col-md-12 col-lg-4">
                        <div className="row">
                            <Link to="/" class="col-12 col-md-6 col-lg-6 p-0 m-0 bg-info border border-dark text-center text-white"
                            style={{textDecoration: 'none'}}>Home</Link>
                            <Link to="/advancedJS" class="col-12 col-md-6 col-lg-6 p-0 m-0 bg-info border border-dark text-center text-white"
                            style={{textDecoration: 'none'}}>Extension</Link>
                        </div>
                    </div>
                </header>
            </div>
        </>
    );
}

export default Header;