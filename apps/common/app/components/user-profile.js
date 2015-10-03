import Ember from 'ember';


var UserProfileComponent = Ember.Component.extend({
  classNames: 'user-profile'.w(),
  
  user: null,

  githubProfileUrl: Ember.computed('user.githubHandle', function() {
    const githubHandle = this.get('user.githubHandle');
    return `https://github.com/${githubHandle}`;
  })
});

export default UserProfileComponent;
