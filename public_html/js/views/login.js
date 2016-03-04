define([
    'backbone',
    'tmpl/login',
    'models/login_user_model'
], function(
    Backbone,
    tmpl,
    LoginUser
){

    var LoginView = Backbone.View.extend({

        tagName: 'div',

        events: {
            "click .button_submit": "validate",
            "change .login": "changeLogin",
            "change .password": "changePassword"
        },

        
        showError: function (container, errorMessage) {
            container.className = 'error';
            var msgElem = document.createElement('span');
            msgElem.className = "error-message";
            msgElem.innerHTML = errorMessage;
            container.appendChild(msgElem);
        },

        resetError: function (container) {
            container.className = '';
            if (container.lastChild.className == "error-message") {
                container.removeChild(container.lastChild)
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
            // TODO
            
        },
        
        render: function () {
            this.$el.html(this.template());
            this.model = new LoginUser();
            var this_ = this;
            //var request = function (model, score);
            //var binder = request.bind(this)

            this.model.on("invalid", function(model, error) {
            //this.model.on("invalid", binder {
                console.log("error");
                if (error.username) {
                    this_.showError(this_.elems.username.parentNode, "No username!");
                    //this.showError(this.elems.username.parentNode, "No username!");
                }
                if (error.password) {
                    this_.showError(this_.elems.password.parentNode, "No password!");
                    //this.showError(this.elems.password.parentNode, "No password!");
                }
            });
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