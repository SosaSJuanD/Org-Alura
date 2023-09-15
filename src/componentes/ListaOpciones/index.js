import "./ListaOpciones.css"

const ListaOpciones= () =>{
    //Metodo map 
    const equipos =[
        "Programación",
        "Front End",
        "Data Science",
        "Devops",
        "UX y Diseño",
        "Móvil",
        "Innovación y Gestión"
    ]


    return <div className="lista-opciones">
        <label>Equipos</label>
        <select>
            { equipos.map((equipos, index) =>{
                return <option key={index}>{equipos}</option>
            })}
        </select>
    </div>
}


export default ListaOpciones