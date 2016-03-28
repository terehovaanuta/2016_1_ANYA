define([
    'backbone',
    'tmpl/game'
], function(
    Backbone,
    tmpl
){

    var GameView = Backbone.View.extend({

        className: 'game-view',

        template: tmpl,

        rendered: false,

        initialize: function () {
            // TODO
        },
        render: function () {
            this.$el.html(this.template());
            this.rendered = true;
            return this;
        },
        show: function () {
            if (!this.rendered) {
                this.render();
            }
            this.trigger('show');
            this.$el.children().show();
        },
        hide: function () {
            this.$el.children().hide();
        },

    });

    return new GameView();
});
