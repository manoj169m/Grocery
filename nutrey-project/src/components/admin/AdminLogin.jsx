import React from 'react'
import '../signin/Signin.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
// import { adminlogin } from '../redux/Store'
import { adminlogin } from '../redux/auth'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const AdminLogin = () => {
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')

    const dispatch =useDispatch()
    const navigate =useNavigate()

    const handleLogin=(e)=>{
        e.preventDefault()
        axios.get(`http://localhost:3001/user/get/${email}`)
        .then(res=>{console.log(res.data)
            if(res.data[0]?.email){
                if(res.data[0]?.password == password){
                    alert('admin logged in successfully')
                    dispatch(adminlogin(res.data[0]?.username))
                    navigate('/admin')
                    
                }else{
                    alert('wrong password')

                }
            }else{
                alert('email not found')
            }
        
        })


    }
    

  return (
    <div className='signup-main'>
     <h1>"<span>Admin Login</span>"</h1>
     <form onSubmit={handleLogin}>
     <label htmlFor="">E-mail:</label>
        <input 
        onChange={(e)=>setEmail(e.target.value)}
        value={email}
        type="text" 
        name="" 
        required
        id="" />

<br />
        <label htmlFor="">Password:</label>
        <input 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        type="password" 
        name="" 
        required
        id="" />

<button type='submit'>Login</button>
 
     </form>
          
   
        <button onClick={()=>navigate('/login')}>user </button >

      

      
    </div>
  )
}

export default AdminLogin
