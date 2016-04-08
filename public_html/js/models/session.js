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

        login: function (method, model, options) {
            console.log(method);
            console.log(model);
            console.log(options);
        }
	});

	return LoginUserModel;
});
