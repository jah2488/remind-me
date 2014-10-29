/*global BackboneTimer, Backbone*/

BackboneTimer.Collections = BackboneTimer.Collections || {};

(function () {
    'use strict';

    BackboneTimer.Collections.Reminders = Backbone.Collection.extend({

        model: BackboneTimer.Models.Reminder,

        url: "https://tiny-pizza-server.herokuapp.com/collections/jams-reminders"

    });

})();
