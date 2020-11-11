// Action Cable provides the framework to deal with WebSockets in Rails.
// You can generate new rooms where WebSocket features live using the `rails generate room` command.
//
//= require action_cable
//= require_self
//= require_tree ./rooms

(function() {
  this.App || (this.App = {});

  App.cable = ActionCable.createConsumer();

}).call(this);
