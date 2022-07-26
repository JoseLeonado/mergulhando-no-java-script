const fruits = ['Banana', 'Morango', 'Manga']

const person = { name:'Joaquim', age: 32 }
const person2 = { name:'Jonas', age: 33 }
const person3 = { name:'João', age: 34 }

const friends = [person, person2, person3]

const [, { name: nome }] = friends

console.log(nome)

const chart = [[1, 2], [3, 4], [5,6]]

const [, , [x, y]] = chart

console.log(x, y)