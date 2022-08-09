const os = require('os');

const {userName, sayHi}= require('./test');

const name = 'Jack';

console.log(sayHi(name));
console.log(os.platform(), os.release());