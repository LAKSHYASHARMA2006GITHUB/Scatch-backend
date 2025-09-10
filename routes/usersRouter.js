const express = require("express");
const router = express.Router();

router.get("/",function(req,res){
console.log("hello it's working by user");
});

module.exports = router;