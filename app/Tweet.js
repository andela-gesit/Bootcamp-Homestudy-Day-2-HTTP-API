
var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: 'nWFqFLLXxxPDFQo2qH8AJi2v5',
  consumer_secret: 'lBD99B3yEWzFwgLQqpvhokRnOICCR2IuaELHA3vTLtpDeH5FaY',
  access_token_key: '91315704-ubhlY8BrLIatC5SvQAYj3axQBwQDr6vlxlTs7zlvS',
  access_token_secret: 'BWSIhn2FTVRN77aA9ef4uBisk5kIJzQkbfCJp15IQwaFg'
});
/* 
client.post('statuses/update', {status: 'Tweeted!'},  function(error, tweet, response){
  if(error){
    console.log('An error occured');
  }
  console.log(tweet);  // Tweet body.
  console.log(response);  // Raw response object.
});
*/
var params = {screen_name: 'Andela'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});
client.stream('statuses/filter', {track: '#Andela'}, function(stream) {
  stream.on('data', function(tweet) {
    console.log(tweet.text);
  });

  stream.on('error', function(error) {
    console.log(error);
  });
});