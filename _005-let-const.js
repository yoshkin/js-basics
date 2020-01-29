// Let
let a = 'Variable a'
let b = 'Variable b'
{
  a = 'New Variable A'
  let b = 'Local Variable B'
  console.log('Scope A', a)     // Scope A New Variable A
  console.log('Scope B', b)     // Scope B Local Variable B
//   console.log('Scope C', c)
//   let c = 'Something'
}
console.log('A:', a) // New Variable A
console.log('B:', b) // Variable b

// Const
const PORT = 8080
const array = ['react', 'js', 'vue']
array.push('!')
array[0] = 'php'
console.log(array)

const obj = {}
obj.name = 'Aleksey'
obj.age = 34

console.log(obj)

delete obj.name

console.log(obj)
