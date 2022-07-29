function createUser({ name, age, email }) {
    return {
        name,
        age,
        contact: { email }
    }
}

const user = createUser({
    name: 'Lucas',
    age: 32,
    email: 'lucas@mail.com'
})

console.log(user)