/*globals module */

module.exports = {
  name: 'common',

  treeForPublic: function(tree) {
    // Return tree as is. This prevents ember-cli from moving the tree to /common.
    return tree;
  },

  // We always want this to be true so that addon files are watched.
  isDevelopingAddon: function() {
    return true;
  }
};
