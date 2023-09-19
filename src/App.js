import { useState } from 'react';
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Colaborador from './componentes/Colaborador';

function App() {
  const [mostrarFormulario, actulizarMostar ] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([])



  //Ternarios --> condicion ? seMuestra : noSemuestra
  //condicion && seMuestras
  const CambiarMostrar = () =>{
    actulizarMostar(!mostrarFormulario)
  }

  //registrar colaborador

  const registarColaborador = (colaborador)=>{
    console.log("nuevo colaborador", colaborador)
    
    
    //spread operator
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //Lista de Equipos
  const equipos = [
    {
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9",
    },
    {
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    {
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
    },
    {
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
    },
    {
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },
    {
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",
    },
    {
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF",
    },
  ]

  return (
    <div>
      {/* {Header()}podemos hacer el llamado de tres maneras  */}
      {/* <Header></Header>podemos hacer el llamado de tres maneras   */}
      
      <Header/>{/* podemos hacer el llamado de tres maneras  */}
    
      
      {/* diferentes formas de poner la condicion */}
      {/* {mostrarFormulario === true ? <Formulario/> : <div></div>} */}
      {/* {mostrarFormulario ? <Formulario/> : <></>} */}
      
      {
        mostrarFormulario && <Formulario 
          equipos={equipos.map( (equipo) => equipo.titulo)}
          registarColaborador={registarColaborador}
        />
      }
      
      
      <MiOrg CambiarMostrar={CambiarMostrar}/>
      
      {
        equipos.map( (equipo) =><Equipo 
            datos={equipo} 
            key={equipo.titulo}
            colaboradores={colaboradores}
          />
        )
      }
    </div>
  );
}

export default App;
