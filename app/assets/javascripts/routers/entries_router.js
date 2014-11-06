RafflerJs.Routers.Entries = Backbone.Router.extend({
    routes: {
        '': 'index'

    },
    initialize: function(){
        this.collection = new RafflerJs.Collections.Entries();
        this.collection.fetch({reset: true});
    },
    index: function(){
        var view = new RafflerJs.Views.EntriesIndex(
            {collection: this.collection});
        view.render();
        console.log("I am being called");
//        console.log(view.render().el);
//        $('#container').html(view.render().el);
    }

});
