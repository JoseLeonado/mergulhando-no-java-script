const getRemainingYears = (age) => 18 - age
console.log(getRemainingYears(15))

const me = {
   name: 'Lucas',
   age: 12,
   greet: () => {
      console.log(this)
   }
}

me.greet()