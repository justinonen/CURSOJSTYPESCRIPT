const express = require('express')
const route = express.Router()
const homeController = require('./src/controllers/homeController')
const contatoController = require('./src/controllers/contatoController')

// Rotas da home
route.get('/', homeController.paginaInicial)
route.post('/', homeController.trataPost)

// Rotas de contato
route.get('/contato', contatoController.paginaInicial)
                            // paginaIncial do contato     

module.exports = route


/*  antes explicação do middleware
function meumiddleware(req, res, next) {
  req.session = { nome: 'Justino', sobrenome: 'Da Silva'}
  console.log()
  console.log('Passei no middleware')
  console.log()
  next() // chama o próximo parâmetro da requisição get ou post
}        // que pode ser outro middleware ou o final.
route.get('/', meumiddleware, homeController.paginaInicial, function(req, res, next){
  console.log()
  console.log('Ainda estou no middleware"meumiddleware"')
  console.log(`'último middleware' Olha o que tem na req.session.nome ${req.session.nome}`)
})*/
