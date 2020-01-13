const request = require('request');
const cheerio = require('cheerio');
request('https://dou.ua/', function (error, response, body){
    console.log('error:', error);    
    console.log('statusCode', response && response.statusCode);
    console.log('body:', body);  
});

console.log("Запустился main1.js");

require('./main2.js');