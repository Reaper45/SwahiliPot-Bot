/*
* Author: Joram MWashighadi
* Created: 08/06/2017
* License: [MIT]
*/

var Twit = require('twit');
var config = require('./config');

var T = new Twit(config);

// Stream tweets
var stream = T.stream('statuses/filter', { track: ['#swahilipothub', '#SwahiliPotHub','SwahiliPotHub', 'swahilipothub'] });
stream.on('tweet', function (tweet) {
  var twitId = tweet.id;
  var from = tweet.user.screen_name;

  //Retweet a tweet
  T.post('statuses/retweet/:id', { id: twitId }, function (err, data, response) {
    console.log('Retweeted: '+from)
  })
});
