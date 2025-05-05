// Define a movies page route
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class MoviesRoute extends Route {
    // Inject movie service into the movie route
    @service movie;

    // Call showMovies function and fetch movie data
    async model() {
        await this.movie.showMovies();
        // Return list of movies
        return this.movie.movies;
    }
}
