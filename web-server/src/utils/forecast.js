const request = require('request')



const forecast = (latitude, longitude, callback) => {
    let url = `http://api.weatherstack.com/current?access_key=c9e3a2c7bee5bb81d7cb7b562d6662d4&query=${longitude},${latitude}`

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error){
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees.`)
        }
    })
}

module.exports = forecast

// const url = 'http://api.weatherstack.com/current?access_key=c9e3a2c7bee5bb81d7cb7b562d6662d4&query=37.8267,-122.4233' 

//setting json:true parses the data, so no need to use JSON.parse
// request({url: url, json: true}, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service.')
//     } else if (response.body.error) {
//         console.log ('Unable to find location ')

//     } else {
//         console.log('It is currently ' + response.body.current.temperature + ' degrees out. But it feels like ' + response.body.current.feelslike + ' degrees out.')
//         console.log('It is ' + response.body.current.weather_descriptions[0] + '.')
//     }
// })