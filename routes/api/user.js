const express = require('express');
const router = express.Router();
const axios = require('axios');
const config = require('config');
const auth = require('../../middleware/auth');

router.get('/', auth, (req, res)=>{
    axios.get(`${config.get("mockAPI")}/user/${req.user.id}`)
    .then(response=>{
        var user = response.data;
        return res.status(200).json({
            name:user.name,
            email:user.email,
            id: user.id
        });
    }).catch(err=>{
        return res.status(400).json(err);
    })
});

module.exports = router;