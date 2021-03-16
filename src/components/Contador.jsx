import React, {useState} from 'react'; 
import Boton from './Boton/Boton.jsx';
import './Contador.css';



function Contador (){
    
    const [count , setCount]=useState(0);
    

    return (
        <div className='contador-container'>
            <h2 className='main-title'>{count}</h2>
            
            <Boton name='Aumentar' action ={()=>setCount(count+1)}/>
            <Boton name='Disminuir' action ={()=>setCount(count-1)}/>
            <Boton name='Reiniciar' action ={()=>setCount(0)}/>


        </div>
    )
}
export default  Contador