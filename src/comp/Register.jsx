import React from "react";

import { useState } from "react";

const Register= (props)=>{
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [file,setFile]=useState('');



//     const saveUser=async function(e){
//         e.preventDefault();
//        let data= {name,email,password};

//          const res=await  fetch('http://localhost:3000/register',{
//                     method:'POST',
//                     headers:{
//                     'Accept':'application/json',
//                     'Content-Type':'application/json'
//                 },
//                 body:JSON.stringify({
//                     name,email,password  
//                 })
              
//     }) 
    

// }

    function saveUser(e){
        e.preventDefault();
        console.log({name,email,password})
        let data={name,email,password}
        fetch('/register',{
            method:'POST',
            headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
        
    }).then((result)=>{
        result.json().then((resp)=>{
        console.log("resp",resp)
    })

     })
    }


 return (

    
    <div className="Login-Container">
        <h2>Register</h2>
    <form className="Register-form" method="POST">
        <label htmlFor="name">Full name</label>
        <input value={name} onChange={(e)=>setName(e.target.value)} type="text" id="name" placeholder="full name" />
        <label htmlFor="email">Email</label>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" id="email" placeholder="xyz@gmail.com"/>
        <label htmlFor="Password">password</label>
        <input value={password} onChange={(e)=>setPassword(e.target.value)}type="password" id="password" placeholder="Pass@123"/>
        <label htmlFor="uploadFile">profilePicture</label>
        <input value={file} onChange={(e)=>setFile(e.target.value)} type="file" name="profilePicture"></input>
        <button type="submit" onClick={saveUser}>Register</button>
    </form>
    <button className="link-btn" onClick={()=> props.onFormSwitch('Login')}>Already have an account? Login here.</button>
    </div>
    
    
 )


}
export default Register;




{/* <button className="link-btn" onClick={()=> props.onFormSwitch('Login')}>Already have an account? Login here.</button>
</div> */}









