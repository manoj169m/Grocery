import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../signin/Signin.css'
import { Link } from 'react-router-dom'
import { removecart } from '../redux/cart'
const Cart = () => {
    const carts=useSelector((state)=>state.cart.cart)
    const dispatch=useDispatch()

    const handlremove=(id)=>{
        dispatch(removecart(id))
        console.log('clicked');
    }
  return (
    <div className='product-item'>
        {/* <h1>hello</h1> */}
        {carts && carts.length>0
        ?
        <>
        {carts.map((data,index)=>(
        <div className='Productuse-items' key={index}>
            
                <div className='productuse-image'>
                    <img src={data.image} alt="" />
                </div>
                <div className='product-Details'>
                    <div className='product-name'>
                <h3>{data.name}</h3>
                <h3 className='down'> Price:{data.rate}</h3>
                </div>
                <div className='product-button'>
                    <h3 >Qualtity:{data.quantity}</h3>
                    <button className='down' onClick={()=>handlremove(data.id)}>remove</button>
                </div>

                </div>

            </div>
               ))}
               </>
               :
               <h1>no items found <Link to='/productuse'>purchase products</Link></h1>}
      
    </div>
  )
}

export default Cart
