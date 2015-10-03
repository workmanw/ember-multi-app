import Ember from 'ember';

var IndexRoute = Ember.Route.extend({
  store: Ember.inject.service(),

  model: function() {
    return this.get('store').findAll('user');
  }
});

export default IndexRoute;
