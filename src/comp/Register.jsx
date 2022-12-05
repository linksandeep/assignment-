import React from "react";

import { useState } from "react";

const Register= (props)=>{
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [file,setFile]=useState('');
    const handleSubmit=async (e)=>{

        e.preventDefault();
         const res= await fetch("http://localhost:3000/register",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
          name,email,password,file
        })
    
       }) 
       setName("")
       setEmail("")
       setPassword("")
       setFile("")
        //  res()
     }

    //  const res= await fetch("http://localhost:3000/Register",{
    //     method:"POST",
    //     headers:{
    //         "Content-Type":"application/json"
    //     },
    //     body:JSON.stringify({
    //       name,email,pass,file
    //     })
    
    //    }).then(alert("user register sucefu..."))
    


 return (

    
    <div className="Login-Container">
        <h2>Register</h2>
    <form className="Register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full name</label>
        <input value={name} onChange={(e)=>setName(e.target.value)} type="text" id="name" placeholder="full name" />
        <label htmlFor="email">Email</label>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" id="email" placeholder="xyz@gmail.com"/>
        <label htmlFor="Password">password</label>
        <input value={password} onChange={(e)=>setPassword(e.target.value)}type="password" id="password" placeholder="Pass@123"/>
        <label htmlFor="uploadFile">profilePicture</label>
        <input value={file} onChange={(e)=>setFile(e.target.value)} type="file" name="profilePicture"></input>
        <button type="submit">Register</button>
    </form>
    <button className="link-btn" onClick={()=> props.onFormSwitch('Login')}>Already have an account? Login here.</button>
    </div>
    
 )


}
export default Register;










{/* <form onSubmit={handleSubmit}>
<label htmlFor="name">Full name</label>
<input value={name}  onChange={(e)=>setName(e.target.value)} type="text" id="name" placeholder="full name" />
<label htmlFor="email">email</label>
<input value={email}  onChange={(e)=>setEmail(e.target.value)} type="email" id="email" placeholder="xyz@gmail.com"/>
<label htmlFor="password">password</label>
<input value={pass}  onChange={(e)=>setPass(e.target.value)}type="password" id="password" placeholder="Pass@123"/>
<button type="submit">Register</button>
</form>
<button onClick={()=> props.onFormSwitch('Login')}>Already have an account? Login here.</button> */}
