const sequelizePaginate = require('sequelize-paginate')

module.exports = (sequelize, DataTypes) => {
  const Pokemon = sequelize.define('Pokemon', {
    name: DataTypes.STRING,
    pokedexNumber: DataTypes.INTEGER,
    imgName: DataTypes.STRING,
    generation: DataTypes.INTEGER,
    evolutionStage: DataTypes.STRING,
    evolved: DataTypes.INTEGER,
    familyID: DataTypes.INTEGER,
    crossGen: DataTypes.INTEGER,
    type1: DataTypes.STRING,
    type2: DataTypes.STRING,
    weather1: DataTypes.STRING,
    weather2: DataTypes.STRING,
    statTotal: DataTypes.INTEGER,
    ATK: DataTypes.INTEGER,
    DEF: DataTypes.INTEGER,
    STA: DataTypes.INTEGER,
    legendary: DataTypes.INTEGER,
    aquireable: DataTypes.INTEGER,
    spawns: DataTypes.INTEGER,
    regional: DataTypes.INTEGER,
    raidable: DataTypes.INTEGER,
    hatchable: DataTypes.INTEGER,
    shiny: DataTypes.INTEGER,
    nest: DataTypes.INTEGER,
    New: DataTypes.INTEGER,
    notGettable: DataTypes.INTEGER,
    futureEvolve: DataTypes.INTEGER,
    CP1: DataTypes.INTEGER,
    CP2: DataTypes.INTEGER
  })

  sequelizePaginate.paginate(Pokemon)

  return Pokemon
}
