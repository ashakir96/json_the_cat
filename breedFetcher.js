const request = require('request');
const input = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${input[0]}`, (error, response, body) => {
  if (error) {
    console.log(error);
    throw error;
  } else {
    const data = JSON.parse(body);
    if (data[0]) {
      console.log(data[0].description);
    } else {
      console.log("breed name does not exist!");
    }
  }
});