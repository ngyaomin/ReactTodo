var moment = require('moment');

console.log(moment().format());

var now = moment();

console.log('Current timestamp', now.unix());

var timestamp = 1496321389;
var currentmoment = moment.unix(timestamp);
console.log('Current  moment', currentmoment.format('MMM D, YY @ h:mm a'));

console.log('Current  moment', currentmoment.format('MMMM Do, YYYY @ hh:mm A'));
