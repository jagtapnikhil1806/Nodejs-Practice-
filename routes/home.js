const express=require("express");
const {homepagehandler}= require("../controllers/home")

const router=express.Router();

router.get('/',homepagehandler)

module.exports=router
