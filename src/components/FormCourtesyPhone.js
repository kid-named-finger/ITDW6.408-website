import { useState } from "react";

function FormCourtesyPhone( { passDataToParent } ) {
 
    let courtesyList = [ 
        {id: 0, type: 'none', name: 'none', bond: 0},
        {id: 1, type: 'phone', name: 'iphone 10', bond: 275}, 
        {id: 2, type: 'phone', name: 'iphone 14', bond: 300}, 
        {id: 3, type: 'phone', name: 'iphone 16', bond: 500}, 
        {id: 4, type: 'phone', name: 'samsung galaxy', bond: 200},
        {id: 5, type: 'phone', name: 'nokia', bond: 150},
        {id: 6, type: 'phone', name: 'xiaomi', bond: 100},
        {id: 7, type: 'charger', name: 'iphone charger', bond: 45}, 
        {id: 8, type: 'charger', name: 'samsung charger', bond: 30}, 
        {id: 9, type: 'charger', name: 'nokia charger', bond: 25}, 
        {id: 9, type: 'charger', name: 'xiaomi', bond: 25}
    ]; 

    const [phoneBorrow, setPhoneBorrow] = useState(0);
    const [chargerBorrow, setChargerBorrow] = useState(0);

    // Adds the selected phone into the table
    let addPhone = (selectedOption) => { 
        selectedOption == 'none' ? setPhoneBorrow(0) : setPhoneBorrow(Number(selectedOption)); 
        let updateId = 0; 
        selectedOption == 'none' ? (updateId = 0) : (updateId = Number(selectedOption)) 
        let updateBond = courtesyList.filter(item => {return item.id == updateId})[0].bond 
            + courtesyList.filter(item => {return item.id == chargerBorrow})[0].bond; 
        
        // Update the bond value in the table 
        passDataToParent(updateBond);
    } 

    // Add the selected charger into the table, and update the bond value
    let addCharger = (selectedOption) => { 
        selectedOption == 'none' ? setChargerBorrow(0) : setChargerBorrow(Number(selectedOption)); 

        let updateId = 0; 
        selectedOption == 'none' ? (updateId = 0) : (updateId = Number(selectedOption)) 
        let updateBond = courtesyList.filter(item => {return item.id == phoneBorrow})[0].bond 
            + courtesyList.filter(item => {return item.id == updateId})[0].bond 

        passDataToParent(updateBond);
 } 

return(<>
    <h2>Courtesy Phone</h2>
    <h4>Choose a phone: </h4>
    <div class="row mt-2 ms-3">
        <label class="col-12 col-md-12 col-lg-4">Item Type </label> 
        <select class="col-12 col-md-12 col-lg-7" id="phoneList" 
            onChange={(selected) => addPhone(selected.target.value)}>
            <option value="none" selected>None</option> 
            <option value="1">iPhone 10</option> 
            <option value="2">iPhone 14</option>
            <option value="3">iPhone 16</option>
            <option value="4">Samsung Galaxy</option>
            <option value="5">Nokia</option>
            <option value="6">Xiaomi</option>
        </select> 
    </div> 

    <h4>Choose a charger: </h4>
    <div class="row mt-2 ms-3">
        <label class="col-12 col-md-12 col-lg-4">Item Type </label> 
        <select class="col-12 col-md-12 col-lg-7" id="chargerList" onChange={(selected) => addCharger(selected.target.value)}>
            <option value="none" selected>None</option> 
            <option value="7">iPhone Charger</option>
            <option value="8">Samsung Charger</option>
            <option value="9">Nokia Charger</option>
            <option value="9">Xiaomi Charger</option>
        </select> 
    </div> 

    <div class="row mt-2 ms-3 me-3 bg-white">
        <table class="table table-bordered" id="borrowItems">
            <tr>
                <td>Item</td>
                <td>Cost</td>
            </tr> 

            {/* Get the selected phone/charger and display in table */}
            {phoneBorrow == 0 ? (null) : ( 
                <tr> 
                    <td>{courtesyList.filter(item => {return item.id == phoneBorrow})[0].name}</td>
                    <td>{courtesyList.filter(item => {return item.id == phoneBorrow})[0].bond}</td> 
                </tr>) } 

            {chargerBorrow == 0 ? (null) : ( 
            <tr> 
                <td>{courtesyList.filter(item => {return item.id == chargerBorrow})[0].name}</td> 
                 <td>{courtesyList.filter(item => {return item.id == chargerBorrow})[0].bond}</td>
            </tr>) } 
        </table> 
    </div> 
 </>); 
} 

export default FormCourtesyPhone; 