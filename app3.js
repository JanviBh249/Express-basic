const express = require('express')
const app = express()
const port = 3000

app.use(express.static(`public`))
app.get('/home', (req, res) => {
    res.sendFile(__dirname+`/home.html`)
  })
app.get('/about', (req, res) => {
    res.sendFile(__dirname+`/about.html`)
  })
app.get('/contact', (req, res) => {
    res.sendFile(__dirname+`/contact.html`)
  })
app.get(`/process`,(req, res) => {
    var no1 =req.query.txt1;
    var no2 =req.query.txt2;
    var c = parseTnt(no1) + parseInt(no2)
    res.send(`Sum is` + c)
}
//  app.get('/edit/:id', (req, res) => {
    var id=req.params,id;
    res.send(`ID is` + id);
  })
  //
)