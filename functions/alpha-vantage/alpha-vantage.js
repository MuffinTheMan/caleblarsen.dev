const axios = require('axios');

const API_KEY = process.env.ALPHA_VANTAGE_API_KEY;

exports.handler = function(event) {
  const params = event.queryStringParameters;
  const symbol = params.symbol || 'IBM';

  return axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&outputsize=full&apikey=${API_KEY}`)
    .then(function (response) {
      return {
        statusCode: response.status,
        body: JSON.stringify(response.data),
      };
    })
    .catch(function (error) {
      return {
        statusCode: 500,
        body: JSON.stringify(error),
      };
    });
};