import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';

function App() {
  return (
    <div>
      {/* {Header()}podemos hacer el llamado de tres maneras  */}
      {/* <Header></Header>podemos hacer el llamado de tres maneras   */}
      <Header/>{/* podemos hacer el llamado de tres maneras  */}
      <Formulario/>
    </div>
  );
}

export default App;
