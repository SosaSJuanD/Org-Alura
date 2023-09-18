import {useState} from "react"
import "./MiOrg.css"


const MiOrg = (props) => {
    //Estado - hooks
    //hool = useState
    //useState()
    //const [nombreVariable, funcionActuliza] = useState(valorInicial);
    //como le damos el uso en el mismo archivo
    // const [mostrar, actuzalixarMostrar] = useState(true)
    // const manejarClick = () =>{
    //     console.log("Mostrar elemento", !mostrar)
    //     actuzalixarMostrar(mostrar);
    // }
    //el uso adeciado a trabes de props
    return <section className="orgSection">
        <h3 className="title">Mi organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.CambiarMostrar}/>
    </section>
}

export default MiOrg