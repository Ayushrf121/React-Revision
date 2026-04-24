import React from 'react'

// export default function Data(props) {
export default function Data({name,age}) {
  return (
      <div>
      <div>
            <span>Name : {name}</span><br />
            <span>Age : {age}</span>
      </div>
      <hr />
    </div>
  )
}
