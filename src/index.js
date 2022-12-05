const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route');
const multer= require("multer")
var cors = require('cors')
const { default: mongoose } = require('mongoose');

const app=express()
app.use(cors({
    origin:"*"
}))

app.use(multer().any())    // TO EXPORT MULTI-FORM DATA 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))


mongoose.connect("mongodb+srv://Sameer_Bajaj:sameerpriyanka@cluster0.qemwb.mongodb.net/Sameer-Project1", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )



app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});