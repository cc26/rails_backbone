RafflerJs.Views.EntryView = Backbone.View.extend({
    tagName: 'div',
    template: JST['entries/item'],
    events:{
       'keypress #edited_name': 'updateEntry',
       'click #check_delete':'deleteEntry',
       'dblclick #label':'editEntry'
    },

    initialize: function(){
        this.listenTo(this.model, 'change', this.render);
    },

    render: function(){
        $(this.el).html(this.template({entry:this.model}));

        return this;
    },

    editEntry:function(ele){
        if(this.$("#edited_name")[0].style.display == "none"
            || this.$("#edited_name")[0].style.display == ""){
            this.$("#edited_name").show();
        }else{
            this.$("#edited_name").hide();
        }
    },

    updateEntry:function(event){

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