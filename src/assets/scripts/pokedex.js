const typeCompatibility = require('./typeCompatibility')
const pokeData = require('./galarPokemonsData')
const fs = require('fs')

// ガラルのポケモンデータ取得
let pokemons = pokeData.data.find((value) => {
  if (value.name === 'モスノウ') {
    value.compatibility = typeCompatibility.main(value.type)
    return true
  }
})
console.log(`pokemons: ${JSON.stringify(pokemons)}`)
