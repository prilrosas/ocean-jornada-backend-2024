const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/oi', function (req, res) {
    res.send('ola mundo')
  })


  // Lista de itens

  const itens = ['Mulher-Maravilha', 'Capitão-America', 'Hulk', 'Thor']
  
  //Endpoint Read All -> [get] /item
  app.get('/item', function(req, res) {
    res.send(itens)
  })

app.listen(3000)