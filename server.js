var irc = require('irc');
var farfallino = require('./farfallino');

var client = new irc.Client('irc.freenode.net', 'farfallino', {
    channels: ['#flvbot'],
});

client.addListener('message', function (from, to, message) {
    console.log(farfallino.transform(message));
    client.say(to, farfallino.transform(message));
});

client.addListener('error', function(message) {
    console.log('error: ', message);
});