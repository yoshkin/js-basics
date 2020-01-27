function hello() {
    console.log('Hello', this)
}

const person2 = {
    name: 'Aleksey',
    age: 34,
    sayHello: hello,
    sayHelloWindow: hello.bind(this),  // this === window
    logInfo: function(job, phone) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd()
    }
}

const sveta2 = {
    name: 'Sveta',
    age: 32
}

// // same:
// person2.logInfo.bind(sveta2, 'Frontend', '123456789')()
// // same: 
// const fnSvetaInfoLog = person2.logInfo.bind(sveta2, 'Frontend', '123456789')
// fnSvetaInfoLog()
// //same:
// person2.logInfo.call(sveta2, 'Frontend', '123456789')
// //same:
// person2.logInfo.apply(sveta2, ['Frontend', '123456789'])

// ================

const array = [1, 2, 3, 4, 5]

// function multBy(arr, n) {
//     return arr.map(function(i){
//         return i * n
//     })
// }

Array.prototype.multBy = function(n) {
    return this.map(function(i){
        return i * n
    })
}

// console.log(array.multBy(10))