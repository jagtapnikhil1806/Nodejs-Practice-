const express= require('express');
const {signuphandler}=require('../controllers/signup')

const router=express.Router();
  
router.get('/',signuphandler)

module.exports=router;