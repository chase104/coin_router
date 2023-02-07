import logo from './logo.svg';
import './App.css';
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav>
        buttons of the nav
      </nav>
      {/* conditionally render those pages here */}
      <Outlet />
    </div>
  );
}

export default App;
