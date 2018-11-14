const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const axios = require('axios'); // declarar axios

const argv = require('yargs').options({
  direccion:{
    alias: 'd',
    desc: 'Direccion de la ciudad para obtener el clima',
    demand: true
  }
}).argv;



let getInfo = async(direccion) => {
  try{
    let coors = await lugar.getLugarLating(direccion);
    let temp = await clima.getClima(coors.lat, coors.lng);
  }
  catch (e){
      console.log(e);
  }
}

getInfo(argv.direccion)
  .then(mensaje => console.log(mensaje))
  .catch(e => console.log(e));