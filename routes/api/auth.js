const express = require('express');
const router = express.Router();
const axios = require('axios');
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');


router.post('/',(req, res)=>{
    var {email, password} = req.body;

    //Fake control
    if(email !== config.get('email') || password !== config.get('password'))
        return res.status(401).json("Invalid username or password");

    axios.post(`${config.get("mockAPI")}/auth`, req)
        .then(response => {
            if(!response.data){
                return res.status(400).json("An unexpected error occurred.")
            }
            
            var user = response.data;
            var token = jwt.sign({id:user.id}, config.get('jwtSecret'), {expiresIn:3600})
            return  res.status(200).json({
                    name:user.name,
                    email:user.email,
                    id: user.id,    
                    token : token
            });
        })
        .catch(error => {
            return res.status(400).json(error)
        });
});

module.exports = router;