function greet() {
   console.log(this)
}

greet()

const me = {
   name: 'Daniel',
   greet () {
      console.log(this)
      return 'batata'
   }
}

me.greet()

function getRemainingYearsToMajority(age) {
   return 18 - age
}

const remainingYears = getRemainingYearsToMajority(15)

console.log(remainingYears)