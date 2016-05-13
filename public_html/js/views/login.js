define([
    'backbone',
    'tmpl/login',
    'models/session'
], function(
    Backbone,
    tmpl,
    Session
){
    var LoginView = Backbone.View.extend({

        className: 'login-view',

        events: {
            "submit": "validate"
        },

        erratives: ['username', 'password', 'message'],

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
            if ('message' in model) {
                error = {'message': true};
                this.$el.find("#message").html(model.message);
            }
            for (var field in this.erratives) {
                if (error[this.erratives[field]]) {
                    console.log(field);
                    this.showError(this.$('.form__' + this.erratives[field]));
                }
            }
        },

        validate: function (event) {
            event.preventDefault();

            this.elems = this.$('form')[0].elements;
            var data = {
                'username': this.elems.username.value,
                'password': this.elems.password.value
            }
            this.model.save(data);

        },

        clearForm: function () {
            this.$el.find('.form__input').val('');
        },

        template: tmpl,
        initialize: function () {
            this.model = new Session();
            this.listenTo(this.model, 'invalid', this.handleErrors);
            this.listenTo(this.model, 'loggedin', this.loggedIn);
            this.on('show', this.clearForm);
        },

        render: function () {
            this.$el.html(this.template({register: false}));
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

        loggedIn: function () {
            //the code after login
        }

    });

    return new LoginView();
});
