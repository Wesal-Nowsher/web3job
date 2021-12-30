
import './App.css';
import './responsive.css';
import Home from "./page/home/home";
import Positionpageform from "./page/positionform/index"
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'; 
import React from "react";





function App() {
  return (
    <div className="App">
        <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/positionform' element={<Positionpageform />} />
        </Routes>
    </div>
  );
}

export default App;
