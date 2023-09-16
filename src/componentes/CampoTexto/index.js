import "./CampoTexto.css"

const CampoTexto = (props) =>{
    return <div className="campo-texto">
        <label>{props.titulo}</label>
        <input placeholder = {props.placeholder} required={props.required} /> {/* buenas practicas para cerrar las ET input en React */}
    </div>
}

export default CampoTexto