define([
    'backbone',
    'tmpl/main'
], function(
    Backbone,
    tmpl
){

    var MainView = Backbone.View.extend({

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

    return new MainView();
});