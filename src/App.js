import logo from './logo.svg';
import './App.css';
import { Outlet } from "react-router-dom";
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      {/* conditionally render those pages here */}
      <Outlet /> 
      {/* Outlet is where our pages will display */}
    </div>
  );
}

export default App;
