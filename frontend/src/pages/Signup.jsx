import React from 'react'
import { useState } from 'react'

const Signup = () => {
    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')


    const handleSubmit=async (e)=>{
        e.preventDefault()

        console.log(username,email,password);
        console.log("signup successfull");
        
    }

  return (
    <form className='signup' onSubmit={handleSubmit}>
        <h3>Sign up</h3>

        <label>Username</label>
        <input type="text" onChange={(e)=>{
            setUsername(e.target.value)
        }} value={username}/>

        <label>Email</label>
        <input type="email" onChange={(e)=>{
            setEmail(e.target.value)
        }} value={email}/>

        <label>Password</label>
        <input type="password" onChange={(e)=>{
            setPassword(e.target.value)
        }} value={password}/>

        <button>Sign up</button>
    </form>
  )
}

export default Signup
