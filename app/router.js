import EmberRouter from '@ember/routing/router';
import config from 'streaming-website/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('home');
  this.route('movies');
  this.route('reviews');
});
