// TODO: Create a class in this file to contain all of the logic for this exercise
class SoftPlay {
  constructor() {
    this.adults = 0
    this.children = 0
  }

  enter(numOfAdults, numOfChildren) {
    if (numOfChildren > numOfAdults) {
      return false
    } else {
      this.adults += numOfAdults
      this.children += numOfChildren
      return true
    }
  }

  occupancy() {
    return {
      adults: this.adults,
      children: this.children
    }
  }

  leave(numOfAdults, numOfChildren) {
    this.adults -= numOfAdults
    this.children -= numOfChildren

    if (numOfAdults < numOfChildren || this.adults < this.children) {
      this.adults += numOfAdults
      this.children += numOfChildren
      return false
    } else {
      return true
    }
  }
}

const funHouse = new SoftPlay()

console.log(funHouse.occupancy())
console.log(funHouse.enter(2, 1))
console.log(funHouse.occupancy())
console.log(funHouse.leave(1, 0))
console.log(funHouse.occupancy())
console.log(funHouse.enter(0, 1))
console.log(funHouse.occupancy())
console.log(funHouse.leave(1, 0))
console.log(funHouse.occupancy())
console.log(funHouse.leave(1, 1))
console.log(funHouse.occupancy())

// TODO: Change the undefined value below to the name of your class
module.exports = undefined
module.exports = SoftPlay
