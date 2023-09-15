import "./Formulario.css"
import CampoTexto from "../CampoTexto";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";


const Formulario = ()=>{
    const manejarEnvio = (e) =>{
        e.preventDefault();
    }
    
    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto titulo="Nombre" placeholder="Ingrese el Nombre"/>
            <CampoTexto titulo="Puesto" placeholder="Ingrese el Puesto"/>
            <CampoTexto titulo="Foto" placeholder="Ingrese enlace de Foto"/>
            <ListaOpciones/>
            <Boton texto="Crear"/>
        </form>
    </section>
}

export default Formulario;