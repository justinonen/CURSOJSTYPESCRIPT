exports.middlewareGlobal = (req, res, next) => {
  res.locals.umaVariavelLocal = 'Este é o valor da variável local'            
  next()     // O valor pode ser objeto, função,etc... injeta em todas rotas
}

exports.outroMiddleware = (req, res, next) => {
  next()
}

/*
exports.middlewareGlobal = (req, res, next) => {
    if(req.body.cliente) { // name lá do input(index.ejs)
  req.body.cliente = req.body.cliente.replace('Justino', 'Não use Justino')
  console.log()   // interceptando e alterando o valor de cliente e avisa
  console.log(`Middleware Global, diz "Vi que você postou ${req.body.cliente}"`)
  console.log()
 }
 next()
}
*/
