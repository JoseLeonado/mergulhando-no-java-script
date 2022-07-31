function createUser(name, age, ...contacts) {
   return {
      name,
      age,
      contacts
   }
}

const user = createUser('lucas', 32, 'email1', 'email2', 'email3', 'email4')
console.log(user)