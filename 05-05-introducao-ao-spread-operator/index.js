const parts = ['ombro', 'joelho']
const sentece = ['cabeca', ...parts, 'pés']

console.log(sentece)
console.log()
function createUser(name, age, ...contacts) {
    return {
        name,
        age,
        contacts
    }
}

var user = createUser('Lucas', 32, 'email', 'email2', 'email3', 'email4')
console.log(user)
console.log()

const immutableArray = ['select', '*', 'from', 'posts']

const mutableArray = [...immutableArray]
mutableArray.push('where id = 1')

console.log(immutableArray)
console.log(mutableArray)