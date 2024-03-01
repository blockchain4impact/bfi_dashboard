import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Org from "./Pages/ORG/Org";
import Bri from "./Pages/BRI/Bri";
import Biome from "./Pages/BIOME/Biome";
import Dfs from "./Pages/DFS/Dfs";
import AddData from "./Pages/AddData/AddData";
import EditData from "./Pages/EditData/EditData";
import Login from "./Pages/Login/Login";
function App() {
  return (
    <div className="App" style={{opacity: 0}}>
      <Router>
        <Navbar />
        <div className="home-container">
            <Sidebar />
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/org" Component={Org} />
            <Route path="/bri" Component={Bri} />
            <Route path="/biome" Component={Biome} />
            <Route path="/dfs" Component={Dfs} />
            <Route path="/add" Component={AddData} />
            <Route path="/edit" Component={EditData} />
            <Route path="/login" Component={Login} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
