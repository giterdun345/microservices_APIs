var express = require('express');
var app = express();
require('dotenv').config()

app.use((req, res, next) => {
  // console.log(req.method +' '+ req.path + ' - ' + req.ip)
  next()
})

app.get('/', (req, res)=>{
  res.sendFile(__dirname + '/views/index.html')
})

// app.use(express.static(__dirname + '/public/style.css'))
app.use("/public", express.static(__dirname + "/public"))

app.get('/json', (req, res)=>{
  // console.log(process.env.MESSAGE_STYLE + '<== message style')
  if(process.env.MESSAGE_STYLE == 'uppercase'){
    res.json({"message": "HELLO JSON"})
  }else{
    res.json({"message": "Hello json"})
  }
})

app.get('/now', (req, res, next)=>{
  req.time = new Date().toString()
  next()
}, 
(req, res, next)=>{
  // console.log(req.time)
  res.json({time: req.time})
  next()
}
)

app.use('/:word/echo', (req, res) => 
res.json({echo:req.params.word})
)

app.get('/name', (req, res) =>{
  res.json({"first": req.query.first, "last":req.query.last})
 })






























 module.exports = app;
