const port=3000;
const express=require("express");
const app=express();
const mongoose=require("mongoose");
const jwt=require("jsonwebtoken");
const multer=require("multer");
const path=require("path");
const cors=require("cors");
const { type } = require("os");

app.use(express.json());
app.use(cors());



function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
//Dtabase Connection with MongoDB 
mongoose.connect("mongodb+srv://dbms5743:mnbvclkj@cluster0.0nc8j.mongodb.net/sos")
mongoose.connection.on('error', err => {
    console.error('MongoDB connection error:', err);
});
//API Creation
app.get("/",(req,res)=>{
    res.send("Express App is running")
})

//Image storage engine
const storage=multer.diskStorage({
    destination: './upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})
const upload=multer({storage:storage})
//creating upload endpoit for images
app.use('/images',express.static('upload/images'))
app.post("/upload",upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
})

//schema for creating product

const Product=mongoose.model("Product",{
    id:{
        type: Number,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    new_price:{
        type:Number,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    discount:{
        type:String,
        
    },
    inCart:{
        type:Boolean,
        default:false,
    },
    info:{
        type:String,
        required:true,
    },
    rating:{
        type:Number,
    },
    unit:{
        type:String,
    },
})

app.post('/addproduct',async (req,res)=>{
    let products=await Product.find({});
    let id;
    if(products.length>0)
    {
        let last_product_array=products.slice(-1);
        let last_product=last_product_array[0];
        id=last_product.id+1;
    }
    else{
        id:1;
    }
    const product=new Product({
       
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        price:req.body.price,
        discount:req.body.discount,
        rating:req.body.rating,
        info:req.body.info,
        unit:req.body.unit,
    });
    console.log(product);
    await product.save();
    console.log("Saved");
    res.json({
        success:true,
        name:req.body.name,
    })
})


//Creating API for deleting products
app.post('/removeproduct',async(req,res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("removed");
    res.json({
        success:true,
        name:req.body.name,
    })
})

//Creating api for getting all products
app.get('/allproducts',async(req,res)=>{
    let products=await Product.find({});
    console.log("All products fetched");
    res.send(products);
})


//Schema Creating For user Model

const Users=mongoose.model('Users',{
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String
    },
    cartData:{
        type:Object
    },
    date:{
        type:Date,
        default:Date.now,
    }
})

//Creating endpoint for registering the user

app.post('/signup',async(req,res)=>{
    let check=await Users.findOne({email:req.body.email});
    if(check){
        return res.status(400).json({success:false,errors:"Existing user found with same email address"})
    }
    let cart={};
    for(let i=0;i<300;i++)
    {
        cart[i]=0;
    }
    const user=new Users({
        name:req.body.username,
        email:req.body.email,
        password:req.body.password,
        cartData:cart,
    })
    await user.save();

    const data={
        user:{
            id:user.id
        }
    }

    const token=jwt.sign(data,'sevret_ecom');
    res.json({success:true,token})
})

//Creating endpoint for user login
app.post('/login',async(req,res)=>{
    let user=await Users.findOne({email:req.body.email});
    if(user)
    {
        const passCompare=req.body.password===user.password;
        if(passCompare){
            const data={
                user:{
                    id:user.id
                }
            }
            const token=jwt.sign(data,'secret_ecom');
            res.json({success:true,token});
        }
        else{
            res.json({success:false,errors:"Wrong Password"});
        }
    }
    else{
        res.json({success:false,errors:"Wrong Email ID"});
    }
})


//Creating middleware to fetch user
const fetchUser=async(req,res,next)=>{
    const token=req.header('auth-token');
    
    if(!token){
        res.status(401).send({errors:"Please authenticate using valid token"})
        console.log('failed');
    }
    else
    {
        try{
            const data=jwt.verify(token,'secret_ecom');
            req.user=data.user;
            console.log(req.user);
            next();
        }catch(error){
            res.status(401).send({errors:"Please authenticate using a valid token"});
            console.log('failed2');
        }
    }
}

//Creating endpoint for add productsto cart

app.post('/addtocart',fetchUser,async(req,res)=>{
    let userData= await Users.findOne({_id:req.user.id});
    console.log("Added",req.body.itemId);
    userData.cartData[req.body.itemId]+=[req.body.count];
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
    
    res.send({func:"Added"});
    console.log(userData.cartData);
})


//Creating Endpoint to remove product from cartData

app.post('/removefromcart',fetchUser,async(req,res)=>{
    let userData= await Users.findOne({_id:req.user.id});
    console.log("Removed",req.body.itemId);
    if(userData.cartData[req.body.itemId]>0)
        userData.cartData[req.body.itemId]-=1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
    res.send({func:"Removed"})
})

//Creating Endpoint to checkout product from cartData

app.post('/checkout',fetchUser,async(req,res)=>{
    let userData= await Users.findOne({_id:req.user.id});
    console.log("Reset",req.user.id);
    for(item in userData.cartData){
        console.log(item);
    if(userData.cartData[item]>0)
        userData.cartData[item]=0;
    }     
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
    res.send({func:"Reset"})
    
})

//Creating end point to get cartData

app.post('/getcart',fetchUser,async(req,res)=>{
    console.log("GetCart");
    let userData=await Users.findOne({_id:req.user.id});
    res.json(userData.cartData);
})
//-----------------------------------------------------------
//Schema Creating For Transaction Model

const Transactions=mongoose.model('Transactions',{
    id:{
        type:Number,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now,
    }
})

app.post('/addtransaction',fetchUser,async (req,res)=>{
    let transactions=await Transactions.find({});
    let id;
    if(transactions.length>0)
    {
        let last_transaction_array=transactions.slice(-1);
        let last_transaction=last_transaction_array[0];
        id=last_transaction.id+1;
    }
    else{
        id:1;
    }
    let userData=await Users.findOne({_id:req.user.id});
    const transaction=new Transactions({
       
        id:id,
        username:userData.name,
    });
    console.log(transaction);
    await transaction.save();
    console.log("Saved");
    res.json({
        success:true,
        name:req.body.name,
    })
})
//-------------------------------------------------------------



app.listen(port,(error)=>{
    if(!error)
    {
        console.log("Server running on port"+port)
    }
    else{
        console.log("Error:"+error)
    }
})