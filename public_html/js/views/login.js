define([
    'backbone',
    'tmpl/login',
    'models/session'
], function(
    Backbone,
    tmpl,
    LoginUser
){
    var LoginView = Backbone.View.extend({

        className: 'login-view',

        events: {
            "submit": "validate"
        },

        erratives: ['username', 'password'],

        showError: function (container) {
            container.addClass('form__error_shown');
            container.children('.form__error').addClass('form__error_shown');
            container.children('.form__input').addClass('form__input_error');
        },

        resetErrors: function () {
            this.$el.find('.form__error_shown').removeClass('form__error_shown');
            this.$el.find('.form__input_error').removeClass('form__input_error');
        },

        handleErrors: function(model, error) {
            this.resetErrors();
            for (var field in this.erratives) {
                if (error[this.erratives[field]]) {
                    this.showError(this.$el.find('.form__' + this.erratives[field]));
                }
            }
        },

        validate: function (event) {
            if (event) {
                event.preventDefault();
            }

            this.elems = $('form')[0].elements;

            this.model.save({
                'username': this.elems.username.value,
                'password': this.elems.password.value
            });
        },

        template: tmpl,
        initialize: function () {
            this.model = new LoginUser();
            this.model.on("invalid", this.handleErrors.bind(this));
        },

        render: function () {
            this.$el.html(this.template());
            return this;
        },
        show: function () {
            this.trigger('show');
            this.$el.show();
        },
        hide: function () {
            this.$el.hide();
            this.resetErrors();
        },

    });



    return new LoginView();
});
