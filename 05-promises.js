console.log('Requesting some data...')

// setTimeout(() => {
//     console.log('Preparing data..')

//     const backendData = {
//         server: 'aws',
//         port: 2000,
//         status: 'working'
//     }

//     setTimeout(() => {
//         backendData.modified = true
//         console.log('Data recieved and modified', backendData)
//     }, 2000)
// }, 2000)


// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Preparing data..')
//         const backendData = {
//             server: 'aws',
//             port: 2000,
//             status: 'working'
//         }
//         resolve(backendData)
//     }, 2000)
// })

// promise.then(data => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.modified = true
//             // resolve(data)
//             reject(data)
//         }, 2000)
//     })
// })
//     .then(modifiedData => {
//         console.log('Data recieved and modified', modifiedData)
//         modifiedData.fromPromise = true
//         return modifiedData
//     })
//     .then(data => {
//         console.log('Updated data', data)
//     })
//     .catch(err => console.error('Error: ', err))
//     .finally(() => console.log('Finally'))


// const sleep = ms => new Promise(resolve => setTimeout(() => resolve(), ms))

const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms)
    })
}

// sleep(2000).then(() => console.log('After 2 sec'))
// sleep(4000).then(() => console.log('After 4 sec'))

Promise.all([sleep(2000), sleep(5000)]).then(() => {
    console.log('All promises')
})

Promise.race([sleep(2000), sleep(5000)]).then(() => {
    console.log('Race promises')
})