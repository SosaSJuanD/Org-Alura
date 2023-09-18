import { useState } from 'react';
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';

function App() {
  const [mostrarFormulario, actulizarMostar ] = useState(true)
  //Ternarios --> condicion ? seMuestra : noSemuestra
  //condicion && seMuestras
  const CambiarMostrar = () =>{
    actulizarMostar(!mostrarFormulario)
  }

  return (
    <div>
      {/* {Header()}podemos hacer el llamado de tres maneras  */}
      {/* <Header></Header>podemos hacer el llamado de tres maneras   */}
      <Header/>{/* podemos hacer el llamado de tres maneras  */}
    
      {/* diferentes formas de poner la condicion */}
    
      {/* {mostrarFormulario === true ? <Formulario/> : <div></div>} */}
      {/* {mostrarFormulario ? <Formulario/> : <></>} */}
      {mostrarFormulario && <Formulario/>}

      <MiOrg CambiarMostrar={CambiarMostrar}/>
    </div>
  );
}

export default App;
