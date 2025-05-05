// Define a home page route
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class HomeRoute extends Route {
    // Inject omdb service into the home route
    @service omdb;

    // Call showMovies function and fetch movie data
    async model() {
        await this.omdb.showMovies();
        // Return list of movies
        return this.omdb.movies;
    }
}
