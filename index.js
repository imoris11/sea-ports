'use strict';
const fs = require('fs')
const portsFromFile = fs.readFileSync('./lib/ports.json', 'utf-8')
const ports = JSON.parse(portsFromFile).ports

const searchPorts = (searchString) => {
 return [...searchByName(searchString), ...searchByCity(searchString), ...searchByCountry(searchString)]
}

const searchByName = (name) => {
  return ports.filter((port)=> port.name.toLowerCase().includes(name.toLowerCase()) )
}

const searchByCity = (city) => {
  return ports.filter((port)=> port.province?.toLowerCase().includes(city.toLowerCase()) )
}

const searchByCountry = (country) => {
  return ports.filter((port)=> port.country.toLowerCase().includes(country.toLowerCase()) )
}

const results = searchPorts("Apapa")
console.log(results.length)

module.exports = {
  JSON: ports,
  searchByCity,
  searchByCountry,
  searchByName,
  searchPorts
};
