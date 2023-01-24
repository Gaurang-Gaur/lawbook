import React from 'react'
import HeroSection from './components/HeroSection'
import Accused from "./Accused";

const Restatement = () => {
  const lawarray = Accused.keys;
  const [laws, setLaws] = React.useState("");  
  const [keyword, setKeyword] = React.useState('');
  const [ipc, setIpc] = React.useState("");
  const data={
    name:"Restatement Section",
    image:"./images/restatement.jpg",
    desc:" This is description of restatement section",
    top:"this is top of restatement section",
    
  };
  return (
    <>
        <div><HeroSection {...data} /></div>
        <h2>Restate here</h2>
      <div><button className="sc-bcXHqe fwLrQG"
          id='restate-button' >
        restate 
      </button></div>
      
    </>
    // three dot means spread operator
    // data is object and we pass all data at the time here
    
  
    );
}

export default Restatement