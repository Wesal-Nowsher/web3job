import React, {useEffect, useState} from "react";
import axios from "axios";
import icons from '../../assets/icons.png';
import loaderimg from '../../assets/loader.png';
import { NavLink } from "react-router-dom";

 function Tabledata(){
    
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
            <div className="row">
                <div className="tabledata-padding">
                    {
                         jobData && jobData.length===0 &&
                         <div className="d-flex justify-content-center">
                             <img  src={loaderimg}/>
                         </div> 
                    }
                 {
                    jobData && jobData.length>0 && jobData.map((item,index)=>{
                        return(
                            <div className="row 4">
                            <div className="col-5 d-flex">
                                <div className="logo">
                                    <img src={icons} />
                                </div>
                                <div className="d-flex flex-column desifg">
                                   
                                        <NavLink
                                        to={`/jobdescription/${index}`}
                                        exact> <h4 className="cursor-pointer">
                                        {item.title}</h4>
                                        </NavLink>
                                    
                                    <p>{item.company}</p>
                                </div>
                            </div>
                            <div className="col-5 d-flex ">
                                <div className="location">
                                    <p>{item.description}</p>
                                </div>
                                <div className="tags-buttons-selected">
                                    <button className="btn">Non-Tech</button>
                                    <button className="btn">Sales</button>
                                    <button className="btn">Marketing</button>
                                    <button className="btn">Communicty Manager</button>
        
                                </div>
        
                            </div>
                            <div className="col-2 d-flex justify-content-end align-items-center">
                                <div className="location"><p>6y</p></div>
                                <div className="apply-btn"><button className="btn"><a href="https://cnn.com">Apply now</a></button></div>
                            </div>
                        </div>
                        )
                    })
                   

                }
                   
                 
                   
                </div>
              
            
            </div>
          
        
        </>
    )
}

export default Tabledata;

