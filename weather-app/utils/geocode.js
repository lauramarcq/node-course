const request = require('request')

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoibGF1cmFtYXJjcSIsImEiOiJja3BtbmNjeTQwMXNzMnZwZm9oODN0MXc2In0.ZBGcgZBREKTtak2yGJw03Q&limit=1`
    request({url, json:true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location service', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[0],
                longitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode


//Geocoding

//convert address to lat and long and use that for the weather app.

// const url2 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/bristol.json?access_token=pk.eyJ1IjoibGF1cmFtYXJjcSIsImEiOiJja3BtbmNjeTQwMXNzMnZwZm9oODN0MXc2In0.ZBGcgZBREKTtak2yGJw03Q&limit=1'
// request({url: url2, json: true}, (error, response) => {
    
//     if (error) {
//         console.log('Unable to connect to service')
//     } else if (response.body.features.length === 0 || response.body.features === undefined) { //longitude == undefined || latitude == undefined
//         console.log('Unable to find location')
//     } else {
//         let longitude = response.body.features[0].center[0]
//         let latitude = response.body.features[0].center[1]
//         let location = response.body.features[0].place_name
//         console.log(location + ' coordinates are: Latitude:' + latitude + ' and Longitude: ' + longitude)
//     }
// })