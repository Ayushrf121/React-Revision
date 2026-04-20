// Hooks and States in a React.
import { useState } from "react";
export default function App2() {
    const [value, setValue] = useState(0);
    const handler = () => {
        setValue((value) => value + 1);
    }
    return (
        <div>
            <h2>The onClick Replacement using the useState Hook.</h2>
            <hr />
            <h4>{value}</h4>
            <hr />
            <button onClick={handler}>Click Me</button>
        </div>
    )
}
