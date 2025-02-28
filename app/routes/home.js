import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class HomeRoute extends Route {
    @service omdb;

    async model() {
        await this.omdb.showMovies();
        return this.omdb.movies;
    }
}
