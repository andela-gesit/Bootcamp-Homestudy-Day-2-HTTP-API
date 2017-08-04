
var Twitter = require('twitter');
var config = require("../secret_keys");

var client = new Twitter(config);



var params = {screen_name: 'Andela'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});


var whats_on_your_mind = {status: 'Hello noders, getting my hands dirty from commandline with #nodejs'}
client.post('statuses/update', whats_on_your_mind, updateStatus);

function updateStatus(error, tweet, response){
  if(error){
    console.log("Ooops!, something went wrong!");
  }
  else{
    console.log('Twitter status updated!');
  }
}

/* send a direct message Victor
*/
 var dm_victor = {
 	screen_name: 'VictorGesit',
 	text: "Hi Victor, commandline message from Basilica using nodejs"
 }

client.post('direct_messages/new', dm_victor, tweeted);

function tweeted(error, tweet, response){
  if(error){
    console.log("Ooops!, Couldn't connect!; ", error);
  }
  else{
    console.log('DM sent successfully!');
  }
}


/* Fetch your tweets and retweets and logs the text
*/

var params = {screen_name: 'VictorGesit'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
  	for(var i= 0; i < tweets.length; i++){
  		console.log(tweets[i].text);
  	}
  }
});



client.get('statuses/retweets_of_me', {count: 3}, reponse);

function reponse(error, tweets, response){
	console.log(tweets);

}



client.stream('statuses/filter', {track: '#Andela'}, function(stream) {
  stream.on('data', function(tweet) {
    console.log(tweet.text);
  });

  stream.on('error', function(error) {
    console.log(error);
  });
});

