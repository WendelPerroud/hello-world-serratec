import "./App.css"
import PrimeiroComponente from './components/PrimeiroComponente';
import SegundoComponente from './components/SegundoComponente';

const App = () => {
  return (
    <div className='App'>
      <PrimeiroComponente />
      {/* Formulário de Login */}
      <SegundoComponente />
      {/* Exercício */}
    </div>
  );
}

export default App;
