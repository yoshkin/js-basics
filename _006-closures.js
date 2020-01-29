function sayHelloTo(name) {
  const message = 'Hello ' + name

  return function() {
    console.log(message)
  }
}

const helloToSveta = sayHelloTo('Sveta')
const helloToAleksey = sayHelloTo('Aleksey')
console.log(helloToSveta)         // [Function]
helloToSveta()                    // Hello Sveta
helloToAleksey()                  // Hello Aleksey

function createFrameworkManager() {
    const fw = ['Angular', 'React']
  
    return {
      print: function() {
        console.log(fw.join(' '))
      },
      add: function(framework) {
        fw.push(framework)
      }
    }
  }
  
  const manager = createFrameworkManager()
  // console.log(manager)        // { print: [Function: print], add: [Function: add] }
  manager.print()                // Angular React
  manager.add('VueJS')
  manager.print()                // Angular React VueJS
  
  // setTimeout
  
  const fib = [1, 2, 3, 5, 8, 13]

  for (var i = 0; i < fib.length; i++) {
      setTimeout(function () {
        console.log(`fib[${i}] = ${fib[i]}`)
      }, 1500)
  }
// fib[6] = undefined
// fib[6] = undefined
// fib[6] = undefined
// fib[6] = undefined
// fib[6] = undefined
// fib[6] = undefined
  
  for (var i = 0; i < fib.length; i++) {
    (function(j) {
      setTimeout(function () {
        console.log(`fib[${j}] = ${fib[j]}`)
      }, 1500)
    })(i)
  }
// fib[0] = 1
// fib[1] = 2
// fib[2] = 3
// fib[3] = 5
// fib[4] = 8
// fib[5] = 13

for (let i = 0; i < fib.length; i++) {
  setTimeout(function () {
    console.log(`fib[${i}] = ${fib[i]}`)
  }, 1500)
}
// fib[0] = 1
// fib[1] = 2
// fib[2] = 3
// fib[3] = 5
// fib[4] = 8
// fib[5] = 13