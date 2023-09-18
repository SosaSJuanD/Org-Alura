import "./Equipo.css"

const Equipo = (props) =>{
    // destruccturacion
    const {colorPrimario, colorSecundario, titulo} = props.datos;
    const obj ={
        backgroundColor: colorSecundario,
    }

    const estiloTitulo={
        borderColor: colorSecundario,
    }

    return <section className="equipo" style={obj}>
        <h3 style={estiloTitulo}> {titulo} </h3>
        <div className="colaboradores">

        </div>
    </section>
}

export default Equipo