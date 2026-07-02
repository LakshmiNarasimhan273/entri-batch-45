import React from 'react'

function Child(props) {
    const dataShare = () => {
        props.sendData("Soemthing")
    }
    console.log(props.sendData);
  return (
    <div>
      <button onClick={dataShare}>Send data to Parent</button>
    </div>
  )
}

export default Child