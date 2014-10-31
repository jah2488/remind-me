/*global BackboneTimer, $*/

window.BackboneTimer = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    Reminders: '',
    appRouter: '',
    init: function () {
        'use strict';
        console.log('[Application Has Started]', 'Hello from Backbone!');
        this.appRouter = new BackboneTimer.Routers.App();
        this.Reminders = new BackboneTimer.Collections.Reminders();
        Backbone.history.start();
    }
};

$(document).ready(function () {
    'use strict';
    BackboneTimer.init();
});
