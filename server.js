require('dotenv').config() // criaremos arquivo ".env"

const express = require('express')
const app = express()
const mongoose = require('mongoose')

//const connectionString = ''
mongoose.connect(process.env.CONNECTIONSTRING)
  .then(() => {  // retorna um promessa
    app.emit('pronto')// quando ocorrer a conexão o sinal "pronto" será enviado
  })
  .catch(e => console.log(e))

const session = require('express-session')  
const MongoStore = require('connect-mongo') // correção (session) da aula 142             
const flash = require('connect-flash')

const routes = require('./routes')
const path = require('path')
const { middlewareGlobal } = require('./src/middlewares/middleware')

app.use(express.urlencoded({extended: true}))//tratando retorno do POST (body)

app.use(express.static(path.resolve(__dirname, 'public')))

const sessionOptions = session({
  secret: 'Qalquer coisa',
  //store: new MongoStore({ mongooseConnection: mongoose.connection }),
  // correção da aula 142 
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true
  }
})
app.use(sessionOptions)
app.use(flash())

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')  // para reinderizar os views

// Nossos próprios middlewares
app.use(middlewareGlobal) // Com isto todas rotas em todos os verbos
app.use(routes)        // vão passar por este middleware(meuMiddleware.js)             

app.on('pronto', () => { // capturando o sinal "pronto" que é um evento
  app.listen(3000, () => {//somente começa a assistir depois que conectar ao BD
    console.log('Servidor executando na porta 3000')
    console.log('Acessar http://localhost:3000') // link no terminal
  })
})
