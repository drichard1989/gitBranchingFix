// We include the request package

var request = require ("request");

// Lests get a movie title

// This means that I can only have a one word movie title
var movieTitle = "";


// If we want multiple word movie title

for (i=2; i<process.argv.length; i++){
	movieTitle = movieTitle + process.argv[i] + " ";

}
// Make a request to OMDB

var omdbAPIURL = "http://omdbapi.com?t=" + movieTitle + "&r=json";

request(omdbAPIURL, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) 
    var movie = JSON.parse(body); 
    console.log(movieTitle + "IMDB Rating:" + erroroccurshere);
  }
})