import React from 'react'
import { useSelector } from 'react-redux'

function Orders() {
    const name = useSelector(data => data.user.username);
  return (
    <div>
        <h1>Orders component - Your orders successfully deliverd {name}</h1>
    </div>
  )
}

export default Orders