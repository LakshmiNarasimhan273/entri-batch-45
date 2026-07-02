import React from 'react'
import Button from '../components/Button'

function Login() {
  return (
    <div>
        <h1>Login</h1>

        <form>
            <input type="text" placeholder='email' />
            <input type="password" placeholder='password' />
            <Button name="Login" />
        </form>
    </div>
  )
}

export default Login