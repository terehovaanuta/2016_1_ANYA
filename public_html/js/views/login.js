define([
    'backbone',
    'tmpl/login'
], function(
    Backbone,
    tmpl
){

    var LoginView = Backbone.View.extend({

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

    return new LoginView();
});