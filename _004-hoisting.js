/**
 * Hoisting - возможность использовать переменные 
 * или функции до того, как они были инициализированы 
 */

// console.log(sum(1, 41))
//
// function sum(a, b) {
//   return a + b
// }

// var i
// console.log(i) // undefined
// i = 42
// console.log(i) // 42

/**
 * let и const не подвержены hoisting
 * нельзя использовать такую переменную до объявления
 */

// console.log(num) // ReferenceError: num is not defined
// let num = 42
// console.log(num)

// Function Expression & Function Declaration

/**
 * Function Declaration (подвержены hoisting)
 */
// function square(num) {
//   return num ** 2
// }

/**
 * Function Expression (не подвержены hoisting)
 */
var square = function(num) {
    return num ** 2
  }
  
  console.log(square(25))