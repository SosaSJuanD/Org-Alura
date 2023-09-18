import { useState } from "react"
import "./CampoTexto.css"

const CampoTexto = (props) =>{
    const placeholderModificado = `${props.placeholder}`
    
    const manejarCambio = (e) =>{
        props.actuzalizarValor(e.target.value)
    }

    return <div className="campo-texto">
        <label>{props.titulo}</label>
        <input 
            placeholder = {placeholderModificado} 
            required={props.required} 
            value={props.valor}
            onChange={manejarCambio}
        /> {/* buenas practicas para cerrar las ET input en React */}
    </div>
}

export default CampoTexto