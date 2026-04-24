// List rendering and in how many types we can access the props in Components.
import React, { useState } from 'react'
import Data from './components/Data'
import Data2 from './components/Data2'

export default function App6() {
    const [details,setDetails] =useState([
        {
            name : "Ayush Rawat",
            Age : 19
        },
        {
            name : "Mohit Singh",
            Age : 20
        },
        {
            name : "Ravi Rawat",
            Age : 28
        },
        {
            name : "Mahesh Prasad",
            Age : 20
        }
    ])
    const user = {
        name : "Maheep Singh",
        age : 85
    }
  return (
    <div>
        <h1>User Contact details</h1>
      {
        details.map((items,idx)=>{
            return(
                <Data key={idx} name={items.name} age={items.Age}/>
            )
        })
      }
      <h2>Latent User Data</h2>
      <Data2 {...user}/>
    </div>
  )
}
