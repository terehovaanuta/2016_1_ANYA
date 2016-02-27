define([
    'backbone',
    'tmpl/game'
], function(
    Backbone,
    tmpl
){

    var GameView = Backbone.View.extend({

        template: tmpl,
        initialize: function () {
            // TODO
        },
        render: function () {
            // TODO
            this.$el.html(this.template());
        },
        show: function () {
            // TODO
        },
        hide: function () {
            // TODO
        }

    });

    return new GameView();
});