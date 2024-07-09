import React, { useEffect, useState } from 'react'
import assest from '../../assets/assest'
import './About.css'
// import { logout } from '../redux/Store'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const About = () => {

    const [years,setYears]=useState(0)
    // const dispatch=useDispatch()

    const navigate=useNavigate()
    const handlelogout=()=>{
        // dispatch(logout())   
        console.log('clicked')
        navigate('/signin')
    }

     useEffect(()=>{
        const interval= setInterval(()=>{
            setYears((precount)=>{
                if(precount <20){
                    return precount+1
                }
                else{
                    clearInterval(interval)
                    return precount
                }
            })

        })
  
     }

     ,10000)

    return (
    <div className='about-whole' id='about'>
      <div className='about-main'>
        <div className="about-image">
            <div className="about-years"> <div className='about-years-text'> <h1>{years} </h1><p>years of experiences </p> </div></div>
            <img src={assest.about1} alt="" />

        </div>
        <div className="about-text">
            <h2> "<span>About us </span>" </h2>
            <h3>Serving Our Community with Quality and Trust for Over 20 Years</h3>
            <p>For two decades, we have provided high-quality products and exceptional service to our loyal customers. Our commitment to excellence ensures every purchase meets the highest standards, making us a trusted part of your family. Thank you for your continued support.</p>
            <button onClick={handlelogout}>Get in touch</button>
        </div>
      </div>
    </div>
  )
}

export default About
