var me = {
   name: 'José',
   age: 17
}

function checkAge(person) {
   console.log('A idade da pessoa é: ' + person.age)

   if (person.age >= 18) {
      console.log('A pessoa é maior de idade')
   } else {
      console.log('A pessoa é menor de idade')
   }
}

checkAge(me)