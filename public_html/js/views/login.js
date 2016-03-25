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

        tagName: 'div',

        events: {
            "submit": "validate",
            "change .login": "changeLogin",
            "change .password": "changePassword"
        },


        showError: function (container) {
            container.addClass('error');
            var msgElem = container.children('.error');
            console.log(msgElem);
            msgElem.removeClass('error_hidden');
            msgElem.addClass('error_shown');
        },

        resetError: function (container) {
            container.removeClass('error');
            var msgElem = container.children('.error');
            msgElem.removeClass('error_shown');
            msgElem.addClass('error_hidden');
        },

        handleErrors: function(model, error) {
            console.log(error);
            this.resetError(this.$el.find('.form__username'));
            this.resetError(this.$el.find('.form__password'));
            if (error.username) {
                this.showError(this.$el.find('.form__username'));
            }
            if (error.password) {
                this.showError(this.$el.find('.form__password'));
            }
        },

        validate: function (event) {
            if (event) {
                event.preventDefault();
            }

            var nativeForm = $('form')[0]
            this.elems = nativeForm.elements;

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
            // TODO
        },
        hide: function () {
            // TODO
        },

    });



    return new LoginView();
});
