const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const Authenticate = require("../middleware/Authenticate");


require('../db/conn');
const User = require('../model/userSchema');
const Pizza = require('../model/pizzaSchema');
const Admin = require('../model/addminSchema');


router.get('/',(req,res) =>{
    res.send(`Hello world from server`);
})

router.post('/signin', async (req, res) => {
    // console.log(req.body);
    // res.json({message:req.body})

    // for testing
    // console.log(req.body.name);
    // console.log(req.body.email);

    const { name, email, phone, password, cpassword } = req.body;

    console.log(req.body);

    //  for validation purpose - if empty feild then error throw
    if (!name || !email || !phone || !password || !cpassword) {

        return res.status(422).json({ error: "please filled properly feild ." });

    }

    try {
        const userExist = await User.findOne({ email: email });

        if (userExist) {
            return res.status(422).json({ error: "user is already exist" });
        } else if (password != cpassword) {
            return res.status(422).json({ error: "password are not same" });

        } else {


            const user = new User({ name, email, phone, password, cpassword });

            //if user is new then we save attribute , but before save we have to encrypt password feild using bcrypt.js
            // presave method

            await user.save();

            res.status(201).json({ message: "user registerd successfully" });
        }


    } catch (err) {
        console.log(err);
    }



})

router.post('/login', async (req, res) => {

    try {
        // console.log(req.body);
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "Please filled the data." });
        }

        console.log(email);
        console.log(password);

        // if(email == "user@gmail.com"){

        // }

        const userLogin = await User.findOne({ email: email });
        const adminLogin = await Admin.findOne({ email: email });
        // console.log(userLogin);
        // console.log(adminLogin);
        // console.log(userLogin.email);
        console.log(adminLogin.email);
        console.log(adminLogin.password);

        // if(userLogin === null){
        //     res.status(400).json({ error: "Invalid Credentials." });
        // }

        
        
        if (userLogin != null) {
            
            const isMatch = await bcrypt.compare(password,userLogin.password);
            
            if(!isMatch){
                
                res.status(400).json({ error: "Invalid Credentials." });
            }else{
                
                const token = await userLogin.generateAuthToken();
                console.log(token)
        
                // for cookies
                // this cookie will save on your browser which you are using for login 
                // name of cookies is left side and right side is actual token
                // pass third parameter fr=or the expire token
                res.cookie("jwtoken",token,{ 
                    expires: new Date(Date.now() + 25892000000),    
                    httpOnly: true  
                });

             
                res.json({ message: "user login successfully" });
            }

         
        }else if (adminLogin != null) {
            
            // const isMatch = await bcrypt.compare(password,adminLogin.password);
            
            if(password != (adminLogin.password)){
                
                res.status(400).json({ error: "Invalid Credentials." });
            }else{
                
                const token = await adminLogin.generateAuthToken();
                console.log(token)
        
                // for cookies
                // this cookie will save on your browser which you are using for login 
                // name of cookies is left side and right side is actual token
                // pass third parameter fr=or the expire token
                res.cookie("jwtoken",token,{ 
                    expires: new Date(Date.now() + 25892000000),    
                    httpOnly: true  
                });

                // if(userLogin.email == 'admin@gmail.com'){
                //     res.status(200).json({ message: "Admin Login Suucessfully...   " });
                // }
                res.status(200).json({ message: "Admin login successfully" });
            }

        }else {

            res.status(400).json({ error: "Invalid Credentials...   " });

        }

    } catch (err) {

        console.log(err);

    }
})

router.get('/pizza',async (req, res) => {
    // Use the Pizza model to find all documents in the collection
    try {
        // Use the Pizza model to find all documents in the collection
        const pizzas = await Pizza.find({});
        // Return the data as JSON
        res.json(pizzas);
      } catch (err) {
        console.error('Error fetching data:', err);
        res.status(500).json({ error: 'Internal server error' });
      }
  })


  router.get('/carts', Authenticate, (req, res) => {
    console.log(`Hello my About`);
    res.send(req.rootUser);
  });

module.exports = router;