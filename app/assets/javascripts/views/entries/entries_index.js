RafflerJs.Views.EntriesIndex = Backbone.View.extend({
  el: '#container',
  template: JST['entries/index'],
  events: {
     'keypress #new_entry': 'createEntry'
  },

  initialize: function(){
      this.listenTo(this.collection, 'reset', this.render);
      this.listenTo(this.collection, 'add', this.render);
      this.listenTo(this.collection, 'remove', this.render);
  },



  render: function(){

      $(this.el).html(this.template({entries: this.collection}));
      this.collection.each(this.appendEntry,this);
      return this;
  },

  appendEntry: function(entry){
    var entryView = new RafflerJs.Views.EntryView({model:entry});
    this.$('#entries').append(entryView.render().el);
  },

  createEntry: function(event){
      if ( event.keyCode != 13 || !this.$('#new_entry').val().trim() ) {
          return;
      }else {
          this.collection.create({name: this.$('#new_entry').val()});
      }
  },

  deleteEntry: function(event){
    console.log(event);
  }


});
