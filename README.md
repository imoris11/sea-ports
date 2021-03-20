# sea-ports
Sea Ports Data

Minified sea ports based on [this package](https://github.com/marchah/sea-ports/)

## Installation

Install via [npm](https://www.npmjs.com/):

```
$ npm install ocean-ports
```

## Documentation

### Data

#### `JSON`

Returns an array of the ports
```javascript
[
  {
    "name": "Ajman",
    "country": "United Arab Emirates",
    "province": "Ajman",
    "unlocs": "AEAJM",
  },
  {
    "name": "Abu Dhabi",
    "province": "Abu Z¸aby [Abu Dhabi]",
    "country": "United Arab Emirates",
    "unlocs": "AEAUH",
  },
  {
    "name": "Dubai",
    "province": "Dubayy [Dubai]",
    "country": "United Arab Emirates",
    "unlocs": "AEDXB",
  },
  ...
]
```

## Methods

### searchPorts(string)

Search for ports matching with either name, province, or country

## Examples

````javascript
var ports = require('ocean-ports');

console.log(ports.searchPorts("Lagos"));
/*
[
  {
    name: 'Lagos',
    province: 'Lagos',
    unlocs: 'NGLOS',
    country: 'Nigeria',
    type: 'port'
  },
  {
    name: 'Lagos',
    province: 'Lagos',
    unlocs: 'NGLOS',
    country: 'Nigeria',
    type: 'city'
  },
  {
    name: 'Tincan/Lagos',
    province: 'Lagos',
    unlocs: 'NGTIN',
    country: 'Nigeria',
    type: 'port'
  },
  {
    name: 'Tincan/Lagos',
    province: 'Lagos',
    unlocs: 'NGTIN',
    country: 'Nigeria',
    type: 'city'
  },
  {
    name: 'Calbuco',
    province: 'Los Lagos',
    unlocs: 'CLCBC',
    country: 'Chile',
    type: 'port'
  },
  {
    name: 'Tincan/Lagos',
    province: 'Lagos',
    unlocs: 'NGTIN',
    country: 'Nigeria',
    type: 'city'
  }
]
*/
````

### searchByName(name)

Search for ports matching with name

## Examples

````javascript
var ports = require('ocean-ports');

console.log(ports.searchByName("Apapa"));
/*
[
  {
    name: 'Apapa',
    province: 'Lagos',
    unlocs: 'NGAPP',
    country: 'Nigeria',
    type: 'port'
  },
  {
    name: 'Apapa',
    province: 'Lagos',
    unlocs: 'NGAPP',
    country: 'Nigeria',
    type: 'city'
  }
]
*/
````

### searchByCountry(country)

Search for ports matching with country

## Examples

````javascript
var ports = require('ocean-ports');

console.log(ports.searchByCountry("Nigeria"));
/*
[
  {
    name: 'Apapa',
    province: 'Lagos',
    unlocs: 'NGAPP',
    country: 'Nigeria',
    type: 'port'
  },
  {
    name: 'Apapa',
    province: 'Lagos',
    unlocs: 'NGAPP',
    country: 'Nigeria',
    type: 'city'
  },
  {
    name: 'Calabar',
    province: 'Cross River',
    unlocs: 'NGCBQ',
    country: 'Nigeria',
    type: 'port'
  },
  {
    name: 'Calabar',
    province: 'Cross River',
    unlocs: 'NGCBQ',
    country: 'Nigeria',
    type: 'city'
  },
  {
    name: 'Lagos',
    province: 'Lagos',
    unlocs: 'NGLOS',
    country: 'Nigeria',
    type: 'port'
  },
...
]
*/
````

### searchByCity(city)

Search for ports matching with city

## Examples

````javascript
var ports = require('ocean-ports');

console.log(ports.searchByCity("Rivers"));
/*
[
  {
    name: 'Onne',
    province: 'Rivers',
    unlocs: 'NGONN',
    country: 'Nigeria',
    type: 'port'
  },
  {
    name: 'Onne',
    province: 'Rivers',
    unlocs: 'NGONN',
    country: 'Nigeria',
    type: 'city'
  },
  {
    name: 'Port Harcourt',
    province: 'Rivers',
    unlocs: 'NGPHC',
    country: 'Nigeria',
    type: 'port'
  },
  {
    name: 'Port Harcourt',
    province: 'Rivers',
    unlocs: 'NGPHC',
    country: 'Nigeria',
    type: 'city'
  }
]
*/
````
