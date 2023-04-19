
import './App.css';
import Home from './Component/Home/Home';
import Database from './Component/Data/db.json';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
      <Home data ={Database}/>
     
      </header>
    </div>
  );
}

export default App;
