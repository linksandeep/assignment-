const jwt= require("jsonwebtoken")
const RegisterModel=require("../models/RegisterModel")


//—————————————————————————————————————————[ Authentication ]————————————————————————————————————————————————————

const authen= async function(req,res,next){
    try{
     const bearerheader= req.headers.authorization
     if(typeof bearerheader=="undefined" || typeof bearerheader=="null"){
      return res.status(401).send({status:false,message:"Token Must Be present"})
     }
    if(!bearerheader) return res.status(401).send({status:false,message:"Token Must Be present"})
     let bearerToken=bearerheader.split(" ")
     let token=bearerToken[1]
      let decodeToken=jwt.verify(token,"Applyingfor",{ ignoreExpiration: true },function(err,decode){
        if(err){ 
            return res.status(401).send({status:false,message:"Token Invalid"}) }
        else{
            if (Date.now() > decode.exp * 1000) {
                return res.status(401).send({ status: false, message: "Session Expired ! Login Again" });
            }
        }
        req.DecodedId=decode.userId
        next()
    })}
    catch(err){
        res.status(500).send({status:false,message:err.message})
    }
}