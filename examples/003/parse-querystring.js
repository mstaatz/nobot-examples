const querystring = require('querystring');

const url = 'http://www.opencanvas.co.uk?myName=Shaun&myAge=28&comment=Yes+I+am+getting+old';

const parsedUrl = querystring.parse(url.substring(url.indexOf('?') + 1));

console.log(`Hi my name is ${parsedUrl.myName}`);

console.log(`I am ${parsedUrl.myAge}`);

console.log(`Oh and... ${parsedUrl.comment}`);

// One can use this because querystring is deprecated
const param = new URLSearchParams(url.substring(url.indexOf('?') + 1));

console.log(`Hi my name is ${param.get('myName')}`);

console.log(`I am ${param.get('myAge')}`);

console.log(`Oh and... ${param.get('comment')}`);
