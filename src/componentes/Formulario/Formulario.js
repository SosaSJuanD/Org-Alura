import "./Formulario.css"
import CampoTexto from "../CampoTexto";
import ListaOpciones from "../ListaOpciones";
const Formulario = ()=>{
    return <section className="formulario">
        <form>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto titulo="Nombre" placeholder="Ingrese el Nombre"/>
            <CampoTexto titulo="Puesto" placeholder="Ingrese el Puesto"/>
            <CampoTexto titulo="Foto" placeholder="Ingrese enlace de Foto"/>
            <ListaOpciones/>
        </form>
    </section>
}

export default Formulario;