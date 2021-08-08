const request = require('request')
const forecast = (longitude,latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=586487cd7f717fab69b962522c7266f6&query='+latitude+','+longitude+'&units=m'
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } 
        else if (response.body.error) {
            callback('Unable to find location. Try another search.', undefined)
        }
         else {
            callback(undefined, {
                Temperature: response.body.current.temperature,
                feelslike: response.body.current.feelslike,
                location: response.body.location.name
            })
            // callback(undefined, {
            //     latitude: response.body.location.lat,
            //     longitude: response.body.location.lat,
            //     location: response.body.location.name
            // })
        }
    })
}

module.exports = forecast