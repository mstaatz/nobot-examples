//const url = require('url');

const args = process.argv.slice(2);

const [urlEntered] = args;

if (urlEntered === undefined) {
    console.error('Please pass an url e.g. https://www.google.de/search?q=stranger+things');
    process.exit(0);
}



/*
const {
    protocol, slashes, host, query, href
} = url.parse(urlEntered);

console.log(`Using protocol: ${protocol}`);

console.log(`Using slashes: ${slashes}`);

console.log(`Host: ${host}`);

console.log(`Query: ${query}`);

console.log(`HREF: ${href}`);
*/

const url = new URL(urlEntered);

console.log(`Using protocol: ${url.protocol}`);

//console.log(`Using slashes: ${url.slashes}`);

console.log(`Host: ${url.host}`);

console.log(`Query: ${url.search}`);

console.log(`HREF: ${url.href}`);
