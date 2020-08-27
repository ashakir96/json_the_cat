const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error);
    } else {
      const data = JSON.parse(body);
      if (data[0]) {
        callback(null, data[0].description);
      } else {
        callback(`${breedName} does not exist!`);
      }
    }
  });
};

module.exports = fetchBreedDescription;