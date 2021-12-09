'use strict';
const data = require('./lib/ports.js')
const ports = data.ports
const searchPorts = (searchString) => {
 return [...searchByName(searchString), ...searchByCity(searchString), ...searchByCountry(searchString)]
}

const searchByName = (name) => {
  return ports.filter((port)=> port.name.toLowerCase().includes(name.toLowerCase()) )
}

const searchByCity = (city) => {
  return ports.filter((port)=> port.province.toLowerCase().includes(city.toLowerCase()) )
}

const searchByCountry = (country) => {
  return ports.filter((port)=> port.country.toLowerCase().includes(country.toLowerCase()) )
}

module.exports = {
  JSON: ports,
  searchByCity,
  searchByCountry,
  searchByName,
  searchPorts
};
