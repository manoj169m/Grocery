const express =require('express')
const app =express()
const mongoose =require('mongoose')
const cors=require('cors')
const user =require('./routes/users')
const Products =require('./routes/Products')

app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/grocery')

mongoose.connection.on('connected',()=>{
        console.log('connected to mongDB');
})

app.get('/',(req,res)=>{
    res.send('home');
})
app.use('/products',Products)
app.use('/user',user)

app.listen(3001,()=>{
    console.log('server connected to port 3001');
})