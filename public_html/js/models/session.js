define([
    'backbone'
], function(
    Backbone
){

	var LoginUserModel = Backbone.Model.extend({

        server: 'http://0.0.0.0:5282',

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

            var newLogin = options.username;
            var newPass = options.password;

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
                    break;

            }
        },

        register: function (model, uname, pass) {
            console.log('regging');
        },

        login: function (model, uname, pass) {
            var request = new XMLHttpRequest();

            request.open('PUT', this.server + '/api/session');

            request.setRequestHeader('Content-Type', 'application/json');

            request.onreadystatechange = function () {
              if (this.readyState === 4) {
                if (this.status == 200) {
                    this.id = JSON.parse(this.responseText).id;
                }
                else {
                    alert(400);
                }
              }
            };

            var body = {
              'login': uname,
              'password': pass
            };

            request.send(JSON.stringify(body));
        },

        edit: function (model, uname, pass) {
            console.log('editing');
        },

        drop: function (model) {
            console.log('dropping');
        },

        isAuthed: function (model) {
            var request = new XMLHttpRequest();

            request.open('GET', this.server);

            request.onreadystatechange = (function (model) {
                if (this.readyState === 4) {
                    if (this.status != 200) {
                        model.set({id: undefined});
                    }
                }
            }).bind(model);

            request.send();
        }

	});

	return LoginUserModel;
});
