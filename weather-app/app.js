
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')



const location = process.argv[2]

if(!location) {
    console.log('Please provide another location')
} else {
    //by convention these callbacks will either throw an error or the data, that's why the two arguments are error and data

    //es6 default fucntion: deconstructed object set equal to an empty object as default
geocode(location, (error, {latitude, longitude, location} = {}) => {

    if( error) {
        return console.log(error)
    } 
    
    forecast(latitude, longitude, (error, forecastData) => {

        if( error) {
            return console.log(error)
        }

        console.log(location)
        console.log(forecastData)
      })
})
}



