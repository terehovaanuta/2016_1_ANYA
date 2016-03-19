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
            
            this.model.on("invalid", function(model, errors) {
                errors.forEach(function (error) {
                    name = error['field'];
                    message = error['message'];
                    this.resetError(this.elems[name].parentNode);
                    if (name) {
                        this.showError(this.elems[name].parentNode, message);
                    }
                }, this);
                
            }.bind(this));

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
