/*global BackboneTimer, Backbone*/

BackboneTimer.Models = BackboneTimer.Models || {};

(function () {
    'use strict';

    BackboneTimer.Models.Reminder = Backbone.Model.extend({

        url: "https://tiny-pizza-server.herokuapp.com/collections/jams-reminders",

        initialize: function() {
        },

        defaults: {
            description: '',
            endTime: ''
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        },

    });
})();
