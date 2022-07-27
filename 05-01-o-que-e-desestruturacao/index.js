const person = {
   name: 'Italo',
   age: 14
}

function introduce({name, age}) {
   console.log(`Oi! meu nome é ${name} e eu tenho ${age} anos`)
}

const fruits = ['Banana', 'Morango', 'Manga']

const [firstFruit, secondFruit] = fruits

introduce(person)

console.log(firstFruit)
console.log(secondFruit)