const typeCompatibility = require('./typeCompatibility')

// let result1 = JSON.stringify(typeCompatibility.getTypeInfo('こおり'))
// console.log(`result1: ${result1}`)

// let result2 = JSON.stringify(typeCompatibility.main(['はがね']))
// console.log(`result2: ${result2}`)

let result3 = JSON.stringify(typeCompatibility.main(['でんき', 'ひこう']))
console.log(`result3: ${result3}`)