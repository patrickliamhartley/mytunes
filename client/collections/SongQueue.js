// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    // this.on('add', function() {
    //   if (this.length < 2) {
    //     this.playFirst();
    //   }
    // }, this);
    this.on('add', this.enqueue, this);
    this.on('dequeue', this.dequeue, this);
    this.on('ended', this.playNext, this);
    // this.on('enqueue', function(e) {
    //   this.add(e);
    //   console.log(this);
    // }, this);

    // this.on('ended', function () {
    //   this.at(0).destroy();
    //   if ( this.length > 0) {
    //     this.playFirst();
    //   }
    // });

    // this.on('dequeue', function (e) {
    //   this.e.remove;
    // });
  },

  dequeue: function(song) {
    if (this.at(0) === song) {
      this.playNext();
    } else {
      this.remove(song);
    }
  },

  enqueue: function (song) {
    if (this.length === 1) {
      this.playFirst();
    }
  },

  playNext: function () {
    this.shift();
    if (this.length >= 1) {
      console.log(this.length);
      
      
      this.playFirst();
    } else {
      console.log("stopping");
      this.trigger('stop');
    
    }
  },

  playFirst: function() {
    this.at(0).play();
  }




});