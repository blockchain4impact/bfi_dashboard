import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Home from './Pages/Home/Home';
import Org from './Pages/ORG/Org';
import Bri from './Pages/BRI/Bri';
import Biome from './Pages/BIOME/Biome';
import Dfs from './Pages/DFS/Dfs';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <div className='home-container'>
          <Sidebar />
          <Routes>
            <Route path='/' Component={Home} />
            <Route path='/org' Component={Org} />
            <Route path='/bri' Component={Bri} />
            <Route path='/biome' Component={Biome} />
            <Route path='/dfs' Component={Dfs} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
