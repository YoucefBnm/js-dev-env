const numeral = require('numeral');
require('../index.css')

const courseValue = numeral(1000).format('10.0.00')
console.log(`I would paty ${courseValue} for this awesome course!`)
