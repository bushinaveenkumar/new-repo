import React, { useState } from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  const [state, setState]=useState("Log In")
  const [formData, setFormData]=useState({
    name:"",
    email:"",
    password:""
  })

  const changeHandler=(e)=>{
    setFormData({...formData, [e.target.name]:e.target.value})
  }

  const LogIn=async()=>{
    console.log("Log in function triggered", formData)

    let responseData;
    await fetch("https://naveen-e-commerce-site-backend.onrender.com/login", {
      method:"POST",
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
      },
      body:JSON.stringify(formData)
    }).then((res)=>res.json()).then((data)=>responseData=data)

    console.log(responseData)
    if (responseData.success){
      console.log(JSON.stringify(responseData.token))
      
      localStorage.setItem('auth-token', JSON.stringify(responseData.token));     
      window.location.replace("/")      
    }
    else{
      alert(responseData.error)
    }
  }

  const SignUp=async()=>{
    console.log("Sign up function triggered", formData)

    let responseData;
    await fetch("https://naveen-e-commerce-site-backend.onrender.com/signup", {
      method:"POST",
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
      },
      body:JSON.stringify(formData)
    }).then((res)=>res.json()).then((data)=>responseData=data)

    console.log(responseData)
    if (responseData.success){
      localStorage.setItem('auth-token', JSON.stringify(responseData.token))
      window.location.replace("/")
    }
    else{
      alert(responseData.error)
    }
  }

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        {state==="Sign Up"?<h1>Sign Up</h1>:<h1>Log In</h1>}      
        <div className="loginsignup-fields">
          {state==="Sign Up"?<input name="name" value={formData.name} onChange={changeHandler} type="text" placeholder="Your Name"/>:<></>}          
          <input name="email" value={formData.email} onChange={changeHandler} type="email" placeholder="Your Email"/>
          <input name="password" value={formData.password} onChange={changeHandler} type="password" placeholder="Password"/>
        </div>
        <button onClick={()=>state==="Log In"?LogIn():SignUp()}>Continue</button>
        {state==="Sign Up"?<p>Already have an account? <span onClick={()=>setState("Log In")}>Log In</span></p>
        :<p>Create account ? <span onClick={()=>setState("Sign Up")}>Sign Up</span></p>}
         
        <div className="loginsignup-agree">
          <input type="check-box" name='' id=''/>
          <p>By continuing i agree to the terms of use and privacy policy</p>
        </div>               
      </div>
    </div>
  )
}

export default LoginSignup