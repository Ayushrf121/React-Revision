import React, { useState } from 'react'

export default function App7() {
    const [value,setValue] = useState('Signup');
  return (
    <div>
        <nav style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <h4 style={{fontFamily:"cursive",fontSize:"42px"}}>Logo</h4>
            <ul style={{display:'flex',gap:'32px',listStyleType:"none",fontSize:"20px"}}>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <button>{value}</button>
        </nav>
        <main style={{display:'grid',gridTemplateColumns:"0.5fr 2fr"}}>
            <section style={{display:"flex",flexDirection:"column",width:"22vw",textAlign:"center",margin:"4px",height:"54vh"}}>
                <div style={{display:'flex',flexDirection:"column",margin:"4px",borderRadius:"6px",fontFamily:"cursive",padding:"3px",backgroundColor:"pink",boxShadow:"2px 2px 4px pink"}}>
                    <h2>What's in the podcast</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sint ipsam consequatur necessitatibus at vitae fugit consectetur magnam modi repellat!</p>
                </div>
                <div style={{display:'flex',flexDirection:"column",margin:"4px",borderRadius:"6px",fontFamily:"cursive",padding:"3px",backgroundColor:"pink",boxShadow:"2px 2px 4px pink"}}>
                    <h2>How long the podcast is?</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, harum?</p>
                </div>
            </section>
            <section style={{display:"flex",flexDirection:"column",gap:"4px",padding:"4px",backgroundColor:"lightBlue",borderRadius:"4px",margin:"4px",boxShadow:"4px -2px 8px lightBlue"}}>
                <h1>The Discoverable Section</h1>
                <div style={{display:"flex",flexDirection:"column",fontFamily:"cursive",color:"grey",boxShadow:"2px 2px 2px red",padding:"4px"}}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea saepe accusantium voluptatibus repudiandae ut placeat labore, alias facere, obcaecati aspernatur quisquam fugit sit tempore, hic porro. Sequi libero magni iste?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea saepe accusantium voluptatibus repudiandae ut placeat labore, alias facere, obcaecati aspernatur quisquam fugit sit tempore, hic porro. Sequi libero magni iste?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea saepe accusantium voluptatibus repudiandae ut placeat labore, alias facere, obcaecati aspernatur quisquam fugit sit tempore, hic porro. Sequi libero magni iste?</p>
                </div>
                <hr style={{backgroundColor:"black",height:'2px',width:"95%"}} />
                <div style={{display:"flex",flexDirection:"column",fontFamily:"cursive",color:"grey",boxShadow:"2px 2px 2px red",padding:"4px"}}><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt placeat nulla voluptatem, ex nostrum doloribus molestiae exercitationem distinctio odit corrupti provident expedita officiis quia delectus excepturi? Aperiam cupiditate consequatur aliquam!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt placeat nulla voluptatem, ex nostrum doloribus molestiae exercitationem distinctio odit corrupti provident expedita officiis quia delectus excepturi? Aperiam cupiditate consequatur aliquam!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt placeat nulla voluptatem, ex nostrum doloribus molestiae exercitationem distinctio odit corrupti provident expedita officiis quia delectus excepturi? Aperiam cupiditate consequatur aliquam!</p></div>
            </section>
        </main>
        <footer style={{textAlign:"center"}}>
            <p>Copyright &copy; 2025 pvt | lmt</p>
        </footer>
    </div>
  )
}
