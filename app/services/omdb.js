import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import fetch from 'fetch';

export default class OmdbService extends Service {
    @tracked movies = [];

    async showMovies() {
        const apiKey = 'a407c52';
        const searchList = ['la la land', 'spirited away', 'revenge of the sith', 'rear window', 'the batman', 'casablanca']; 

        let movieResults = [];

        for (let list of searchList) {
            try {
                let response = await fetch(`https://www.omdbapi.com/?s=${list}&apikey=${apiKey}`);
                let data = await response.json();

                if (data.Search && data.Search.length > 0) {
                    let firstMovie = data.Search[0];
        
                    let detailsResponse = await fetch(`https://www.omdbapi.com/?i=${firstMovie.imdbID}&apikey=${apiKey}`);
                    let detailsData = await detailsResponse.json();
        
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
        this.movies = movieResults.slice(0, 6);
    }
}
