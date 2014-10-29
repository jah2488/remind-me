/*global BackboneTimer, $*/

window.BackboneTimer = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    Reminders: '',
    init: function () {
        'use strict';
        console.log('[Application Has Started]', 'Hello from Backbone!');
        this.Reminders = new BackboneTimer.Collections.Reminders();
        var app        = new BackboneTimer.Views.Appview();
    }
};

$(document).ready(function () {
    'use strict';
    BackboneTimer.init();
});
