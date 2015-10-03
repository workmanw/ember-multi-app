import Ember from 'ember';
import DS from 'ember-data';


var UserModel = DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  githubHandle: DS.attr('string'),

  displayName: Ember.computed('firstName', 'lastName', function() {
    const firstName = this.get('firstName'),
          lastName = this.get('lastName');
    return `${firstName} ${lastName}`;
  })
});

UserModel.reopenClass({
  FIXTURES: [
    {
      id: 1,
      firstName: 'Yehuda',
      lastName: 'Katz',
      githubHandle: 'wycats'
    },
    {
      id: 2,
      firstName: 'Tom',
      lastName: 'Dale',
      githubHandle: 'tomdale'
    },
    {
      id: 3,
      firstName: 'Matthew',
      lastName: 'Beale',
      githubHandle: 'mixonic'
    },
    {
      id: 4,
      firstName: 'Robert',
      lastName: 'Jackson',
      githubHandle: 'rwjblue'
    }
  ]
});

export default UserModel;
