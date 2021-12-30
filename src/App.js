
import './App.css';
import './responsive.css';
import Home from "./page/home/home";
import Positionpageform from "./page/positionform/index"
import Jobdec from './page/jobdescirption'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'; 
import React from "react";





function App() {
  return (
    <div className="App">
        <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/positionform' element={<Positionpageform />} />
              <Route exact path='/jobdescription' element={<Jobdec />} />
        </Routes>
    </div>
  );
}

export default App;
