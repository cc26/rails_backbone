RafflerJs.Views.EntryView = Backbone.View.extend({
    tagName: 'li',
    template: JST['entries/item'],
    events:{
       'click #delete_button': 'deleteEntry',
       'click #edit_button': 'editEntry',
       'keypress #edited_name': 'updateEntry'
    },

    initialize: function(){
        this.listenTo(this.model, 'change', this.render);
    },

    render: function(){
        $(this.el).html(this.template({entry:this.model}));

        return this;
    },

    editEntry:function(ele){
        this.$("#edited_name").show();
    },

    updateEntry:function(event){
        console.log("am i here?");
        if ( event.keyCode != 13 || !this.$('#edited_name').val().trim() ) {
            return;
        }else {
            this.model.set({'name': this.$("#edited_name").val()});
            this.model.save();
            this.$("#edited_name").hide();
        }

    },

    deleteEntry:function(){
        console.log(this.model.get('name'));
        var router = new RafflerJs.Routers.Entries();
        this.model.destroy();
    }
});