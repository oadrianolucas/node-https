const http = require("http");
const https = require('https')
const fs = require("fs");
const express = require("express");
const app = express();

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');


http.createServer(app).listen(80, ()=>{
    console.log('Está rodando na porta 80')
});
/*
https
  .createServer(
    {
      key: fs.readFileSync("keys/key.pem"),
      cert: fs.readFileSync("keys/cert.pem"),
    },
    app
  )
  .listen(80, () => {
    console.log("Está rodando na porta 80");
  });
*/

app.get('/',(req, res)=>{
    res.render('index.html')
})

module.exports = app