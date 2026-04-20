// useRef hook in React.
// useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.
import { useEffect, useRef, useState } from "react"

export default function App5() {
    const [counter,setCount] = useState(0);
    // so the variable always get rendered on click which make the variable as 1. 
    // let a=1;
    // useEffect(()=>{
    //     a = a+1;
    //     console.log("The value of a : ",a);
    // },[counter]);
    // therefore we use the useRef() hook that let you to have the current value on updation even on render without initializing the variable to 0 again.
    const a = useRef(0);
    const ref1 = useRef();
    const divRef = useRef();
    useEffect(()=>{
        setTimeout(()=>{
            ref1.current.style.backgroundColor = "red";
            divRef.current.style.backgroundColor = "black"
            divRef.current.style.color = "white";
        },1000);
        a.current = a.current+1;
        console.log(`The value of a : ${a.current}`);
    },[counter]);
  return (
    <div ref={divRef}>
        <h2>Counter</h2>
        <p><span>Counter: </span>{counter}</p>
        <button ref={ref1} onClick={()=>setCount(counter+1)}>Click Me</button>
    </div>
  )
}
