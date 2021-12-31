import React from "react";
import greenbg from '../../assets/Ellipse1.png';
import greendots from '../../assets/newbackgroundinform.png';
import { NavLink } from "react-router-dom";
 function topmainsection(){
    return(
        <>
                <div className="row repeat-style-bg-of-inner" style={{backgroundImage: "url(" +  greendots  + ")"}}>
                    <div className="col-12 bg-green-top repeat-style-bg-of-inner  d-flex flex-column justify-content-center align-items-center" 
                    >
                           <div className=" top-main-section d-flex flex-column align-items-center"> 
                               <p className="web3-jobs text-center">   <NavLink
                                        to={`/`}
                                        exact> 
                                        Web3 jobs
                                        </NavLink></p>   
                                <h1 className="text-uppercase text-center" style={{width:"90%"}}>
                                Web3 Jobs helps dozens of companies expand their teams. You can too.
                                </h1>
                            </div>
                    </div>
                </div>
           
        
        </>
    )
}

export default topmainsection;

