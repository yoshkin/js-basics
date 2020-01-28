const requestUrl = 'https://jsonplaceholder.typicode.com/users'

/**
 * XHR (XmlHttpRequst)
 */

// const xhr = new XMLHttpRequest() 
// xhr.open('GET', requestUrl)
// xhr.responseType = 'json'
// xhr.onload = () => {
//     // console.log(typeof xhr.response)
//     // console.log(JSON.parse(xhr.response))
//     if(xhr.status >= 400) {
//         console.error(xhr.response)
//     } else {
//         console.log(xhr.response)
//     }
// }
// // xhr.onerror = () => {
// //     console.error(xhr.response)
// // }
// xhr.send()


function sendRequest(method, url, body = null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest() 
        xhr.open(method, url)
        xhr.responseType = 'json'
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.onload = () => {
            if(xhr.status >= 400) {
                reject(xhr.response)
            } else {
                resolve(xhr.response)
            }
        }
        xhr.onerror = () => {
            reject(xhr.response)
        }
        xhr.send(JSON.stringify(body))
    })
}

// sendRequest('GET', requestUrl)
//     .then(data => console.log(data))
//     .catch(err => console.error(err))

const body = {name: 'Aleksey', age: 34}

// sendRequest('POST', requestUrl, body)
//     .then(data => console.log(data))
//     .catch(err => console.error(err))


/**
 * Fetch
 */

function sendRequestFetch(method, url, body = null) {
    const headers = {
        'Content-Type': 'application/json'
    }

    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: headers
    }).then( response => {
        if(response.ok) {
            return response.json()
        }
        return response.json().then(err => {
            const e = new Error('Что-то пошло не так')
            e.data = err
            throw e
        })
    })
}

// sendRequestFetch('GET', requestUrl)
//     .then(data => console.log(data))
//     .catch(err => console.error(err))

// sendRequestFetch('POST', requestUrl, body)
//     .then(data => console.log(data))
//     .catch(err => console.error(err))