const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/',(req, res)=>{
    axios.post('https://gfg-api.free.beeceptor.com/api/auth', req)
        .then(response => {
            if(!response.data){
                return res.status(400).json("An unexpected error occurred.")
            }
            return res.status(200).json(response.data);
        })
        .catch(error => {
            return res.status(400).json(error)
        });
});

module.exports = router;