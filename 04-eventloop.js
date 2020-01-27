console.log('start')

function timeout2sec() {
    console.log('Inside timeout after 2 sec')
}

window.setTimeout(function(){
    console.log('Inside timeout after 3 sec')
}, 3000)

setTimeout(function(){
    console.log('Inside timeout after 0 sec')
}, 0)

setTimeout(timeout2sec, 2000)

console.log('end')