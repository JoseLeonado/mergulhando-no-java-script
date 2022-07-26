const person = {
   name: 'Italo',
   age: 14,
   contact: {
      email: 'lucas@email.com'
   }
}

const { name: nome, age: idade, contact: { email } } = person

console.log(nome)
console.log(idade)
console.log(email)