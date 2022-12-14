import React from "react";
import { useState,useEffect } from "react";


const Login=(props)=>{
    const [email,setEmail]=useState('');
    const [password, setPassword]=useState('');

function saveUser(){
    console.log({email,password})
    let data={email,password}
    fetch("http://localhost:3000/Login",{
        method:'POST',
        headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
    },
    body:JSON.stringify(data)
    
 } ).then((result)=>{
    result.json().then((resp)=>{
    console.log("resp",resp)
})

 })
}
return (
    
    <div className="Login-Container">
        <h2>Login</h2>
    <form className="Login-form" >
        <label htmlFor="email">Email</label>
        <input value={email} onChange={(e)=>setEmail(e.target.value)}type="email" placeholder="abc@gmail.com" id="email" name="email"></input>
        <label htmlFor="password">Password</label>
        <input value={password} onChange={(e)=>setPassword (e.target.value)} type="password" placeholder="Pass@123" id="password" name="password"></input>
        <button type="Submit" onClick={saveUser}>Login</button>
    </form>
         <button className="link-btn" onClick={()=> props.onFormSwitch('Register')}>If you don't have acccout? Register Here.</button>
    
         </div>
    
)

}
export default Login;


// <form onSubmit={handleSubmit}>
// <label htmlFor="email">email</label>
// <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="abc@gmail.com" id="email" name="email"></input>
// <label htmlFor="password">password</label>
// <input value={pass}  onChange={(e)=>setPass(e.target.value)} type="password" placeholder="Pass@123" id="password" name="password"></input>
// <button type="Submit">Login</button>
// </form>
//  <button onClick={()=> props.onFormSwitch('Register')}>If you don't have acccout? Register Here.</button>






