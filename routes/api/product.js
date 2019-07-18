const express = require('express')
const router = express.Router();
const axios = require('axios');
const config = require('config');
const auth = require('../../middleware/auth');


router.get('/', auth, (req, res)=>{
    axios.get(`${config.get("mockAPI")}/product`)
    .then(response=>{
        return res.status(200).json(response.data);
    }).catch(err=>{
        return res.status(400).json(err);
    })
});

module.exports = router;