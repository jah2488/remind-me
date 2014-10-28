/*global BackboneTimer, Backbone, JST*/

BackboneTimer.Views = BackboneTimer.Views || {};

(function () {
    'use strict';

    BackboneTimer.Views.Reminder = Backbone.View.extend({

        template: JST['app/scripts/templates/reminder.ejs'],

        tagName: 'li',

        id: '',

        className: '',

        events: {
            'click .name': 'highlightName'
        },

        hightlightName: function(e) {
            console.log('hello world' + e);
        },

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
        }

    });

})();
