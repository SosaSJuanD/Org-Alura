import "./ListaOpciones.css"

const ListaOpciones = (props) =>{
    //Metodo map 
    // const equipos =[
    //     "Programación",
    //     "Front End",
    //     "Data Science",
    //     "Devops",
    //     "UX y Diseño",
    //     "Móvil",
    //     "Innovación y Gestión"
    // ]

    const manejarCambio = (e) =>{
        props.actualizarEquipo(e.target.value)
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar Equipo</option>
            { props.equipos.map((equipo, index) =><option key={index} value={equipo}>{equipo}</option>)}
            {/* {console.log(props.equipos)} */}
        </select>
    </div>
}


export default ListaOpciones