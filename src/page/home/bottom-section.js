import React from "react";

import icons from '../../assets/icons.png';
import BG from '../../assets/BG.png';
import BG1 from '../../assets/profile-img.png';
import BG2 from '../../assets/arrow.png';
import BG3 from '../../assets/commas.png';
 function tabledata(){
    return(
        <>
            <div className="row">
                <div className="bottomsection-padding"  >
                    <div className="row" style={{backgroundImage: "url(" +  BG  + ")"}}>
                        <div className="col-12 position-relative">
                            <h1 className="client-speaks">Our Client Speaks</h1>
                            <div className="comment-poper d-flex justify-content-center">
                                <div className="white-section  ">
                                        <h5>
                                        Incredible Experience   
                                        </h5>
                                        <p>I found a Web3 Job just with one click!<br/>
                                        Web3 Jobs helped me navigate the rising blockchain market and find myself a position
                                         that resonated with my own personal ambitions!
                                        </p>
                                        <img />
                                        {/* <img src={BG2} className="other-img" /> */}
                                </div>
                               
                            </div>
                            <img src={BG3} className="other-img" />
                            <div className="file-photo-section">
                                <div>
                                    <img src={BG1} />
                                </div>
                                <div className="profile-name-section">
                                    <h5>Lenilson</h5>
                                    <p>Full Stack Developer</p>
                                </div>
                            </div>
                            <div className="two-buttons d-flex justify-content-center ">
                                <button className="btn">
                                    Join Discord
                                </button>
                                <button className="btn">
                                    Post a Job 
                                </button>
                            </div>
                            <div className="copyright-section">
                                <p>©2022 DAOvelopers</p>
                            </div>
                        </div>
                    </div>
                   
                </div>
              
            
            </div>
          
        
        </>
    )
}

export default tabledata;

