import logo from './logo.svg';
import './App.css';
import LineChart from './components/LineChart';

function App() {
  return (
    <div className="App">
    <LineChart style={{maxWidth: '100vw', height: '100vh'}}></LineChart>
    </div>
  );
}

export default App;
