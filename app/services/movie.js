import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import fetch from 'fetch';

export default class MovieService extends Service {
    @tracked movies = [];

    async showMovies() {
        try {
            const response = await fetch(`http://localhost:8000/public/movies`);
            const data = await response.json();

            if (Array.isArray(data)) {
                this.movies = data;
            }
            else {
                console.error("Failed");
            }
        } catch (error) {
            console.error("Cannot get movies:", error);
        }
    }
}