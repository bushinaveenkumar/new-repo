import React, { createContext, useEffect, useState } from "react";

export const  ShopContext= createContext(null);

const getDefaultCart=()=>{
    let cart={}

    for (let index=0; index<300+1 ; index++){
        cart[index]=0;
    }
    return cart;
}
    
const ShopContextProvider= (props)=>{

    const [cartItems, setCartItems]=useState(getDefaultCart());
    const [all_products, set_all_products]=useState([]);

    useEffect(()=>{
         fetch('https://naveen-e-commerce-site-backend.onrender.com/allproducts').then((res)=>res.json()).then((data)=>set_all_products(data)).catch((error)=>console.log("fetch error :",  error))
    },[])


    const addToCart=async (ItemId)=>{
        setCartItems((prev)=>({...prev, [ItemId]: prev[ItemId]+1}));
        console.log(ItemId)
        
        if (localStorage.getItem('auth-token')){
            try{
                await fetch("https://naveen-e-commerce-site-backend.onrender.com/addtocart", {
                    method:"POST",
                    headers:{
                        Accept:'application/form-data',                        
                        'auth-token': `${localStorage.getItem('auth-token')}`,
                        'Content-Type': 'application/json'                 
                    },
                    body:JSON.stringify({"ItemId":ItemId})
                }).then((res)=>res.json()).then((data)=>console.log(data))
            }catch(error){
                console.log(error)
            }
        }
        
    }

    const removeFromCart=(ItemId)=>{
        setCartItems((prev)=>({...prev, [ItemId]: prev[ItemId]-1}))
    }

    const getTotalCartAmount=()=>{
        let totalAmount=0;

        for (const item in cartItems){
            if (cartItems[item]>0)
            {
                let itemInfo=all_products.find((product=>product.id===Number(item)))
                totalAmount+=itemInfo.new_price*cartItems[item];
            }            
        }
        return totalAmount        
    }

    const getTotalCartItems=()=>{
        let totalCartItems=0;

        for (const Item in cartItems){
            if (cartItems[Item]>0){
                totalCartItems+=cartItems[Item]
            }
        }

        return totalCartItems
    }



    const contextValue={getTotalCartItems, getTotalCartAmount, all_products, cartItems, addToCart, removeFromCart }


    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
 
export default ShopContextProvider;