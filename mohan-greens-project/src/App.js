import './App.css';
import Home from '../src/home';
import Sidebar from "../src/Components/html/sidebar";

function App() {
  return (
   <>
   <div className="home-container">
        <div className="navbar-column">
          <Home/>
        </div>
        <div className="sidebar-column">
            <Sidebar/>
        </div>
      </div>  
   </>
  );
}

export default App;
