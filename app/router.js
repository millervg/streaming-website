import EmberRouter from '@ember/routing/router';
import { inject as service } from '@ember/service';
import { later } from '@ember/runloop';
import config from 'streaming-website/config/environment';

export default class Router extends EmberRouter {
  @service router;

  get movieRoute() {
    return this.router;
  }

  location = config.locationType;
  rootURL = config.rootURL;

  @service movie;
}

Router.map(function () {
  this.route('home');
  this.route('movies');
  this.route('reviews');
});
