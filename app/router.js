// This file comes loaded with using Ember application, I made changes as needed
// Import EmbertRouter from Ember package
import EmberRouter from '@ember/routing/router';
// Import inject function from Ember service
import { inject as service } from '@ember/service';
// Import later function from Ember loop
import { later } from '@ember/runloop';
// Import config for the Ember application
import config from 'streaming-website/config/environment';

// Define router class to extend the base class
export default class Router extends EmberRouter {
  // Inject service router
  @service router;

    // Return the injected router service
    get movieRoute() {
      return this.router;
}

  location = config.locationType;
  rootURL = config.rootURL;

  @service movie;
}

// Define application's routes, include home, movies, and reviews routes
Router.map(function () {
  this.route('home');
  this.route('movies');
  this.route('reviews');
});
