import { useState } from "react";
import "./Formulario.css"
import CampoTexto from "../CampoTexto";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";


const Formulario = (props)=>{
    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")

    const manejarEnvio = (e) =>{
        e.preventDefault();
        let datosAEnviar ={
            nombre,
            puesto,
            foto,
            equipo
        }
        console.log(datosAEnviar)
    }
    
    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto 
                titulo="Nombre" 
                placeholder="Ingrese el Nombre" 
                required
                valor={nombre} 
                actuzalizarValor={actualizarNombre}
            />
            <CampoTexto 
                titulo="Puesto" 
                placeholder="Ingrese el Puesto" 
                required
                valor={puesto} 
                actuzalizarValor={actualizarPuesto}
            />
            <CampoTexto 
                titulo="Foto" 
                placeholder="Ingrese enlace de Foto" 
                required
                valor={foto} 
                actuzalizarValor={actualizarFoto}
            />
            <ListaOpciones
                valor = {equipo}
                actualizarEquipo={actualizarEquipo}
                equipos={props.equipos}
            />
            <Boton texto="Crear"/>
        </form>
    </section>
}

export default Formulario;