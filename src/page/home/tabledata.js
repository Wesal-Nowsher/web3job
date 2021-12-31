import React, {useEffect, useState} from "react";
import icons from '../../assets/icons.png';
import loaderimg from '../../assets/loader.png';
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

 function Tabledata({jobData,activetag}){
    

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
                            <>
                            {
                              activetag!==""  && item.tags.includes(activetag) &&
                                <div className="row 4">
                                    {console.log("inside inacactive empty")}
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
                                        {
                                            item.tags && item.tags.length>0 && item.tags.map((tag)=>{
                                                return(
                                                    <button className="btn">{tag}</button>
                                                )
                                            })
                                        }
                                    </div>
            
                                </div>
                                <div className="col-2 d-flex justify-content-end align-items-center">
                                    <div className="location"><p>6y</p></div>
                                    <div className="apply-btn"><button className="btn"><a href="https://cnn.com">Apply now</a></button></div>
                                </div>
                            </div>
    
                            }
                            {
                                
                                    activetag===""  && 
                                      <div className="row 4">
                                          {console.log("inside active empty")}
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
                                              {
                                                  item.tags && item.tags.length>0 && item.tags.map((tag)=>{
                                                      return(
                                                          <button className="btn">{tag}</button>
                                                      )
                                                  })
                                              }
                                          </div>
                  
                                      </div>
                                      <div className="col-2 d-flex justify-content-end align-items-center">
                                          <div className="location"><p>6y</p></div>
                                          <div className="apply-btn"><button className="btn"><a href="https://cnn.com">Apply now</a></button></div>
                                      </div>
                                  </div>
          
                                  
                            }</>
                        )
                    })
                   

                }
                   
                 
                   
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
    {  }
  )(Tabledata);
  
  
  
