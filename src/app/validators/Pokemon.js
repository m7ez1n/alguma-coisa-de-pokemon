const Joi = require('joi')

module.exports = {
  body: {
    name: Joi.string().required(),
    pokedexNumber: Joi.number().required(),
    imgName: Joi.string().required(),
    generation: Joi.number().required(),
    evolutionStage: Joi.string().required(),
    evolved: Joi.number().required(),
    familyID: Joi.number().required(),
    crossGen: Joi.number().required(),
    type1: Joi.string().required(),
    type2: Joi.string().required(),
    weather1: Joi.string().required(),
    weather2: Joi.string().required(),
    statTotal: Joi.number().required(),
    ATK: Joi.number().required(),
    DEF: Joi.number().required(),
    STA: Joi.number().required(),
    legendary: Joi.number().required(),
    aquireable: Joi.number().required(),
    spawns: Joi.number().required(),
    regional: Joi.number().required(),
    raidable: Joi.number().required(),
    hatchable: Joi.number().required(),
    shiny: Joi.number().required(),
    nest: Joi.number().required(),
    New: Joi.number().required(),
    notGettable: Joi.number().required(),
    futureEvolve: Joi.number().required(),
    CP1: Joi.number().required(),
    CP2: Joi.number().required()
  }
}
