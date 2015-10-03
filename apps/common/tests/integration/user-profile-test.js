import { test, moduleForComponent } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('user-profile', { integration: true });

test('Basic tests', function(assert){
  // Render the component set some stub data
  this.render(hbs`{{user-profile user=user}}`);
  this.set('user', {
    displayName: 'Wesley Workman',
    githubHandle: 'workmanw'
  });

  // Make sure the DOM is right :)
  const expectedHref = 'https://github.com/workmanw';
  const $elem = this.$('.user-profile > a');
  assert.equal($elem.text().trim(), 'Wesley Workman', 'Should be have correct display name');
  assert.equal($elem.prop('href'), expectedHref, 'Should be have correct HREF');
});
