const express = require('express')
const validate = require('express-validation')

const routes = express.Router()

const controllers = require('./app/controllers')
const validators = require('./app/validators')

routes.get('/pokemon', controllers.PokemonController.index)
routes.get('/pokemon/:id', controllers.PokemonController.show)
routes.post('/pokemon', validate(validators.Pokemon), controllers.PokemonController.store)
routes.put('/pokemon/:id', validate(validators.Pokemon), controllers.PokemonController.update)
routes.delete('/pokemon/:id', controllers.PokemonController.destroy)

module.exports = routes
