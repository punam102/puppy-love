import './App.css';
// import Home from './Pages/Home';
import Allroutes from './Pages/Allroutes';
import Navbar from './Pages/Navbar';

function App() {
  return (
    <div className="App">
      {/* <h1>🐶Puppy love</h1> */}
      <Navbar/>
      {/* <Home/> */}
      <Allroutes/>
    </div>
  );
}

export default App;