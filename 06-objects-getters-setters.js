const person06 = Object.create(
    {
        calcAge() {
            console.log('Age:', new Date().getFullYear() - this.birthYear)
        }
    },
    {
        name: {
            value: 'Aleksey',
            enumerable: true,
            writable: true,
            configurable: true
        },
        birthYear: {
            value: 1985,
            enumerable: true,
            writable: true,
            configurable: false
        },
        age: {
            get() {
                return new Date().getFullYear() - this.birthYear
            },
            set(value) {
                console.log('Setting age:', value)
                this.birthYear = new Date().getFullYear() - value
            }
        }
    }
)

// console.log(person06)

// const person062 = {
//     name: 'Aleksey',
//     birthYear: 1985
// }

// person06.name = 'Test'

for(let key in person06) {
    if (person06.hasOwnProperty(key)){
        console.log('Key:', key, person06[key])
    }
}