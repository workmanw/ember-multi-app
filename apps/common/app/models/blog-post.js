import DS from 'ember-data';


var BlogPostModel = DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string'),
  author: DS.belongsTo('user', { async: true })
});

BlogPostModel.reopenClass({
  FIXTURES: [
    {
      id: 101,
      title: 'Everything is awesome',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat leo a ultricies interdum. Integer vulputate, mi et feugiat vestibulum, mi tellus vulputate arcu, a pellentesque quam eros lacinia purus. Curabitur consectetur tortor id quam dictum egestas. Aenean vitae purus tellus.',
      author: 1,
    },
    {
      id: 102,
      title: 'Ember.js rocks',
      body: 'Fusce id tellus id odio ultricies faucibus. Duis odio est, commodo sed consequat a, consequat quis arcu. Nulla blandit felis euismod, luctus tellus eget, pulvinar velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque tortor enim, tincidunt eget magna sed, faucibus rutrum ex.',
      author: 2
    },
    {
      id: 103,
      title: 'Babel is the future',
      body: 'Proin eget bibendum ligula. Maecenas nec interdum risus, vel interdum neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ac commodo metus. Aliquam erat volutpat. Donec vitae varius erat, et auctor orci. Aliquam pulvinar nec tellus in porttitor.',
      author: 3,
    },
    {
      id: 104,
      title: 'Test all the things',
      body: 'Mauris ut quam nec enim viverra cursus vitae quis enim. Nunc interdum condimentum sagittis. Quisque maximus, elit sit amet rhoncus bibendum, est ligula rhoncus orci, at gravida mi lacus rutrum diam. Praesent laoreet venenatis faucibus. Donec tempor erat vel elit aliquam rutrum.',
      author: 4
    }
  ]
});

export default BlogPostModel;
