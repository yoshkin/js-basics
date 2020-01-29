// null, undefined, boolean, number, string, object, symbol

// console.log(typeof 0)               //number
// console.log(typeof true)            //boolean
// console.log(typeof 'Javascript')    //string "", '', `` 
// console.log(typeof undefined)       //undefinded
// console.log(typeof Math)            //object
// console.log(typeof Symbol('JS'))    //symbol
// console.log(typeof null)            //object ? - but type "null"
// console.log(typeof function() {})   //function? - but type "object"
// console.log(typeof NaN)             //number

// Приведение типов
// let language = 'JavaScript'
// if (language) {
//   console.log('The best language is: ', language)
// }

// '', 0, null, undefined, NaN, false
// console.log(Boolean(''))        //false
// console.log(Boolean('Hello'))   //true
// console.log(Boolean(' '))       //true
// console.log(Boolean('0'))       //true
// console.log(Boolean(0))         //false
// console.log(Boolean(null))      //false
// console.log(Boolean([]))        //true
// console.log(Boolean({}))        //true
// console.log(Boolean(function(){})) //true

// Строки и числа
// console.log(1 + '2')        // string 12
// console.log('' + 1 + 0)     // 10
// console.log('' - 1 + 0)     // -1
// console.log('3' * '8')      // number 24
// console.log(4 + 10 + 'px')  // 14px
// console.log('px' + 5 + 10)  // string px510
// console.log('42' - 40)      // num 2
// console.log('42px' - 2)     // NaN
// console.log(null + 2)       // num 2
// console.log(undefined + 42) // NaN

// == vs ===
// console.log(2 == '2')           //true
// console.log(2 === '2')          //false
// console.log(undefined == null)  //true
// console.log(undefined === null) //false
// console.log('0' == false)       //true
// console.log('0' == 0)           //true
// console.log(0 == 0)             //true

// =====
// console.log(false == '') //true
// console.log(false == []) //true
// console.log(false == {}) //false
// console.log('' == 0)     //true
// console.log('' == [])    //true
// console.log('' == {})    //false
// console.log(0 == [])     //true
// console.log(0 == {})     //false
// console.log(0 == null)   //false
