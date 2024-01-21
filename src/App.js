import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import { SegundoComponente } from './SegundoComponente';
import { TercerComponente } from './TercerComponente';
import { EventosComponente } from './EventosComponente';

function App() {
  const ficha_medica = {
    altura: '187cm',
    peso: '85kg',
    alergias: 'desconocidas',
    estado: 'Buena',
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Primera prueba con React
        </p>
        <div>
          <hr/>
          <EventosComponente />
          <hr/>
          <TercerComponente 
            nombre='David' 
            apellidos='Morales'
            ficha={ficha_medica}
          />
          {/*Carga de mi Primer componente */}
          <MiComponente/>
          <hr/>
          <SegundoComponente/>  
        </div>

      </header>
      
      
    </div>
  );
}

export default App;
