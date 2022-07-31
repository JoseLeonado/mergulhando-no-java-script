const fruits = ['banana', 'morango', 'manga', 'abacate']

function eatAllFruits() {
   fruits.forEach((fruit, index) => {
      console.log(`humm, acabei de comer ${fruit}`)
      console.log(`ele era o ${index + 1} item da minha lista`)
   })
}

eatAllFruits();