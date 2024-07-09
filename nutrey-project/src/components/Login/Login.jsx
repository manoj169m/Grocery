import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
// import { login } from '../redux/Store'
import { login } from '../redux/auth'
import { useNavigate } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import '../signin/Signin.css'


const Login = () => {
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const dispatch=useDispatch()
  const user =useSelector((state)=>state.auth.user)
  const navi =useNavigate()


  const handleLogin=(e)=>{
    e.preventDefault()
    axios.get(`http://localhost:3001/user/get/${email}`)
    .then(res=>{console.log(res.data[0]?.username)
      if(res.data[0]?.email){
        if(res.data[0]?.password === password){
          navi('/')
          alert('correct password')
          dispatch(login(res.data[0]?.username))
        } else{
          alert('incorrect password')
        }
      } else{
        alert('incorrec email')
      }
    })
    .catch(err=>console.log(err))
    

  }



  return (
    <div className='signup-main'>
      <h1>"<span>LOGIN {user}</span> "</h1>
      <form onSubmit={handleLogin}>
        {/* <label htmlFor="">Name:
        <input type="text" name="" id="" /></label> */}
        <br />
        <label htmlFor="">E-mail:</label>
        <input 
        onChange={(e)=>setEmail(e.target.value)}
        value={email}
        type="text" 
        required
        name="" 
        id="" />
        <br />
        <label htmlFor="">Password:</label>
        <input 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        type="password" 
        required
        name="" 
        id="" />
        <div className='form-button'>
        <button type='submit'>Login</button>
        {/* <button  onClick={navi('/admin')}>admin</button> */}
        </div>

      </form>
      <p>If you haven't signed in, <Link to='/signin'> click here to sign in</Link></p>
     <button onClick={()=>navi('/admin')}> admin</button >
      
    
    </div>
    
  )
}

export default Login
