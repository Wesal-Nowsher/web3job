import React from "react";
import Topsection from "./top-main-section";
import Tabledata from "./tabledata";
import Bottomsection from './bottom-section';


 function home(){
    return(
        <>
        <div className="container">
        <Topsection/>
        <Tabledata />
        <Bottomsection />
        </div>
        </>
    )
}

export default home;

