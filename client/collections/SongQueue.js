// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('change', function() {
      console.log('yo');
      if (this.models.length === 1) {
        console.log('hi');
        this.playFirst;
      }
    }, this);
  
    this.on('change', this.playFirst);
  },

  playFirst: function() {

  
    this.at(0).play();
    
      //song.play()
   

  }

});