// import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import Example1 from './Example1';
import Component from './Component';
function App() {
  const [state, setState] = useState(0);

  return (
    <>
    {/* <div style={{justifyContent:"center",border:"0px solid black", width:"50%",float:"left"}}>
   <button  onClick={()=>{setState(state+1)}}><h1>  Add + </h1> </button>
   <div><h1>{state}</h1></div>
   <h1>  <button onClick={()=>{setState(state-1)}}> <h1>sub -</h1> </button></h1>
    
    </div> */}
    <Example1/>
    <Example1/>
    {/* <Component></Component>/ */}
    <Component></Component>

    </>
  );
}

export default App;
