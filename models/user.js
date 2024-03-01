const mongoose = require('mongoose')

const userSchema= mongoose.Schema 
{ name:{ 
    type:String;
    required:true;
    unique:true;
    };
    email:{
        type: String;
        required: true;
        unique :true;
    };
    password:{
        type:String;
        required:true;
    }
    
}

const user=mongoose.model("user","userschema")

module.exports=user;