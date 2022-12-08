import React from "react";
import { useState } from "react";


const Login=(props)=>{
    const [email,setEmail]=useState('');
    const [password, setPassword]=useState('');

return (
    
    <div className="Login-Container">
        <h2>Login</h2>
    <form className="Login-form" >
        <label htmlFor="email">Email</label>
        <input value={email} onChange={(e)=>setEmail(e.target.value)}type="email" placeholder="abc@gmail.com" id="email" name="email"></input>
        <label htmlFor="password">Password</label>
        <input value={password} onChange={(e)=>setPassword (e.target.value)} type="password" placeholder="Pass@123" id="password" name="password"></input>
        <button type="Submit">Login</button>
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






