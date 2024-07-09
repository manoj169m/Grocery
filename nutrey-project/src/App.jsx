import { useState } from 'react'

import './App.css'
import Home from './components/home/Home'
// import Navbar from './components/navbar/Navbar'
import {  Routes, Route } from 'react-router-dom';
// import About from './components/about/About';
import Signin from './components/signin/Signin';
import Navbar from './components/navbar/Navbar';
import Login from './components/Login/Login';

import AdminLogin from './components/admin/AdminLogin';
import AdminUse from './components/AdminUse/AdminUse';
import Productuse from './components/ProductPage/Productuse';
import Cart from './components/cart/Cart';
import UserGuide from './components/userguide/UserGuide';
// import Product from './components/Products/Product';
function App() {

 

  return (
    <>
    <Navbar/>
   
    <Routes>
      <Route path='/' element={<Home/>}/>
      {/* <Route path='/products' element={<Product/>}/> */}
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/admin' element={<AdminLogin/>}/>
      <Route path='/adminuse' element={<AdminUse/>}/>
      <Route path='Productuse' element={<Productuse/>}/>
      <Route path='/cart' element={<Cart/>} />
      <Route path='/guide' element={<UserGuide/>}/>


    </Routes>
     
    </>
  )
}

export default App
