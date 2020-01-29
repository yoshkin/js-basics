function Cat(color, name) {
    this.color = color
    this.name = name
  }
  
  // const cat = new Cat('black', 'KOT')
  // console.log(cat)
  
  function myNew(constructor, ...args) {
    const obj = {}
    Object.setPrototypeOf(obj, constructor.prototype)
    return constructor.apply(obj, args) || obj
  }
  
  const cat1 = myNew(Cat, 'black', 'KOT')
  console.log(cat1)   // Cat { color: 'black', name: 'KOT' }
  
  const cat2 = new Cat('black', 'KOT')
  console.log(cat2)   // Cat { color: 'black', name: 'KOT' }
  