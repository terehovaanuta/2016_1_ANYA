define([
    'backbone'
], function(
    Backbone
){

	var LoginUserModel = Backbone.Model.extend({
		defaults: {
			username: '',
			password: ''
		},
		
		validate: function(attrs, options) {
			listErrors = [];
			fields = ['username', 'password'];
			errors = {};
			errors.username = 'No login';
			errors.password = 'No password';
			fields.forEach(function (name) {
				if (attrs[name] === '') {
					listErrors.push({field: name, message: errors[name]});
				}
			});
			console.log(listErrors);
			return listErrors;

		}
	});

	return LoginUserModel;
});
