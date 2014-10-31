/*global BackboneTimer, Backbone*/

BackboneTimer.Routers = BackboneTimer.Routers || {};

(function () {
    'use strict';

    BackboneTimer.Routers.App = Backbone.Router.extend({
        routes: {
            "about" : "about",
            "empty" : "empty",
            '/'     : "home",
            ''      : "home",

        },

        home: function () {
            var app  = new BackboneTimer.Views.Appview();
        },

        about: function () {
            console.log('hey i\'m about!');
        },

        empty: function () {
            $('#timer-app').html('');
        }

    });

})();
