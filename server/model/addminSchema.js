const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


const adminSchema = new mongoose.Schema({
    name:{
        type: String,
        require:true
    },
    email:{
        type: String,
        require:true
    },
    phone:{
        type: Number,
        require:true
    },
    password:{
        type: String,
        require:true
    },
    cpassword:{
        type: String,
        require:true
    },
    tokens:[
        {
            token: {
                
              type: String,
              required: true
            }
        }
    ]

})


// genereate token
adminSchema.methods.generateAuthToken = async function(){
    try{
        let token = jwt.sign({_id:this._id},process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token:token});
        await this.save();
        return token;

    }catch(err){
        console.log(err);
    }
}

const Admin = mongoose.model('ADMIN',adminSchema);

module.exports = Admin;