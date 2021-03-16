import React from 'react';
import './Boton.css'
function Boton (props){
    return (
        <div>
             <button className='boton' onClick={props.action} >{props.name}</button>
        </div>
       
    )
}
export default Boton