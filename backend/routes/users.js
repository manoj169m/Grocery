const express =require('express')
const bodyparser =require('body-parser')
const router =express.Router()
const userModel =require('../models/UserModel')
const { response } = require('express')

router.use(bodyparser.json())

router.get('/',(req,res)=>{
    res.send('user page');
})

router.post('/post',(req,res)=>{

    const newUser= new userModel(req.body)
    newUser.save()
    .then(response=>(console.log(response)))
    .catch(err=>(console.log(err)))
    res.send('post page')
})

router.get('/get',(req,res)=>{
    userModel.find()
    .then(response=>(res.send(response)))
    .catch(err=>(console.log(err)))
})

router.get('/get/:email',(req,res)=>{
    console.log(req.params.email)
    userModel.find({email:req.params.email})
    .then(response=>res.send(response))
    .catch(err=>console.log(err))
 
})


module.exports=router