import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class MoviesRoute extends Route {
    @service movie;

    async model() {
        await this.movie.showMovies();
        return this.movie.movies;
    }
}
