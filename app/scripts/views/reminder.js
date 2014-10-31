/*global BackboneTimer, Backbone, JST*/

BackboneTimer.Views = BackboneTimer.Views || {};

(function () {
    'use strict';

    BackboneTimer.Views.Reminder = Backbone.View.extend({

        template: JST['app/scripts/templates/reminder.ejs'],

        tagName: 'tr',

        events: {
            'click .name': 'highlightName'
        },

        hightlightName: function(e) {
            console.log('I clicked on name:', e);
        },

        initialize: function (model) {
            this.model = model;
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            var viewData = _.extend(this.model.toJSON(), {
                formattedEndTime: function () {
                    return moment().startOf('day')
                                   .add(this.endTime.split(':')[0], 'hours')
                                   .add(this.endTime.split(':')[1], 'minutes')
                                   .fromNow();
                }
            });
            this.$el.html(this.template(viewData));
            console.log('render called in reminderView');
            return this;
        }

    });

})();
