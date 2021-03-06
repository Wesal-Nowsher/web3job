import React from "react";
import greenbg from '../../assets/Ellipse1.png';
import greendots from '../../assets/newbackgroundinform.png';
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
 function Toptitlesection({jobDatacoming}){
    const {index} = useParams();
    
    console.log(index && index);
        return(
        <>
                <div className="row justify-content-center repeat-style-bg-of-inner" >
                    <div className="col-10 p-0 bg-green-top repeat-style-bg-of-inner  d-flex flex-column justify-content-center align-items-center" 
                    >
                           <div className="  jobdesc d-flex flex-column " > 
                               <p className="web3-jobs text-center">   <NavLink
                                        to={`/`}
                                        exact> 
                                        Web3 jobs
                                        </NavLink></p>   
                                <h1 className="" >
                                    {jobDatacoming && jobDatacoming.length>0 && jobDatacoming[index && index] &&jobDatacoming[index].title}
                                
                                </h1>
                            </div>
                    </div>
                </div>
           
        
        </>
    )
}

export default Toptitlesection;

