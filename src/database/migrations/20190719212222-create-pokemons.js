'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pokemons', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      pokedexNumber: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      imgName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      generation: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      evolutionStage: {
        allowNull: false,
        type: Sequelize.STRING
      },
      evolved: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      familyID: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      crossGen: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      type1: {
        allowNull: true,
        type: Sequelize.STRING
      },
      type2: {
        allowNull: true,
        type: Sequelize.STRING
      },
      weather1: {
        allowNull: true,
        type: Sequelize.STRING
      },
      weather2: {
        allowNull: true,
        type: Sequelize.STRING
      },
      statTotal: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      ATK: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      DEF: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      STA: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      legendary: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      aquireable: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      spawns: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      regional: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      raidable: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      hatchable: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      shiny: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      nest: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      New: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      notGettable: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      futureEvolve: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      CP1: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      CP2: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      created_At: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_At: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('pokemons')
  }
}
