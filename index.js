const express = require('express');
const app = express();


app.get('/', (req, res)=>{
    res.send("OK");
})


app.get('/api/auth', (req, res)=>{
    res.send("OK");
})

app.listen(5000);