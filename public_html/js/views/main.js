define([
    'backbone',
    'tmpl/main'
], function(
    Backbone,
    tmpl
){

    var MainView = Backbone.View.extend({

        className: 'main-view',

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

    return new MainView();
});
