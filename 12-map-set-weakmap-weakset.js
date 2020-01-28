/**
 * new Map()
 */

const obj = {
    name: 'Aleksey',
    age: 34,
    job: 'Fullstack'
}

const entries = [
    ['name', 'Aleksey'],
    ['age', 34],
    ['job', 'Fullstack']
]

// console.log(Object.entries(obj))
// console.log(Object.fromEntries(entries))

const map = new Map(entries)
// console.log(map.get('job'))

map
  .set('newProp', 100)
  .set(obj, 'Value of obj')
  .set(NaN, 'NaN !!')

// console.log(map.get(NaN))

// map.delete('job')
// console.log(map.has('job'))

// console.log(map.size)
// map.clear()
// console.log(map.size)

// ================

// for (let entry of map.entries()) {
//     console.log(entry)
// }


// for (let [key, value] of map) {
//     console.log(key, value)
// }

// for (let value of map.values()) {
//     console.log(value)
// }

// for (let key of map.keys()) {
//     console.log(key)
// }

// map.forEach((val, key, map) => {
//     console.log(val)
// })

//====================

// const array = [...map]
// console.log(array)

// const array2 = Array.from(map)
// console.log(array2)

// const mapObj = Object.fromEntries(map.entries())
// console.log(mapObj)

// ==================

const users = [
    {name: 'User 1'},
    {name: 'User 2'},
    {name: 'User 3'}
]

const visits = new Map()

visits
  .set(users[0], new Date())
  .set(users[1], new Date(new Date().getTime() + 1000 * 60))
  .set(users[2], new Date(new Date().getTime() + 5000 * 60))

function lastVisit(user) {
    return visits.get(user)
}

// console.log(lastVisit(users[2]))


/**
 * new Set()
 */

const set = new Set([
    1, 2, 3, 3, 3, 4, 5, 5, 6
]) 

// console.log(set)
set.add(10).add(20).add(30).add(20)
// console.log(set)
// console.log(set.has(30))
// console.log(set.has(42))
// console.log(set.size)
// console.log(set.delete(1))
// console.log(set.size)
// set.clear()

// console.log(set.values())
// console.log(set.keys())
// console.log(set.entries())

// for (let key of set) {
//     console.log(key)
// }

// ====================

// function uniqValues(array) {
//     return [...new Set(array)]
// }

// console.log(uniqValues([1,2,3,4,4,4,4,5,5,5,5,6,7,8]))

/**
 * new WeakMap()
 */

let obj2 = {name: 'weakmap'} 
// const arr = [obj2]
// obj2 = null
// console.log(arr)

const weakmap = new WeakMap([
    [obj2, 'obj data']
])
//get set delete has
// obj2 = null

// console.log(weakmap.has(obj2))
// console.log(weakmap.get(obj2))
// console.log(weakmap)

const cache = new WeakMap()

function cacheUser(user) {
    if (!cache.has(user)) {
        cache.set(user, new Date())
    }
    return cache.get(user)
}

let user1 = {name: 'User 1'}
let user2 = {name: 'User 2'}

cacheUser(user1)
cacheUser(user2)

user1 = null

// console.log(cache.has(user1))
// console.log(cache.has(user2))

/**
 * new WeakSet()
 */

const users2 = [
    {name: 'User 1'},
    {name: 'User 2'},
    {name: 'User 3'}
]

const visits2 = new WeakSet()

visits2.add(users2[0]).add(users2[1])

users2.slice(1,1)

// console.log(visits2.has(users2[0]))
// console.log(visits2.has(users2[1]))
// console.log(visits2.has(users2[2]))