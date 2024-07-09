import axios from 'axios'
import React, { useState } from 'react'
// import assest from '../../assets/assest'
import { addcart,removecart } from '../redux/cart'
import images from '../../assets/products/images'
import './Productuse.css'
import { useDispatch } from 'react-redux'

const Productuse = () => {
    const [datas,setDatas]=useState([])
    const[add,setAdd]=useState({})
    const[offline,setoffline]=useState(true)
    const dispatch =useDispatch()
    const offdatas=[
        {name:'avin',image:images.milk ,rate: 10, quantity:'250 ml',id:1},
        {name:'arorkya',image:images.milk2 ,rate: 15, quantity:'200 ml',id:2},
        {name:'yanai',image:images.dhal ,rate: 80, quantity:'500 ml',id:3},
        {name:'thangam',image:images.dhal2 ,rate: 85, quantity:'500 ml',id:4},
        {name:'cycle',image:images.agar ,rate: 10, quantity:'15',id:5},
        {name:'Ganesh',image:images.agar2 ,rate: 15, quantity:'20',id:6},
        {name:'lux',image:images.soap ,rate: 32, quantity:'1',id:7},
        {name:'detoil',image:images.soap1 ,rate: 30, quantity:'1',id:8},
        
    ]

    const handleAll=()=>{
        axios.get(`http://localhost:3001/products/get`)
        .then(res=>{console.log(res.data)
        setDatas(res.data)})
        .catch(err=>console.log(err))
        console.log('clicked');
        setoffline(false)
    }

    const handleadd=(data)=>{
        if(!add[data.id]){
        dispatch(addcart(data))
        console.log(data)
        setAdd(prev=>({...prev,[data.id]:true}))
        }
    }

    const handleaddon=(data)=>{
        dispatch(addcart(data))
        console.log(data)
        setAdd(true)

    }

  return (
    <div className='Product-use'>
        <nav className='navbar'> 
            {/* <ul>
            
            <li>Liquids</li>
            <li>Dhal</li>
            <li onClick={handleAll}><h1>ALL</h1>
            </li>
            <li>Milk</li>
            <li>Agarbatti</li>
            </ul> */}
        </nav>
        {offline ? 
        <div className='product-item'>

            {offdatas.map((data,index)=>(
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
                    <button className='down' 
                    style={{backgroundColor:add[data.id] ? 'white' :'orange' , color:add[data.id]? 'orange' :'white',
                     border:add[data.id] ?'2px solid orange' : 'none'}}
                    onClick={()=>handleadd(data)} 
                    disabled={add[data.id]}>{add[data.id] ? 'add to cart' :'added'}</button>
                </div>

                </div>

            </div>
               ))}
        </div>
:

        <div className='product-item'>

{datas.map((data,index)=>(
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
        <button className='down' onClick={()=>handleaddon(data)} >add to cart</button>
    </div>

    </div>

</div>
   ))}
</div>
}
     
      
    </div>
  )
}

export default Productuse
