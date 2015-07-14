RafflerJs.Views.EntriesIndex = Backbone.View.extend({
  el: '#container',
  template: JST['entries/index'],
  events: {
     'keypress #new_entry': 'createEntry',
     'click #filter':'filter'
  },

  initialize: function(){
      this.listenTo(this.collection, 'reset', this.render);
      this.listenTo(this.collection, 'add', this.appendEntry);
      this.listenTo(this.collection, 'remove', this.render);

      this.render();
  },



  render: function(){

      $(this.el).html(this.template({entries: this.collection}));
      this.collection.each(this.appendEntry,this);
      return this;
  },

  appendEntry: function(entry){
    var entryView = new RafflerJs.Views.EntryView({model:entry});
    var rendered = entryView.render();

    $(rendered.el).appendTo(this.$('#entries')).hide().fadeIn().slideDown();

  },

  createEntry: function(event){
      if ( event.keyCode != 13 || !this.$('#new_entry').val().trim() ) {
          return;
      }else {
          this.collection.create({name: this.$('#new_entry').val()});
          this.$('#new_entry').val('');
          return false;
      }
  },

  filter: function(event){

     if(event.currentTarget.innerHTML == "Hide"){
         event.currentTarget.innerHTML = "Show"
     }else{
         event.currentTarget.innerHTML = "Hide";
     }

     var stars =  $("#star.input-group-addon");
//     $.each(stars, function (index, data) {
//          $(this).html('2');
//     });
//
//
      for(var i = 0; i <  stars.length; i++) {
         var cur = $(".input-group")[i];
         if(stars[i].innerHTML == '★' && cur.style.display =="") {
             cur.style.display = "none";
         }else{
             cur.style.display = "";
         }
     }

  }

});
