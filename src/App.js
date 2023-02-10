import logo from './logo.svg';
import './App.css';
import { Outlet } from "react-router-dom";
import Nav from './components/Nav';
import { Routes, Route } from 'react-router-dom';
import Coin from './pages/Coin'
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/coin" element={<Coin />} />
      </Routes>
      {/* conditionally render those pages here */}
      {/* <Outlet />  */}
      {/* Outlet is where our pages will display */}


    </div>
  );
}

export default App;
