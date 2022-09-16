// o model é responsável por criar os schema, CRUD e validar os dados
const mongoose = require('mongoose')
const HomeSchema = new mongoose.Schema({
  titulo: { type: String, required: true},
  descricao: String
})

const HomeModel = mongoose.model('Home', HomeSchema)

class Home {

}

module.exports = Home //Antes, "module.exports = HomeModel" do teste aula 140



