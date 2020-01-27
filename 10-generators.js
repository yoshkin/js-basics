// function* strGenerator() {
//     yield 'H'
//     yield 'e'
//     yield 'l'
//     yield 'l'
//     yield 'o'
// }

// const str = strGenerator()


// function* numberGen(n = 10) {
//     for(let i = 0; i < n; i++) {
//         yield i
//     }
// }

// const number = numberGen(7)

const iterator = {
    [Symbol.iterator](n = 10) {
        let i = 0

        return {
            next() {
                if (i < n) {
                    return {value: i++, done: false}
                }
                return {value: undefined, done: true}
            }
        }
    }
}


// for (let key of 'hello') {
//     console.log(key)
// }

// for (let key of [1, 1, 2, 3, 5, 8, 13]) {
//     console.log(key)
// }

// for (let key of iterator) {
//     console.log(key)
// }

function* iterator2(n = 10) {
    for(let i = 0; i < n; i++) {
        yield i
    }
}

for (let key of iterator2(5)) {
    console.log(key)
}