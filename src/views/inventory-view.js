(function () {

  window.InventoryView = Backbone.View.extend({
    events: {
      'click .add-shirts': 'addShirts'
    },

    addShirts: function (e) {
      var type = $(e.currentTarget).data('type');
      console.log('Adding one of every', type, 'shirt for', this.options.shirts);
      // TODO: Write a for loop to iterate through window.shirts and
      // add +1 to each of that shirt's `type` inventory.
      // For example, if type === 'small', then add +1 to every small stock
      // in each shirt in window.shirts. Use .set(???) for this.

      var shirts = this.options.shirts;

      for (var i = 0; i < shirts.length; i += 1) {
        // console.log('length of shirts array', shirts.length);
        // console.log('what is type', type);
        // console.log('shirts', shirts);
        // console.log('shirts[i]', shirts[i]);
        // console.log("shirts[i].get(type)", shirts[i].get(type));
        quantity = shirts[i].get(type);
        shirts[i].set(type, quantity += 1);
        // console.log("shirts[i].get(type)", shirts[i].get(type));
      }
    }
  });

})();
