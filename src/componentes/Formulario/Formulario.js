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

    const [titulo, actualizarTitulo] = useState("");
    const [color, actualizarColor] = useState(""); 

    const {registarColaborador, crearEquipo } = props

    const manejarEnvio = (e) =>{
        e.preventDefault();
        let datosAEnviar ={
            nombre,
            puesto,
            foto,
            equipo
        }
        registarColaborador(datosAEnviar)
    }

    const manejarNuevoEquipo = (e) =>{
        e.preventDefault()
        crearEquipo({titulo,colorPrimario: color})
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
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <CampoTexto 
                titulo="titulo" 
                placeholder="Ingrese el titulo" 
                required
                valor={titulo} 
                actuzalizarValor={actualizarTitulo}
            />
            <CampoTexto 
                titulo="Color" 
                placeholder="Ingrese el color en Hexa" 
                required
                valor={color} 
                actuzalizarValor={actualizarColor}
            />
            <Boton texto="Registar equipo"/>
        </form>
    </section>
}

export default Formulario;