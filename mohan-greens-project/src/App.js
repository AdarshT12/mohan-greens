import './App.css';
import Home from './home';
import Sidebar from "./Components/html/sidebar";

function App() {
  return (
    <div className="home-container">
      <div className="main-content">
        <Home />
      </div>
      <div className="sidebar-column">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
