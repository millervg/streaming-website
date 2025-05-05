// Import service class from Ember
import Service from '@ember/service';
// Import tracked decorater to change Ember components
import { tracked } from '@glimmer/tracking';
// Import fetch API to fetch data
import fetch from 'fetch';

// Define Ember service class for movies
export default class OmdbService extends Service {
    // Initialize reactive movies as an empty array to hold movies from API
    @tracked movies = [];

    // Declare a method to show the movies
    async showMovies() {
        // Use the API key given from the API
        const apiKey = 'a407c52';
        // Define seach list that contains an array of movie titles
        const searchList = ['la la land', 'spirited away', 'revenge of the sith', 'rear window', 'the batman', 'casablanca']; 

        // Initialize empty array to hold all of the movie results
        let movieResults = [];

        // Add a loop that goes through each movie title in searchList array to be stored in 'list'
        for (let list of searchList) {
            try {
                // Fetch OMDB API
                let response = await fetch(`https://www.omdbapi.com/?s=${list}&apikey=${apiKey}`);
                // Parse JSON from OMDB API and store it in data
                let data = await response.json();

                // Check if search exists and contains one movie
                if (data.Search && data.Search.length > 0) {
                    // Find first movie title and store it in firstMovie
                    let firstMovie = data.Search[0];
        
                    // Send fetch request to get title, year, poster, and genre from the movie
                    let detailsResponse = await fetch(`https://www.omdbapi.com/?i=${firstMovie.imdbID}&apikey=${apiKey}`);
                    let detailsData = await detailsResponse.json();
        
                    // Add the movie information to movieResults array
                    movieResults.push({
                        title: detailsData.Title,
                        year: detailsData.Year,
                        poster: detailsData.Poster,
                        genre: detailsData.Genre,
                    });
                }
            } catch (error) {
                console.error(`Cannot get movies for ${list}:`, error);
            }
        }
        // Make sure only 6 movies are stored in the movieResults
        this.movies = movieResults.slice(0, 6);
    }
}
