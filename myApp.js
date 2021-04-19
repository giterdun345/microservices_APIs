var express = require('express');
var app = express();


app.get('/', (req, res)=>{
  res.sendFile(__dirname + '/views/index.html')
})

// app.use(express.static(__dirname + '/public/style.css'))
app.use("/public", express.static(__dirname + "/public"))

console.log(process.env.MESSAGE_STYLE)
app.get('/json', (req, res)=>{
  if(process.env.MESSAGE_STYLE == 'uppercase'){
    res.json({"message": "HELLO JSON"})
  }else{
    res.json({"message": "Hello json"})
  }
  
})
































 module.exports = app;
