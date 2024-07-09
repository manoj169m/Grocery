const express =require('express')
const router=express.Router()
const bodyparser =require('body-parser')
router.use(bodyparser.json())
const ProductModel =require('../models/ProductModel')



router.get('/',(req,res)=>{
    res.send('Product page')
})

router.post('/post',(req,res)=>{
    const newProduct =new ProductModel(req.body)
    newProduct.save()
    .then(response=>(console.log(response)))
    .catch(err=>(console.log(err)))
    res.send('product post page')
})

router.get('/get',(req,res)=>{
    ProductModel.find()
    .then(response=>res.send(response))
    .catch(err=>(console.log(err)))
})

router.get('/get/:type',(req,res)=>{
    ProductModel.find({Ptype:req.params.type})
    .then(response=>res.send(response))
    .catch(err=>console.log(err))
})

router.delete('/delete/:id',(req,res)=>{
    const productID=req.params.id;
    ProductModel.deleteOne({_id:productID})
    .then(response=>res.send(response))
    .catch(err=>console.log(err))
    res.send('delete page')
})

router.put('/update/:id',(req,res)=>{
    const productID= req.params.id;
    const updatedData =req.body;
    ProductModel.findByIdAndUpdate(productID,updatedData,{new:true})
    .then(response=>res.send(response))
    .catch(err=>console.log(err))
    // res.send('update p page')

})




module.exports=router