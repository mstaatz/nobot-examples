const querystring = require('querystring');

const apiHost = 'https://jira.my-company.com/rest/api/latest/search?jql=';

const jqlParams = {
    assignee: 'shaun.stone',
    startAt: 2,
    maxResults: 2
};

const apiUrl = `${apiHost}"${querystring.stringify(jqlParams)}"`;

// querystring is deprecated, one could use this
const apiUrl2 = `${apiHost}"${(new URLSearchParams(jqlParams)).toString()}"`;

console.log(`My JQL API call is ${apiUrl2}`);
