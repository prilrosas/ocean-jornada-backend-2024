const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/oi', function (req, res) {
    res.send('ola mundo')
  })


  // Lista de itens

  const lista = ['Mulher-Maravilha', 'Capitão-America', 'Hulk', 'Thor']
  
  //Endpoint Read All -> [get] /item
  app.get('/item', function(req, res) {
    res.send(lista)
  })

  // Endpoint Read By ID [GET] /item/:id
  app.get('/item/:id' , function (req,res){

    // Acessamos o parametro de rota id
    const id = req.params.id

    //acessamos o item na lista (usando o id - 1)
    // e colocamos na variavel item
    const item = lista[id - 1]

    // Enviamos para a resposta o item acessado
    res.send(item)
  })

  //Especificamos que o corpo da requisição sera em JSON

  app.use(express.json())

  //Endpoint Create [POST] /item
  app.post('/item', function(req, res) {

    // pegamos o item atraves do corpo da requisição
    // no objeto JSON, pegamos a propriedade nome
    const item = req.body.nome

    //adicionamos o item obtido na lista
    lista.push(item)

    // exibimos a uma mensagem de sucesso
    res.send('Item adicionado com sucesso: ' + item)
  })

  //Endpoint Update -> [PUT] /item/:id

  app.put('/item/:id', function(req, res) {

    //Otemos o ID do parametro de rota
    const id = req.params.id

    // Obtemos o corpo da requisição para saber qual novo valor 
    const novoItem = req.body.nome

    // Atualizamos o item na lista
    lista[id -1] = novoItem

    // Enviamos uma mensagem de sucesso
    res.send('Item atualizado com sucesso: ' +id + '.' +novoItem)
  })

  //Endpoint Delete -> [DELETE] /ITE,/:ID

  app.delete ('/item/:id', function(req, res){

     //Otemos o ID do parametro de rota
    const id = req.params.id

    //Removemos item da lista

    delete lista[id -1]

    //Adicionamos uma mensagem de sucesso 

    res.send('item removido com sucesso: ' +id)
  })

app.listen(3000)