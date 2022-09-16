exports.paginaInicial = (req, res) => {
//  res.render('index')  // index.ejs antes da aula 144
  res.render('index', {  // index.ejs aula 144 inject
    titulo: 'Este será o título da página',
    numeros: [0,1,2,3,4,5,6,7,8,9]
  })  
  return
}

exports.trataPost = (req, res) => {
  res.send(req.body)
  return
}

// Estas linha comentadas são apenas testes para fixar
// a orientação do professor de como fazer inserçõe e 
// consultas no bd na aula 140
//     retirado senão toda vez cria um registro no bd
//const HomeModel = require('../models/HomeModel')
//HomeModel.create({
//  titulo: 'Outro título de teste',
//  descricao: 'Outra descrição de testes.'
//})
//  .then(dados => console.log(dados))
//  .catch(e => console.log(e))

//HomeModel.find()  // para consultar
//  .then(dados => console.log(dados))
//  .catch(e => console.log(e))

/* antes explicações de uso do middleware
exports.paginaInicial = (req, res, next) => {
  console.log('Respondendo ao cliente')
  res.render('index')  // index.ejs
  console.log(`'paginaInicial' Olha o que tem na req.session.nome ${req.session.nome}`)
  next()
}

exports.trataPost = (req, res, next) => {
  res.send('Sou a rota de POST')
}
*/
