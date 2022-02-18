const person09 = {
    name: 'Aleksey',
    age: 34,
    job: 'Fullstack'
}

const op = new Proxy(person09, {
    get(target, prop) {
        // console.log('Target', target)
        // console.log('Prop', prop)
        console.log(`Getting prop ${prop}`)
        if (!(prop in target)) {
            return prop
                .split('_')
                .map(p => target[p])
                .join(' ')
        }
        return target[prop]
    },
    set(target, prop, value) {
        if (prop in target) {
            target[prop] = value
        } else {
            throw new Error(`No ${prop} field in target`)
        }
    },
    has(target, prop) {
        return ['age', 'name', 'job'].includes(prop)
    },
    deleteProperty(target, prop) {
        console.log(`Trying to delete prop: ${prop}`)
        delete target[prop]
        return true
    }
})

//Functions

const log = text => `Log: ${text}`

const fp = new Proxy(log, {
    apply(target, thisArg, args) {
        console.log('Calling fn..')

        return target.apply(thisArg, args).toUpperCase()
    }
})


//Classes

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

const PersonProxy = new Proxy(Person, {
    construct(target, args) {
        // console.log('Constructing..')

        return new Proxy(new target(...args), {
            get(t, prop) {
                console.log(`Getting prop ${prop}`)
                return t[prop]
            }
        })
    }
})

const p = new PersonProxy('Sveta', 32)


// Practice:

/*
    Wrapper
*/

const withDefaultValue = (target, defaulfValue = 0) => {
    return new Proxy(target, {
        get: (obj, prop) => (prop in obj ? obj[prop] : defaulfValue)
    })
}

const position = withDefaultValue(
    {
        x: 24,
        y: 42
    }, 
    0
)

// console.log(position)

/*
    Hidden props
*/

const withHiddenProps = (target, prefix = '_') => {
    return new Proxy(target, {
        has: (obj, prop) => (prop in obj) && (!prop.startsWith(prefix)),
        ownKeys: obj => Reflect.ownKeys(obj)
            .filter(p => !p.startsWith(prefix)),
        get: (obj, prop, receiver) => (prop in receiver) ? obj[prop] : void 0
    })
}

const data = withHiddenProps(
    {
        name: 'Aleksey',
        age: 34,
        _uid: '123123123'
    }
)


/*
    Optimization
*/

const userData = [
    {id: 1, name: 'user 1', age: 30, job: 'Fullstack 1'},
    {id: 2, name: 'user 2', age: 31, job: 'Fullstack 2'},
    {id: 3, name: 'user 3', age: 32, job: 'Fullstack 3'},
    {id: 4, name: 'user 4', age: 33, job: 'Fullstack 4'},
]

// const index = {}
// userData.forEach(i => index[i.id] = i)

const IndexedArray = new Proxy(Array, {
    construct(target, [args]) {
        const index = {}
        args.forEach(item => (index[item.id] = item));

        return new Proxy(new target(...args), {
            get(arr, prop) {
                switch(prop) {
                    case 'push' : 
                        return item => {
                            index[item.id] = item
                            arr[prop].call(arr, item)
                        }
                    case 'findById':
                        return id => index[id]
                    default: 
                        return arr[prop]
                }
            }
        })
    }
})

const users = new IndexedArray(userData)


const camelcase = require('camelcase')
const prefix = 'findWhere'
const assertions = {
  Equals: (object, value) => object === value,
  IsNull: (object, value) => object === null,
  IsUndefined: (object, value) => object === undefined,
  IsEmpty: (object, value) => object.length === 0,
  Includes: (object, value) => object.includes(value),
  IsLowerThan: (object, value) => object === value,
  IsGreaterThan: (object, value) => object === value
}
const assertionNames = Object.keys(assertions)
const wrap = arr => {
  return new Proxy(arr, {
    get(target, propKey) {
      if (propKey in target) return target[propKey]
      const assertionName = assertionNames.find(assertion =>
        propKey.endsWith(assertion))
      if (propKey.startsWith(prefix)) {
        const field = camelcase(
          propKey.substring(prefix.length,
            propKey.length - assertionName.length)
        )
        const assertion = assertions[assertionName]
        return value => {
          return target.find(item => assertion(item[field], value))
        }
      }
    }
  })
}
const arr = wrap([
  { name: 'John', age: 23, skills: ['mongodb'] },
  { name: 'Lily', age: 21, skills: ['redis'] },
  { name: 'Iris', age: 43, skills: ['python', 'javascript'] }
])
console.log(arr.findWhereNameEquals('Lily')) // находит Lily
console.log(arr.findWhereSkillsIncludes('javascript')) // находит Iris
