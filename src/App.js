import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import  Entertainment from "./Data/Wine.json";
import ScatterChart from './Components/Scatter';
import ScatterPlot from './Components/Scatter';
import BarChart from './Components/BarChart';
function App() {
  let [datas,setdata]=useState([]);
  useEffect(()=>{
    setdata(Entertainment.Entertainment);
    console.log(Entertainment)
  })
  console.log(datas);
  return (
    <div className="App" >
        <div style={{minWidth:"100px"}}>
         <BarChart data={datas} />  
          <ScatterChart data={datas}/>   
        </div>
      
    </div>
  );
}

export default App;
