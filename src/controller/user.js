const RegisterModel=require("../models/RegisterModel")
var jwt = require('jsonwebtoken');
const {isValid,isValidPassword,isValidMail,isValidImg}=require("../validation/valid")
const { uploadFile } = require("../controller/aws/aws");
// var cors = require('cors')



const createUser = async function (req, res) {
    try {
        let data = JSON.parse(JSON.stringify(req.body));
      let files=req.files
        let email= data.email
        console.log(data)
        
       console.log(files)

        if (files && files.length > 0) {
            if (!isValidImg(files[0].mimetype)) {
              return res.status(400).send({
                status: false,
                message: "Image Should be of JPEG/ JPG/ PNG",
            });
        }
    }
            
          let uploadedFileURL = await uploadFile(files[0]);
          data.profileImage = uploadedFileURL;
        
        // if (Object.keys(data).length == 0) {
        //     return res.status(400).send({ msg: "Body should not be empty" })
        // }
        
        if (!("FullName" in data) || !("email" in data) || !("pass" in data)) return res.status(400).send({ msg: "FullName,email,password are required" })

        if (!isValid(data.FullName)) return res.status(400).send({ status: false, msg: "The FUllName Attributes should not be empty" })
        if("passsword" in data){
        if (!isValid(data.password)) return res.status(400).send({ status: false, msg: "The Password Attributes should not be empty" })
        if (!isValidPassword(data.password)) return res.status(400).send({ status: false, msg: "Password must contains 1 upperCaseletter 1 smallCaseLetter 1 special character and 1 digit" })
        }
        if (!isValid(data.email)) return res.status(400).send({ status: false, msg: "The email Attributes should not be empty" })
        if (!isValidMail(data.email)) return res.status(400).send({ status: false, message: "Pls Enter Email in valid Format" })

        if("email" in data){
        let checkunique= await  RegisterModel.findOne({email:email}) 
        if(checkunique) return res.status(400).send({status:false,msg:"This Email Id Already Exists Pls Use Another"})}
        let savedData = await RegisterModel.create(data);
        res.status(201).send({ status: "True", data: savedData });
    }

    catch (error) {
        return res.status(500).send({ status: "False", msg: error.message })
    }
};

//// loging

const Login = async function (req, res) {
let data = req.body;
let email= data.email
console.log(email)
let save=await RegisterModel.findOne({email:email}) 
if(!save.password===data.passsword) return res.status(404).send({ status: "false", msg: "Pls Use Valid Credentials" })

let token = jwt.sign({
    userId: save._id.toString()
}, "Applyingfor")

console.log(token)

res.status(201).send({ status: "Succesfully Login", token: token })

}




module.exports={createUser,Login}