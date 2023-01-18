import {useState} from "react";

export function CounterDisplay(props){
    return(
        <>
        <h2>{props.count}</h2>
        </>
    )
}


export default  function MainCounter(){

     let [number, setNumber] = useState(0);
  

    
   
     function increamentFunction(){
           setNumber(number+1)
     }

     function decreaseFunction(){
        setNumber(number-1)
     }

     function resetFunction(){
        setNumber(0)
     }

    return(
        <>
         <button onClick={increamentFunction}>Increase</button>
         <button onClick={decreaseFunction}>Decrease</button>
         <button onClick={resetFunction}>Reset</button>
         <CounterDisplay count={number}></CounterDisplay>
        </>
    )
}