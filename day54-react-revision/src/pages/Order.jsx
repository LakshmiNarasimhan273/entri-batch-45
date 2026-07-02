import React from 'react'
import Button from '../components/Button'

function Order() {
  return (
    <div>
        <h1>Order Page</h1>

        <h4>Applce Mac 4</h4>
        <p>$5000</p>
        <p>Online payment</p>
        <Button name="Pay now" />
    </div>
  )
}

export default Order