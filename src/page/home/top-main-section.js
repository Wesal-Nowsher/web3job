import React from "react";
import greenbg from '../../assets/Ellipse1.png';

 function topmainsection(){
    return(
        <>
                <div className="row">
                    <div className="col-12 bg-green-top  d-flex flex-column justify-content-center align-items-center" style={{backgroundImage: "url(" +  greenbg  + ")"}}>
                           <div className=" top-main-section d-flex flex-column align-items-center"> 
                               <p className="web3-jobs text-center">Web3 jobs</p>   
                                <h1 className="text-uppercase text-center">
                                comprehensive job board for Web3 positions
                                </h1>
                                <p className="little-text text-center">Browse 8,130 jobs in Web3 at 910 Web3 Projects</p>
                                <div className="two-buttons ">
                                <button className="btn">
                                Join Discord
                                </button>
                                <button className="btn">
                                Post a Job 
                                </button>
                                </div>
                            </div>
                            <div className="tags-button">
                                <button className="btn">Solidity</button>
                                <button className="btn">Defi</button>
                                <button className="btn">NFT</button>
                                <button className="btn">Web3 js</button>
                                <button className="btn">Solana</button>
                                <button className="btn">Front end</button>
                                <button className="btn">Back end</button>
                                <button className="btn">Full stack</button>
                                <button className="btn">Mobile</button>
                                <button className="btn">React</button>
                                <button className="btn">JavaScript</button>
                                <button className="btn">Node</button>
                                <button className="btn">Ruby</button>
                                <button className="btn">Java</button>
                                <button className="btn">Scala</button>
                                <button className="btn">Marketing</button>
                                <button className="btn">Product manager</button>
                                <button className="btn">Non-tech</button>
                                <button className="btn">community Manager</button>
                                <button className="btn">Project manager</button>
                                <button className="btn">Sales</button>
                                <button className="btn">Customer Support</button>
                                <button className="btn">Entry level</button>
                                <button className="btn">Golang</button>
                                <button className="btn">Golang</button>
                                <button className="btn">Golang</button>
                                <button className="btn">Golang</button>
                                <button className="btn">Golang</button>
                                <button className="btn">Golang</button>
                                <button className="btn">Golang</button>
                                <button className="btn">Golang</button>
                            </div>
                    </div>
                </div>
           
        
        </>
    )
}

export default topmainsection;

