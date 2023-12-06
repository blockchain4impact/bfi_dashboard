import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import { BrowserRouter as Router } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <div className='home-container'>
          <Sidebar />
          <Home />
        </div>
      </Router>
    </div>
  );
}

export default App;
