import React from 'react'
import { useNavigate } from 'react-router-dom'
import assest from '../../assets/assest'
import './Products.css'

const Product = () => {
    const products =[
        {image:assest.liquid ,title1:'Liquid' ,title2:'Soap'},
        {image:assest.dhal,title1:"Dhal" ,title2:'items' },
        {image:assest.milk, title1:'milk ',title2:'Biscuie'},
        {image:assest.agarbatti,title1:'agarbatti ',title2:'oils'}
    ]
    const navigate =useNavigate()
    const handlenav =()=>{
        navigate('/Productuse')
    }
  return (
    <div className='Products-whole'>
        <h1>" <span>our products </span>" </h1>
        <div className='Products-main'>
        {products.map((x)=>(
            <div className='product-box'>
    
            <div className='product-image'>
                <img src={x.image}  alt="" />

            </div>
            <div className='product-text'>
                <h1>{x.title1} <br /> & <br />{x.title2}</h1>

            </div>
            <div className='product-arrow'>
                <img onClick={handlenav} src={assest.right} alt="" />
            </div>
            </div>
            ))}
             
        </div>
      
    </div>
  )
}

export default Product
