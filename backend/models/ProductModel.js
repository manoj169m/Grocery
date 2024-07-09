const mongoose =require('mongoose')

const productSchame =new mongoose.Schema({
    image:String,
    name:String,
    Ptype:String, 
    quantity:String,
    rate:Number

})

const ProductModel = mongoose.model('products',productSchame)

module.exports=ProductModel