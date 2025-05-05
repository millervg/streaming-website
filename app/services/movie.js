// Import service class from Ember
import Service from '@ember/service';
// Import tracked decorater to change Ember components
import { tracked } from '@glimmer/tracking';
// Import fetch API to fetch data
import fetch from 'fetch';

// Define Ember service class for movies
export default class MovieService extends Service {
    // Initialize reactive movies as an empty array to hold movies from API
    @tracked movies = [];

    // Declare method to fetch the list of movies
    async showMovies() {
        try {
            // Make HTTP GET request to the movies
            const response = await fetch(`http://localhost:8000/public/movies`);
            // Wait for response from fetch and parse response as JSON
            const data = await response.json();

            // Check if API data is an array, then assign to movie property
            if (Array.isArray(data)) {
                this.movies = data;
            }
            // Send error message if it is not an array
            else {
                console.error("Failed");
            }
        } catch (error) {
            console.error("Cannot get movies:", error);
        }
    }
}