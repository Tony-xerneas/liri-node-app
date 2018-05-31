require("dotenv").config();
var fs = require("fs");

// require Twitter api
var Twitter = require("node-twitter-api");

// require Spotify api
var spotify = require ("node-spotify-api")

// require OMDPAPI 


fs.readFile("random.txt", "utf8", function(error, data){
console.log(data);
});

//////////// Twitter ////////////////////////

// create new variable for accessing twitter
// call variable My Tweets

// get user id from the keys

// create a funtion that will loop through all the recent tweets
// display all the tweets onto the console
// display the dates onto console


////////// Spotify //////////////////////

// create the Spotify variable

// get the Spotify id from the keys

// create a function that will acess spotify and get data from Spotify
// only get artist name, song name, album name

// create conditionals where the user must select something, otherwise a song will be chosen


// store it in a variable
// display the data onto the console

// create a variable that will be displayed as a link that will play a preview of the song



//////////// OMDB ///////////////////////

// set up variable/object to request from OMDB api
    // request: Title, Release year, Rating, RT Score, Country of production, Language, plot and actors


    // After certain elements have been received, store them in a variable

    // Create conditionals where a movie is required otherwise a movie will be chosen

    // chosen movie: Mr Nobody

    // Display the variable