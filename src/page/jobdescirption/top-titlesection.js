import React from "react";
import greenbg from '../../assets/Ellipse1.png';
import greendots from '../../assets/newbackgroundinform.png';
import { useParams } from "react-router-dom";

 function Toptitlesection({jobDatacoming}){
    const {index} = useParams();
    
    console.log(index && index);
        return(
        <>
                <div className="row repeat-style-bg-of-inner" >
                    <div className="col-12 p-0 bg-green-top repeat-style-bg-of-inner  d-flex flex-column justify-content-center align-items-center" 
                    >
                           <div className="  jobdesc d-flex flex-column " > 
                               <p className="web3-jobs text-center">Web3 jobs</p>   
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

