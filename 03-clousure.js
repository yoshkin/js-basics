// function createCalcFunction(n) {
//     return function() {
//         console.log(1000*n)
//     }
// }

// const calc = createCalcFunction(41)
// calc()

// function createIncrementor(x) {
//     return function(y) {
//         return x + y
//     }
// }

// const addOne = createIncrementor(1)
// const addTen = createIncrementor(10)

// console.log(addOne(10))
// console.log(addOne(22))

// console.log(addTen(10))
// console.log(addTen(22))


function urlGenerator(domain) {
    return function(url) {
        return `https://${url}.${domain}`
    }
}

const comUrl = urlGenerator('com')
const ruUrl = urlGenerator('ru')

// console.log(comUrl('google'))
// console.log(ruUrl('google'))