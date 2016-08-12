// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    this.collection.on('add remove', this.render, this);
    this.render();
    // this.on('dequeue', console.log("dequeue is working") , this);
    // this.on('enqueue', this.render, this);
    // this.on('add', this.render , this);
    // this.on('change', console.log("change is working"), this);
    // this.collection.on('enqueue', this.render, this);
    // console.log(this.$el);
  },

  render: function() {
  
    this.$el.children().detach();
    return this.$el.html('<th>Queue</th').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
    
  }

});

// initialize a view of one songqueentryview for each song in collection
// 