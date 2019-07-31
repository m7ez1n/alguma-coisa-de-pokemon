const Pokemon = require('../models/Pokemon')

class PokemonController {
  async index (req, res) {
    const pokemons = await Pokemon.findAll({
      limit: 10
    })

    res.json(pokemons)
  }

  async show (req, res) {
    const pokemon = await Pokemon.findById(req.params.id)

    return res.json(pokemon)
  }

  async store (req, res) {
    const pokemon = await Pokemon.create(req.body)

    return res.json(pokemon)
  }

  async update (req, res) {
    const pokemon = await Pokemon.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })

    return res.json(pokemon)
  }

  async destroy (req, res) {
    await Pokemon.findByIdAndDelete(req.params.id)

    return res.send()
  }
}

module.exports = new PokemonController()
