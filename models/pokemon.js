const mongoose = require('mongoose')

// Make A Schema
const pokemonSchema = new mongoose.Schema({
    name: { type: String, required: true},
    color: { type: String, required: true},
    readyToPlay: Boolean
})


// Make A Model From The Schema

const Pokemon = mongoose.model('Pokemon', pokemonSchema)

// Export The Model For Use  In The App

module.exports = Pokemon