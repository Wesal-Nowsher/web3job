import React, {useEffect, useState} from "react";
import axios from "axios";

import Toptitlesection from "./top-titlesection";
import Jobdesc from  "./jobdescription";
import { useParams } from "react-router-dom";



 function Positionpageform(){
    const [jobData, setJobData] = useState([]);
    

    useEffect(() => {
      axios.get("https://api.kuratedao.xyz/set/12").then((res)=>{
        console.log("res:",res)
        let newdata=[];
        console.log("res:",res.data)
        res.data.map((one)=>{
            console.log("res:", JSON.parse(one[0]))
            newdata.push(JSON.parse(one[0]));
        })
        setJobData([...newdata]);

      })
      },[]);
    return(
        <>
        <div className="container p-0">
        <Toptitlesection jobDatacoming={jobData}/>
        <Jobdesc />
        </div>
        </>
    )
}

export default Positionpageform;

