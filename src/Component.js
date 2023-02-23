import React,{useState, createContext, useContext} from 'react';
const UserContext = createContext(0);
function Component() {
   
    const [state, setState] = useState(0);
  return (
<>



      <UserContext.Provider value={state}>
      <div style={{justifyContent:"center",border:"0px solid black", width:"50%",float:"left"}}>
   <button  onClick={()=>{setState(state+1)}}><h1>  Add + </h1> </button>
 
  <Counter></Counter>
  <h1>  <button onClick={()=>{setState(state-1)}}> <h1>sub -</h1> </button></h1>
    
    </div>

    <div style={{justifyContent:"center",border:"0px solid black", width:"50%",float:"left"}}>
   <button  onClick={()=>{setState(state+1)}}><h1>  Add + </h1> </button>
 
  <Counter></Counter>
  <h1>  <button onClick={()=>{setState(state-1)}}> <h1>sub -</h1> </button></h1>
    
    </div>
</UserContext.Provider>
</>
  )
}

function Counter() {

    const user = useContext(UserContext);
   
  return (
    <>
      
  <div><h1>{user}</h1></div>
  
    
    </>
  );
}

export default Component