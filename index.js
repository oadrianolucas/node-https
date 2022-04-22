const http = require("http");
const https = require('https')
const fs = require("fs");
const express = require("express");
const app = express();
/*
http.createServer(app).listen(3000, ()=>{
    console.log('Está rodando na porta 3000')
});
*/
https
  .createServer(
    {
      key: fs.readFileSync("key.pem"),
      cert: fs.readFileSync("cert.pem"),
    },
    app
  )
  .listen(4000, () => {
    console.log("Está rodando na porta 4000");
  });

app.get('/',(req, res)=>{
    res.send('Olá, sou uma aplicação em node.')
})

module.exports = app