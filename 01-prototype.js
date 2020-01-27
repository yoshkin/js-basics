// person prototype
const aleksey = {
    name: 'Aleksey',
    age: 34,
    greet: function() {
        console.log('Greet!')
    }
}
// same person prototype
const person = new Object({
    name: 'Aleksey',
    age: 34,
    greet: function() {
        console.log('Greet!')
    }
})

// adding new function to basic object and it will be available for our persons
Object.prototype.sayHello = function() {
    console.log('Hello!')
}

// creating new object from prototype "person1"
const sveta = Object.create(person)
sveta.name = 'Sveta'
sveta.age = 32

// is`t also object in JS
const str1 = 'This is string'

// is`t also object in JS
const str2 = new String('This is string')