
import './App.css';
import './responsive.css';
import Home from "./page/home/home";
import Positionpageform from "./page/positionform/index"
import Jobdec from './page/jobdescirption'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'; 
import React from "react";
import { connect } from "react-redux";





function App() {
  return (
    <div className="App">
        <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/positionform' element={<Positionpageform />} />
              <Route exact path='/jobdescription/:index' element={<Jobdec />} />
        </Routes>
    </div>
  );
}

const mapStateToProps = ({ }) => {
  return {


  };
};

export default connect(
  mapStateToProps,
  {}
)(App);

