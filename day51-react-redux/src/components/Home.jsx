import React from 'react'

import { useSelector } from "react-redux";

function Home() {
    // callback arrow function with parameter variable
    // useSelector -> parameter.sliceName.propertyName;

    const name = useSelector(data => data.user.username);
    const email = useSelector(data => data.user.email);

  return (
    <div>
        <h1>Home Component - Hi, Welcome back {name}, {email}</h1>
    </div>
  )
}

export default Home