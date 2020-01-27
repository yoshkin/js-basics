/**
 * inheritance
 */

class Programmer {
    constructor(name) {
        this.name = name
    }

    code() {
        console.log(`${this.name} is coding...`)
    }
} 

class Backend extends Programmer {
    php() {
        console.log(`${this.name} is coding PHP...`)
    }
} 

class Frontend extends Programmer {
    react() {
        console.log(`${this.name} is coding ReactJS...`)
    }
}

class FullStack extends Frontend {
    // not compliant DRY principle
    php() {
        console.log(`${this.name} is coding PHP...`)
    }
}

// const programmer = new Programmer('User 1')
// programmer.code()

// const backend = new Backend('Backend User 2')
// backend.code()
// backend.php()

// const frontend = new Frontend('Frontend User 3')
// frontend.code()
// frontend.react()

// const fullstack = new FullStack('FullStack User 3')
// fullstack.code()
// fullstack.react()
// fullstack.php()
 

/**
 * сomposition
 */ 

function createProgrammer(name) {
    const programmer = { name }
    return {
        ...programmer,
        ...canCode(programmer)
    }
}

function canCode({ name }) {
    return {
        code: () => console.log(`${name} is coding...`)
    }
}

function canPhp({ name }) {
    return {
        php: () => console.log(`${name} is coding PHP...`)
    }
}

function canReact({ name }) {
    return {
        react: () => console.log(`${name} is coding ReactJS...`)
    }
}

function createFrontend(name) {
    const programmer = createProgrammer(name)
    return {
        ...programmer,
        ...canReact(programmer)
    }
}

function createBackend(name) {
    const programmer = createProgrammer(name)
    return {
        ...programmer,
        ...canPhp(programmer)
    }
}

function createFullstack(name) {
    const programmer = createProgrammer(name)
    return {
        ...programmer,
        ...canPhp(programmer),
        ...canReact(programmer)
    }
}

const programmer = createProgrammer('User 1')
programmer.code()

const backend = createBackend('Backend User')
backend.code()
backend.php()

const frontend = createFrontend('Frontend User')
frontend.code()
frontend.react()

const fullstack = createFullstack('Fullstack User')
fullstack.code()
fullstack.php()
fullstack.react()