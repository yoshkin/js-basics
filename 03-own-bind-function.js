function logPerson() {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}

const pers1 = {name: 'Aleksey', age: 34, job: 'Engeneer'}
const pers2 = {name: 'Sveta', age: 32, job: 'Lawer'}

function bind(context, fn){
    return function(...args) {
        fn.apply(context, args)
    }
}
// same bind
function bind2(context, fn){
  return fn.apply(context, arguments);
}

// bind(pers1, logPerson)()
// bind(pers2, logPerson)()
