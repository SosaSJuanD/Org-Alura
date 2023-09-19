import { useState } from "react"
import "./Campo.css"

const Campo = (props) =>{
    const placeholderModificado = `${props.placeholder}`
    
    
    
    //Destructuracion
    const {type="text"} =props
    console.log(type)

    const manejarCambio = (e) =>{
        props.actuzalizarValor(e.target.value)
    }

    return <div className= {`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input 
            placeholder = {placeholderModificado} 
            required={props.required} 
            value={props.valor}
            onChange={manejarCambio}
            type={type}
        /> {/* buenas practicas para cerrar las ET input en React */}
    </div>
}

export default Campo