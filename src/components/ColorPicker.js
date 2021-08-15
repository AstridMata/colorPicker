import React, {useState} from "react";

const ColorPicker = () => {
const [Cambio, setCambio]=useState(``);

    return ( 
    <>
        
            
        <div style = {{backgroundColor: `${Cambio}`, width: '100%', height: '40rem'}}>
        <div style = {{display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20rem'}}>
        <center>
                <h1>Color Picker</h1>
                <h3>{Cambio} </h3> 
                <input type="color" onChange={(e)=> setCambio (e.target.value)}/>
        </center>
        </div>
        </div>
        
        
        
    </>);
}
 
export default ColorPicker;