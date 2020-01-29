// __proto__
// Object.getPrototypeOf()

function Cat(name, color) {
    this.name = name
    this.color = color
  }
  
  Cat.prototype.voice = function() {
    console.log(`Cat ${this.name} says meow`)
  }
  
  const cat = new Cat('Murzik', 'white')
  
  console.log(Cat.prototype)    // Cat { voice: [Function] }
  console.log(cat)              // Cat { name: 'Murzik', color: 'white' }
  console.log(cat.__proto__ === Cat.prototype) // true
  console.log(cat.constructor)  // [Function: Cat]
  cat.voice()                   // Cat Murzik says meow
  
  // ============
  function Person() {}
  Person.prototype.legs = 2
  Person.prototype.skin = 'white'
  
  const person = new Person()
  person.name = 'Aleksey'

  console.log('skin' in person)     // true
  console.log(person.legs)          // 2
  console.log(person.name)          // Aleksey
  
  console.log(person.hasOwnProperty('name'))  // true
  console.log(person.hasOwnProperty('skin'))  // false
  
  // Object.create()
  var proto = {year: 2020}
  const myYear = Object.create(proto)
  
  console.log(myYear.year)    // 2020
  
  proto.year = 1999
  console.log(myYear.year)    //1999
  
  proto = {year: 1985}
  console.log(myYear.year)    // 1999
  
  console.log(myYear.hasOwnProperty('year'))    // false
  console.log(myYear.__proto__ === proto)       // false
  