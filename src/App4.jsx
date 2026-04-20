//  combination mini project of the useState and useEffect/

import { useEffect, useState } from "react"
export default function App4() {
    const [state, setState] = useState(true);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);
    const [style, setStyle] = useState({
        backgroundColor: "black",
        color: 'white',
        border: '4px solid green',
        padding: '2px'
    })
    const [line, setLine] = useState({
        backgroundColor: 'red',
        height: "2px"
    })
    const handler = () => {
        setState(!state);
        state ? setStyle({
            backgroundColor: "black",
            color: 'white',
            border: '4px solid green',
            padding: '2px'
        }) : setStyle({
            backgroundColor: "green",
            color: 'black',
            border: '4px solid red',
            padding: '6px'
        })
    }
    return (
        <div>
            {
                loading ? <h1>Welcome to the Cloud Show this is just a demo</h1> : 
                <div>
                    <section style={style}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In id tempora, itaque ad pariatur laboriosam ex vel reprehenderit, praesentium ipsa sapiente voluptatem quas perspiciatis hic dolorum voluptate numquam excepturi omnis?</p>
                        <hr style={line} />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In id tempora, itaque ad pariatur laboriosam ex vel reprehenderit, praesentium ipsa sapiente voluptatem quas perspiciatis hic dolorum voluptate numquam excepturi omnis?</p>
                        <hr style={line} />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In id tempora, itaque ad pariatur laboriosam ex vel reprehenderit, praesentium ipsa sapiente voluptatem quas perspiciatis hic dolorum voluptate numquam excepturi omnis?</p>
                        <hr style={line} />
                    </section>
                    <div>
                        <button style={{ backgroundColor: "pink", padding: "8px", borderRadius: "6px", margin: "6px", outline: "none", border: "1px solid black", cursor: "pointer",userSelect:"none" }} onClick={handler} >Click To change Interface</button>
                    </div>
                </div>
            }
        </div>
    )
}
