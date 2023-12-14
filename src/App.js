import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Timeline from "./Components/Timeline/Timeline";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <div className='home-container'>
          <Sidebar />
          <Routes>
            <Route path='/' Component={Home} />
            {["/dfs", "/bri", "/org", "/biome"].map((path, index) =>
              <Route path={path} Component={Timeline} key={index} />
            )}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
