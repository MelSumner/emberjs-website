import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about', function() {
    this.route('legal');
    this.route('security');
    this.route('branding');
    this.route('mascots');
    this.route('users');
    this.route('sponsors');
  });
  this.route('community', function() {
    this.route('guidelines');
    this.route('contribute');
  });
  this.route('releases', function() {
    this.route('editions', function() {
      this.route('octane');
    });
    this.route('channels', function() {
      this.route('stable');
      this.route('beta');
      this.route('canary');
    });
    this.route('deprecations');
    this.route('statusboard');
  });
  this.route('docs', function() {
    this.route('learn');
    this.route('quickstart');
  });
});

export default Router;
