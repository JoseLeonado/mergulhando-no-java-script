const parts = ['ombro', 'joelho', 'orelhas']
const sentence = ['cabeça', ...parts, 'pe']

const immutableArray = ['select', '*', 'from']
const multableArray = [...immutableArray]
multableArray.push('batata')

console.log(immutableArray)
console.log(multableArray)