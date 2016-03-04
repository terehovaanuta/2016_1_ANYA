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
            // console.log('Validate');
            // var formElements = $('.form').serializeArray();
            var nativeForm = $('form')[0]
            // console.log(formElements);
            this.elems = nativeForm.elements;

            // console.log(elems.username.value);


            this.model.save({
                'username': this.elems.username.value,
                'password': this.elems.password.value
            });
            // this.model.set({'username', elems.username.value});
            // this.model.set({'password', elems.password.value});

            // this.model.validate();
            // this.resetError(this.elems.username.parentNode);
            // if (!this.elems.username.value) {
            //     this.showError(this.elems.username.parentNode, "No username!");
            // }

            // this.resetError(this.elems.password.parentNode)
            // if (!this.elems.password.value) {
            //     this.showError(this.elems.password.parentNode, "No password!");
            // }
        },

        template: tmpl,
        initialize: function () {
            // TODO
            
        },

        render: function () {
            // TODO
            this.$el.html(this.template());
            this.model = new LoginUser();
            var this_ = this;
            this.model.on("invalid", function(model, error) {
                console.log("error");
                if (error.username) {
                    this_.showError(this_.elems.username.parentNode, "No username!");
                }
                if (error.password) {
                    this_.showError(this_.elems.password.parentNode, "No password!");
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