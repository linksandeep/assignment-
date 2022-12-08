import React from "react";

import { useState } from "react";

const Register= (props)=>{
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [file,setFile]=useState('');

// const handle=(e)=>{
   
// }


 return (

    
    <div className="Login-Container">
        <h2>Register</h2>
    <form className="Register-form" >
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




{/* <button className="link-btn" onClick={()=> props.onFormSwitch('Login')}>Already have an account? Login here.</button>
</div> */}









