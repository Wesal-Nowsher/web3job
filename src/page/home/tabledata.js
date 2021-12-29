import React, {useEffect, useState} from "react";
import axios from "axios";
import icons from '../../assets/icons.png';

 function Tabledata(){
    
    
    useEffect(() => {
      axios.get("https://api.kuratedao.xyz/set/12").then((res)=>{
        // console.log("res:",res)
        console.log("res:",JSON.parse(res && res.data))
        if(res && res.data){
            let parsedata=JSON.parse();
            console.log("wesa", parsedata);
        }

      })
      },[]);
    return(
        <>
            <div className="row">
                <div className="tabledata-padding">
                    <div className="row 4">
                        <div className="col-5 d-flex">
                            <div className="logo">
                                <img src={icons} />
                            </div>
                            <div className="d-flex flex-column desifg">
                                <h4>Front-End Developer</h4>
                                <p>Parcel</p>
                            </div>
                        </div>
                        <div className="col-5 d-flex ">
                            <div className="location">
                                <p>Remote, NYC</p>
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
                            <div className="apply-btn"><button className="btn">Apply</button></div>
                        </div>
                    </div>
                    <div className="row 4">
                        <div className="col-5 d-flex">
                            <div className="logo">
                                <img src={icons} />
                            </div>
                            <div className="d-flex flex-column desifg">
                                <h4>Front-End Developer</h4>
                                <p>Parcel</p>
                            </div>
                        </div>
                        <div className="col-5 d-flex ">
                            <div className="location">
                                <p>Remote, NYC</p>
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
                            <div className="apply-btn"><button className="btn">Apply</button></div>
                        </div>
                    </div>
                    <div className="row 4">
                        <div className="col-5 d-flex">
                            <div className="logo">
                                <img src={icons} />
                            </div>
                            <div className="d-flex flex-column desifg">
                                <h4>Front-End Developer</h4>
                                <p>Parcel</p>
                            </div>
                        </div>
                        <div className="col-5 d-flex ">
                            <div className="location">
                                <p>Remote, NYC</p>
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
                            <div className="apply-btn"><button className="btn">Apply</button></div>
                        </div>
                    </div>
                    <div className="row 4">
                        <div className="col-5 d-flex">
                            <div className="logo">
                                <img src={icons} />
                            </div>
                            <div className="d-flex flex-column desifg">
                                <h4>Front-End Developer</h4>
                                <p>Parcel</p>
                            </div>
                        </div>
                        <div className="col-5 d-flex ">
                            <div className="location">
                                <p>Remote, NYC</p>
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
                            <div className="apply-btn"><button className="btn">Apply</button></div>
                        </div>
                    </div>
                    <div className="row 4">
                        <div className="col-5 d-flex">
                            <div className="logo">
                                <img src={icons} />
                            </div>
                            <div className="d-flex flex-column desifg">
                                <h4>Front-End Developer</h4>
                                <p>Parcel</p>
                            </div>
                        </div>
                        <div className="col-5 d-flex ">
                            <div className="location">
                                <p>Remote, NYC</p>
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
                            <div className="apply-btn"><button className="btn">Apply</button></div>
                        </div>
                    </div>
                    <div className="row 4">
                        <div className="col-5 d-flex">
                            <div className="logo">
                                <img src={icons} />
                            </div>
                            <div className="d-flex flex-column desifg">
                                <h4>Front-End Developer</h4>
                                <p>Parcel</p>
                            </div>
                        </div>
                        <div className="col-5 d-flex ">
                            <div className="location">
                                <p>Remote, NYC</p>
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
                            <div className="apply-btn"><button className="btn">Apply</button></div>
                        </div>
                    </div>
                    <div className="row 4">
                        <div className="col-5 d-flex">
                            <div className="logo">
                                <img src={icons} />
                            </div>
                            <div className="d-flex flex-column desifg">
                                <h4>Front-End Developer</h4>
                                <p>Parcel</p>
                            </div>
                        </div>
                        <div className="col-5 d-flex ">
                            <div className="location">
                                <p>Remote, NYC</p>
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
                            <div className="apply-btn"><button className="btn">Apply</button></div>
                        </div>
                    </div>
                   
                </div>
              
            
            </div>
          
        
        </>
    )
}

export default Tabledata;

