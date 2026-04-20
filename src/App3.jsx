import { useEffect, useState } from "react"

// UseEffect hook.
export default function App3() {

    const [counter,setCounter] = useState(0);
    const [counter2,setCounter2] = useState(0);
    const handler = ()=>{
        setCounter((value)=>value+1);
    }
    const handler2 = ()=>{
        setCounter2((value)=>value+1);
    }
    // Complete Independent no dependencies and runs with every render... 
    useEffect(()=>{
        setTimeout(()=>{
        alert("Hello World!");
        // prompt("What is your name: ");
        // confirm("Are you sure?");
        });
    });
    // Empty dependency array only render once on component mounting and react first render.
    useEffect(()=>{
    console.log("Rendered!")
  },[])

    // Dependent on the specific value in the array.
    useEffect(()=>{
        console.log("I am dependent on the counter2");
    },[counter2]);
  return (
    <div>
        <span> Counter1: {counter}</span>
      <button onClick={handler}>Click Me</button>
      <hr />
      <span>Counter2: {counter2}</span>
      <button onClick={handler2}>Click Me</button>
      <hr />
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, aut!
    </div>
  )
}
