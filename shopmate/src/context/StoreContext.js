import React,{ createContext, useEffect, useState } from "react";


export const StoreContext=createContext(null)
const getDefaultCart=()=>{
    let cart={};
    for (let index=0;index<300+1;index++)
    {
        cart[index]=0;
    }
    return cart;
}

const StoreContextProvider= (props)=>{
    const [all_product,setAll_Products]=useState([]);

    var total=0;
    const [cartItems,setCartItems]=useState(() => {
        const savedCart = localStorage.getItem("cartItems");
        return savedCart ? JSON.parse(savedCart) : getDefaultCart();
    });
    useEffect(()=>{
        fetch('http://localhost:3000/allproducts')
        .then((response)=>response.json())
        .then((data)=>setAll_Products(data));

        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:3000/getcart',{
                method:'Post',
                headers:{
                Acccept:'application/form-data',
                'auth-token':`${localStorage.getItem('auth-token')}`,
                'Content-Type':'application/json',
                },
                body:"",
            }).then((response)=>response.json())
            .then((data)=>setCartItems(data));

        }
    },[]);
    

    const addToCart=(itemId,count)=>{
        
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+count}));
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:3000/addtocart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({"itemId":itemId,"count":count})
            })
            .then((response)=>response.json())
            .then((data)=>console.log(data));
        }
    }

       const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:3000/removefromcart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({"itemId":itemId,})
            })
            .then((response)=>response.json())
            .then((data)=>console.log(data));
        }
       }
       const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                if (itemInfo) {
                    totalAmount += (itemInfo.new_price * cartItems[item]);
                } else {
                    console.warn(`Product with id ${item} not found in all_product.`);
                }
            }
        }
        total=totalAmount;
        return totalAmount;
    };
    
       
       const getTotalCartItems=()=>{
        let totalItem=0;
       
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                totalItem+=Number(cartItems[item]);
                
            }
        }
        return totalItem;
       }

       const checkout=()=>{
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                cartItems[item]=0;
                
            }
        }
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:3000/checkout',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:"",
            })
            .then((response)=>response.json())
            .then((data)=>console.log(data));

            //-----------------------------------------
            fetch('http://localhost:3000/addtransaction',{
                method:'POST',
                headers:{
                    Accept:'application/json',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json'
                },
                body:"",
            }).then((resp)=>resp.json()).then((data)=>{
                data.success?alert("Transaction Added"):alert("Failed")
            })
            //---------------------------------
        }
        
       }

       

    
   const contextValue={total,checkout,getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart,getTotalCartItems};
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;