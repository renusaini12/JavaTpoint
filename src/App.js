import logo from './logo.svg';
import './App.css';
import Javatpoint from './components/Javatpoint';
import Nav from './components/Nav';
import Contain1 from './components/Contain1.jsx';
import Contain2 from './components/Contain2.jsx';
import Contain3 from './components/Contain3.jsx';
import Contain4 from './components/Contain4.jsx';

function App() {
  return (
    <div className="App">
      <Javatpoint/>
      <Nav/>
      <Contain1/>
      <Contain2/>
      <Contain3/>
      <Contain4/>
    </div>
  );
}

export default App;
