import React, {useState , useEffect} from "react";
import Topsection from "./top-main-section";
import Tabledata from "./tabledata";
import Bottomsection from './bottom-section';
import { connect } from "react-redux";
import {tags} from "./tags"
import axios from "axios";

 function Home({activetag}){
    const [jobData, setJobData] = useState([]);

    useEffect(() => {
      axios.get("https://api.kuratedao.xyz/set/12").then((res)=>{
        console.log("res:",res)
        let newdata=[];
        console.log("res:",res.data)
        res.data.map((one)=>{
            console.log("res:", JSON.parse(one[0]))
            let newObj={...JSON.parse(one[0])}
            let tags0bj=[tags[Math.floor(Math.random() * 20)], 
            tags[Math.floor(Math.random() * 20)],
            tags[Math.floor(Math.random() * 20)],
            tags[Math.floor(Math.random() * 20)]];
            newObj["tags"]=[...tags0bj]
            newdata.push(newObj);
        })
        setJobData([...newdata]);    
      })
    
    
      },[]);
      useEffect(()=>{
        console.log("activetag",activetag);
        let newjobs=[...jobData];

      },[activetag])

    return(
        <>
        <div className="container">
        <Topsection jobData={jobData} />
        <Tabledata jobData={jobData}/>
        <Bottomsection jobData={jobData}/>
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
)(Home);


