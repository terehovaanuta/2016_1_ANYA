define([
    'backbone'
], function(
    Backbone
){

	var LoginUserModel = Backbone.Model.extend({

        server: '0.0.0.0:5282',

        defaults: {
			username: '',
			password: ''
		},

		validate: function(attrs, options) {
			var fields = ['username', 'password'];
			var errors = {};
            var hadErrors = false;
			fields.forEach(function (name) {
				if (attrs[name] === '') {
					errors[name] = true;
                    hadErrors = true;
				}
                else {
                    errors[name] = false;
                }
			});
            if (hadErrors)
    			return errors;

		},

        sync: function (method, model, options) {
            console.log(model, options);
            var newLogin = options.get('username');
            var newPass = options.get('password');

            switch (method) {
                case 'create':
                    this.register(model, newLogin, newPass);
                    break;
                case 'read':
                    this.login(model, newLogin, newPass);
                    break;
                case 'update':
                    this.edit(model, newLogin, newPass);
                    break;
                case 'delete':
                    this.drop(model);
                    break;
                default:

            }
        },

        register: function (model, uname, pass) {

        },

        login: function (model, uname, pass) {

        },

        edit: function (model, uname, pass) {

        },

        drop: function (model) {

        },

	});

	return LoginUserModel;
});
