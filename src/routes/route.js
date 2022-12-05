const express = require('express');
const router = express.Router();
const user=require("../controller/user")

router.post("/Register", user.createUser)
router.post("/Login", user.Login)






module.exports = router;