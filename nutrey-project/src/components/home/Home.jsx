import React from 'react'
import assest from '../../assets/assest'
import About from '../about/About'
import Foot from '../footer/Foot'
import Navbar from '../navbar/Navbar'
import Product from '../Products/Product'
import './home.css'
import { useSelector } from 'react-redux'

const Home = () => {
  const user =useSelector((state)=>state.auth.user)
  return (
    <>
    <div className='home-main'id='home' >
      <div className='home-head'>
      <h1>"Your Trusted Local Grocery {user} Store for Fresh and <span>Quality Produce</span> , Serving Our Community for  <span>Over 20 Years</span> "</h1>
      </div>
       

      
    </div>
    <Product/>
    <About/>
    <Foot/>
    </>
  )
}

export default Home
