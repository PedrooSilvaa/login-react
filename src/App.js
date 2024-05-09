import Botao from './components/botao';
import eye from "./assets/eye.jpg"

import './App.css';
        


function App() {
  return (
    <div className="App">

      <form action="" className="formulario">
        <h1>Faça seu login</h1>
        <label htmlFor="">User:</label>
        <input type="text" />
        
        <label htmlFor="">Password:</label>
        <input type="Password" />
        <img src={eye} alt="" />

        <Botao name="Logar"/>
        <Botao name="Esqueci a senha"/>

      </form>
    </div>
  );
}

export default App;
