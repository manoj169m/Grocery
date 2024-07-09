import React, { useState } from 'react'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
// import Login from '../Login/Login'
import { logout } from '../redux/auth'
import { useDispatch, useSelector } from 'react-redux'
import { clearcart } from '../redux/cart'
import assest from '../../assets/assest'


const Navbar = () => {

  const [sidebar,setSidebar]=useState()
  const user =useSelector((state)=>state.auth.user)
  const admin =useSelector((state)=>state.auth.admin)
  const dispatch =useDispatch()


  const handlesidebar =()=>{
    setSidebar(!sidebar)
  }

  const handleLogout =()=>{
    dispatch(logout())
    dispatch(clearcart())
    navigate('/')
    handlesidebar()

  }
  const navigate=useNavigate()
  


  
  return (
    <div>
        <nav className='nav-main'>
        <Link to='/' ><img src={assest.logo} alt="" /></Link>
        <ul>
          
          <Link to='/'> <li className='hideitems'  >Home</li></Link>
          <Link to='/guide'>  <li className='hideitems '>About</li></Link>
          <Link to='/Productuse'><li className='hideitems'>Products</li></Link>
        {admin &&  <Link to='/adminuse'> <li className='hideitems'>Admin use</li> </Link>}
        </ul>
        <ul>
         <Link to='/cart'> <li className='hideitems'>cart</li></Link>
          {!user&&!admin &&
          <>
       <Link to='/login'><li className='hideitems'>login</li></Link>
       <Link to='/signin'> <li className='hideitems'>signup</li></Link></>} 
       {(user||admin)&&
       <li className='logout hideitems' onClick={handleLogout}>Logout</li>}
        <li onClick={()=>navigate('/cart')} className='showitem'><img className='menu' src={assest.cart} alt="" /></li>

        <li onClick={handlesidebar} className='showitem'><img className='menu' src={assest.menuopen} alt="" /></li>
        </ul>
        </nav>

        {/* sidebar */}

        <nav className='sidebar ' style={{display:sidebar ? 'block' : 'none'}}>
            {/* <h1 onClick={handlesidebar}>a</h1> */}
            <li onClick={handlesidebar} ><img src={assest.menuclose} className='menu' alt="" /></li>

        <ul>
           <Link to='/'> <li onClick={handlesidebar} >home</li></Link>
          <Link to="/guide" onClick={handlesidebar}>  <li>About</li> </Link>
          <Link to='/Productuse' onClick={handlesidebar}><li>Products</li></Link>
         
        </ul>
        <ul>
      
        {/* <Link to='/cart' onClick={handlesidebar}> <li>cart</li></Link> */}
        <Link to='/login' onClick={handlesidebar}> <li>login</li></Link>
       <Link to='/signin' onClick={handlesidebar}> <li>signup</li></Link>
       {(user||admin)&&
       <li className='logout' onClick={handleLogout}>Logout</li>}
        </ul>
        </nav>
      
    </div>
  )
}

export default Navbar
