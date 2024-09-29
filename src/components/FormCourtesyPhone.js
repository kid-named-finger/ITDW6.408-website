import { useState } from "react";

function FormCourtesyPhone() {
    let courtesyList = [ 
        {id: 1, type: 'phone', phonename: 'iphone', bond: 275}, 
        {id: 2, type: 'phone', phonename: 'samsung galaxy', bond: 100}, 
        {id: 3, type: 'phone', phonename: 'nokia', bond: 100}, 
        {id: 4, type: 'charger', phonename: 'iphone charger', bond: 30}, 
        {id: 5, type: 'charger', phonename: 'samsung charger', bond: 30}, 
        {id: 6, type: 'charger', phonename: 'nokia charger', bond: 30}
    ]; 

    // Declare state and handle event
    const [phoneBorrow, setPhoneBorrow] = useState(0);
   
    let addPhone = (selectedOption) => { 
    selectedOption == 'none' ? setPhoneBorrow(0) : setPhoneBorrow(Number(selectedOption)); 
    } 

    return (
        <>
            <h2>Courtesy Phone</h2>

            {/* Phone types */}
            <h4 className="ms-4 mt-2">Choose a phone:</h4>
            <div className="row mt-2 ms-3">
                <label className="col-12 col-md-12 col-lg-4">Item Type</label>
                <select className="col-12 col-md-12 col-lg-7" id="phoneList"
                        onChange={(selected) => addPhone(selected.target.value)}>
                    <option value="none">None</option>
                    <option value="1">iPhone</option>
                    <option value="2">Samsung Galaxy</option>
                    <option value="3">Nokia</option>
                </select>
            </div>

            {/* Charger types */}
            <h4 className="ms-3 mt-2">Choose a charger</h4>
            <div className="row mt-2 ms-3">
                <label className="col-12 col-md-12 col-lg-4">Item Type</label>
                <select className="col-12 col-md-12 col-lg-7" id="chargerList">
                    <option value="none">None</option>
                    <option value="4">iPhone Charger</option>
                    <option value="5">Samsung Charger</option>
                    <option value="6">Nokia Charger</option>
                </select>
            </div>

            {/* Table of courtesy items */}
            <h4 className="ms-4 mt-2">Borrow items</h4>
            <div className="row mt-2 ms-3 me-3 bg-white">
                <table className="table table-bordered" id="borrowItems">
                    <tr>
                        <td>Item</td>
                        <td>Cost</td>
                    </tr>

                    {/* Display items into the table */}
                    {phoneBorrow == 0 ? (null) : ( 
                    <tr> 
                        <td>{courtesyList.filter(item => {return item.id == phoneBorrow})[0].phonename}</td> 
                        <td>{courtesyList.filter(item => {return item.id == phoneBorrow})[0].bond}</td> 
                    </tr> 
                    )}
                </table>
            </div>
        </>
    );
}

export default FormCourtesyPhone;