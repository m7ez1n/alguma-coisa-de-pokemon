const Pokemon = require('../models/Pokemon')

class PokemonController {
  async index (req, res) {}

  async show (req, res) {
    const pokemon = await Pokemon.findById(req.params.id)

    return res.json(pokemon)
  }

  async store (req, res) {
    const pokemon = await Pokemon.create(req.body)

    return res.json(pokemon)
  }

  async update (req, res) {}

  async destroy (req, res) {}
}

module.exports = new PokemonController()
