const connectToMongo = require('./db');
const express = require('express')



connectToMongo();
const app =  express()
const port = 3000

app.get('/api/auth', (req, res)=>res.send('hello teji'))

const startServer = async(port)=>{
    await app.listen(port);
    console.log(`http://localhost:${port}`);
}
startServer(port)


