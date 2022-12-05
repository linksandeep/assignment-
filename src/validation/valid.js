const mongoose=require("mongoose")


const isValid =(value)=>{
    if(typeof value==undefined || typeof value==null) return false
    if(typeof value=="string" && value.trim().length==0) return false
    if(value==null) return false
    return true
}



const isValidName=(name)=>{
    if (/^[-a-zA-Z_:,.' ']{1,100}$/.test(name))
    return true
}

const isValidMail=(mail)=>{
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
        return true
}

const isValidPassword = (pw) => {
    if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,15}$/.test(pw))
        return true
}




module.exports={isValid,isValidPassword,isValidMail,isValidName}