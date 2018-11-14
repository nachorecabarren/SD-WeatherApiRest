const axios = require('axios');

const getClima = async(lat, lng) => {
    let resp = await axios.get('http://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }');

    return resp.data.main.temp;
}

module.exports = {
    getClima
}