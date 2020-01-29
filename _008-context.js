const person = {
    surname: 'Старк',
    knows: function (what, name) {
      console.log(`Ты ${what} знаешь, ${name} ${this.surname}`)
    }
  }
  
  const john = { surname: 'Сноу' }
  
  person.knows('все', 'Бран')
  person.knows.call(john, 'ничего не', 'Джон')        // вызов person.knows() в контексте переменной john
  person.knows.apply(john, ['ничего не', 'Джон'])
  person.knows.call(john, ...['ничего не', 'Джон'])
  // person.knows.bind(john, 'ничего не', 'Джон')()
  const bound = person.knows.bind(john, 'ничего не', 'Джон')
  bound()
  
  //========
  
  function Person(name, age) {
    this.name = name
    this.age = age
  
    console.log(this)       // Person { name: 'Aleksey', age: 34 }
  }

  const aleksey = new Person('Aleksey', 34)
  
  //======== Явная передача контекста
  function logThis() {
    console.log(this)
  }
  
  const obj = {num: 30}
  // вызываем функцию logThis в контексте объекта obj
  logThis.apply(obj)    // { num: 30 }
  logThis.call(obj)     // { num: 30 }
  logThis.bind(obj)()   // { num: 30 }
  
  // ===== Неявная передача контекста (impliced)
  const animal = {
    legs: 4,
    logThis: function() {
      console.log(this)
    }
  }
  
  animal.logThis()   // { legs: 4, logThis: [Function: logThis] }
  

  // ======== Стрелочные функции не создают свой контекст

  function Cat(color) {
    this.color = color
    console.log('This', this)                     // This Cat { color: 'red' }
    ;( () => console.log('Arrow this', this) )()  // Arrow this Cat { color: 'red' }
  }
  
  new Cat('red')