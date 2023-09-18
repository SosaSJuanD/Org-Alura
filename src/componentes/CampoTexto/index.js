import { useState } from "react"
import "./CampoTexto.css"

const CampoTexto = (props) =>{
    const [valor, actualizarValor] = useState("")
    
    const manejarCambio = (e) =>{
        actualizarValor(e.target.value)
    }

    return <div className="campo-texto">
        <label>{props.titulo}</label>
        <input 
            placeholder = {props.placeholder} 
            required={props.required} 
            value={valor}
            onChange={manejarCambio}
        /> {/* buenas practicas para cerrar las ET input en React */}
    </div>
}

export default CampoTexto