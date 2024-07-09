import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Signin.css'

const Signin = () => {
  const[name,setName]=useState('')
  const[email,setEmail]=useState('')
  const[Password,setPassword]=useState('')
  // const[formdata,setFormData]=useState({})
  const navigate=useNavigate()
  

  const handleSigin =(e)=>{
    e.preventDefault()
    const FormData= {
      username:name,
      email:email,
      password:Password
    }
    axios.post('http://localhost:3001/user/post',FormData)
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
    
    setEmail('')
    setName('')
    setPassword('')
    console.log(FormData);
    navigate('/login')
  }


  return (
    <div className='signup-main'>
      <h1>"<span>Sign up </span> "</h1>
      <form onSubmit={handleSigin}>
        <label htmlFor="">Name:
        <input type="text" 
        value={name}
        onChange={(e)=>setName(e.target.value)}
        name="" 
        required
        id="name" 
        /></label>
        <br />
        <label htmlFor="">E-mail:</label>
        <input 
         value={email}
         required
         onChange={(e)=>setEmail(e.target.value)}
        type="email"
         name="" 
         id="email" />
        <br />
        <label htmlFor="">Password:</label>
        <input 
         value={Password}
         required
         onChange={(e)=>setPassword(e.target.value)}
        type="password" 
        name="" 
        id="password" />
        <button type='submit'>signin</button>

      </form>
      <p>if you have already signed in,please <Link to='/login'>click here to log in.</Link></p>
      
    </div>
  )
}

export default Signin
