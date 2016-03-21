define([
    'backbone'
], function(
    Backbone
){

	var LoginUserModel = Backbone.Model.extend({
		defaults: {
			username: '',
			password: '',
			errorNames: {
				username: 'No login',
				password: 'No password'
			}
		},
		
		validate: function(attrs, options) {
			listErrors = [];
			fields = ['username', 'password'];
			fields.forEach(function (name) {
				if (attrs[name] === '') {
					listErrors.push({field: name, message: attrs.errorNames[name]});
				}
			});
			console.log(listErrors);
			return listErrors;

		}
	});

	return LoginUserModel;
});
