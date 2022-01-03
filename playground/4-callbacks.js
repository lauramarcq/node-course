setTimeout(() => {
    console.log('two seconds are up')
},  2000)

const names = [ 'andres', 'jen', 'jess', 'carolina']
const shortNames = names.filter((name) => {
    return name.length <= 4
})

const geocode = (address, callback) => {

    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0
        }
        callback(data)
    },  2000)
}

geocode('Bristol', (callData) =>{
    console.log(callData)
})

const add = (x, y, sum) => {
    setTimeout(() => {
       let add = x + y
       sum(add)
    }, 2000) 
}

add(1, 4, (sum) => {
    console.log(sum)
})