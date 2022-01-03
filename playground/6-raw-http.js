// HTTP REQUEST HANDLING WITHOUT ANY PACKAGES just using the core module

const http = require('http')

let url = 'http://api.weatherstack.com/current?access_key=c9e3a2c7bee5bb81d7cb7b562d6662d4&query=45,-75'

const request = http.request(url, (response) => {
    let data = ''

    response.on('data'), (chunk) => {
        data = data + chunk.toString()
        
    }

    response.on('end', () => {
        const responseBody = JSON.parse(data)
        console.log(responseBody)
    })
})

request.on('error', () => {
    console.log('An error', error)
})

request.end()