var express = require('express');
var app = express();


app.get('/', (req, res)=>{
  res.sendFile(__dirname + '/views/index.html')
})

// app.use(express.static(__dirname + '/public/style.css'))
app.use("/public", express.static(__dirname + "/public"))

app.get('/json', (req, res)=>{
  res.send({"message": "Hello json"})
})






























 module.exports = app;
