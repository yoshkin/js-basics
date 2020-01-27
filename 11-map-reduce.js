const people = [
    {name: 'User 1', age: 17, budget: 50000},
    {name: 'User 2', age: 22, budget: 60000},
    {name: 'User 3', age: 25, budget: 70000},
    {name: 'User 4', age: 30, budget: 80000},
    {name: 'User 5', age: 38, budget: 90000},
    {name: 'User 6', age: 16, budget: 40000}
]

/*
 * For
 */

// for(let i = 0; i < people.length; i++) {
//     console.log(people[i])
// } 

// for(let person of people) {
//     console.log(person)
// }


/*
 * ForEach
 */

// people.forEach((person, index, peopleArr) => {
//     console.log(person)
//     console.log(index)
//     console.log(peopleArr)
// })

// people.forEach(person => console.log(person))

/*
 * Map
 */

// const newPeople = people.map(person => `${person.name} (${person.age})`)
const newPeople = people.map(person => person.age * 2)
// console.log(newPeople)

/*
 * Filter
 */

// const adults = []
// for(let i = 0; i < people.length; i++) {
//     if (people[i].age >= 18) {
//         adults.push(people[i])
//     }
// } 
// console.log(adults)

// const adults = people.filter(person => {
//     if (person.age >= 18) {
//         return true
//     }
// })

const adults = people.filter(person => person.age >= 18)

// console.log(adults)

/*
 * Reduce
 */

// let amount = 0
// for(let i = 0; i < people.length; i++) {
//     amount += people[i].budget
// } 
// console.log(amount)

// const amount = people.reduce((total, person) => {
//      return total + person.budget
// }, 0)

const amount = people.reduce((total, person) => total + person.budget, 0)

// console.log(amount)

/*
 * Find
 */ 

const user = people.find(person => person.name === 'User 2')
// console.log(user)

/*
 * FindIndex
 */ 

const userIndex = people.findIndex(person => person.name === 'User 2')
// console.log(userIndex) 


/**
 * Practice example
 */

const bigBudget = people
    .filter(person => person.budget >= 70000)
    .map(person => {
        return {
            info: `${person.name} (${person.age})`,
            ...person
        }
    })
console.log(bigBudget)