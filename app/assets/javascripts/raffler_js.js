window.RafflerJs = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new RafflerJs.Routers.Entries();
    Backbone.history.start();
  }
};

$(document).ready(function(){
  RafflerJs.initialize();
});
