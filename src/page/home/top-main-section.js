import React from "react";
import greenbg from '../../assets/Ellipse1.png';
import greendots from '../../assets/greendot.png';
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import {tags} from "./tags"
import { activetagf } from "./actions";                              
 function topmainsection({jobData,activetagf,activetag}){
    return(
        <>
                <div className="row repeat-style-bg-of-inner" style={{backgroundImage: "url(" +  greendots  + ")"}}>
                    <div className="col-12 bg-green-top repeat-style-bg-of-inner  d-flex flex-column justify-content-center align-items-center" style={{backgroundImage: "url(" +  greenbg  + ")"}}>
                           <div className=" top-main-section d-flex flex-column align-items-center"> 
                               <p className="web3-jobs text-center">
                                         <NavLink
                                        to={`/`}
                                        exact> 
                                        Web3 jobs
                                        </NavLink>
                                   
                                   </p>   
                                <h1 className="text-uppercase text-center">
                                comprehensive job board for Web3 positions
                                </h1>
                                <p className="little-text text-center">Browse {jobData.length} jobs in Web3 at 910 Web3 Projects</p>
                                <div className="two-buttons ">
                                <button className="btn">
                                Join Discord
                                </button>
                                <NavLink
                                    to="/positionform"
                                    exact
                                    >
                                   <button className="btn btn2">
                                    Post a Job 
                                    </button>
                    
                                </NavLink>
                                </div>
                            </div>
                            <div className="tags-button">
                                {
                                    tags && tags.map((item)=>{
                                            return(
                                                <button className={`btn ${activetag===item ? "active":""}`}
                                                 onClick={()=>activetagf(activetag===item ? "":item)}>{item}</button>
                                            )
                                    })
                                }

                                
                            </div>
                    </div>
                </div>
           
        
        </>
    )
}
const mapStateToProps = ({ home }) => {
    return {
        activetag:home.activetag
    };
};

export default connect(
    mapStateToProps,
    { activetagf }
)(topmainsection);



