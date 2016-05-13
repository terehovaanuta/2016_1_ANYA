define([
    'backbone'
],
function (
    Backbone
){

    var Session = Backbone.Model.extend({

        restResource: 'http://0.0.0.0:8080/backend/session',

        defaults: {
            username: '',
            password: '',
            id: undefined
        },

        validate: function(attrs, options) {
            var fields = ['username', 'password'];
            var errors = {};
            var hadErrors = false;
            fields.forEach(function (name) {
                if (!(attrs[name]) || attrs[name] === '') {
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

            switch (method) {
                case 'create':
                    this.create(model, model.attributes.username, model.attributes.password);
                    break;
                case 'update':
                    model.trigger('invalid', {message: 'You are already logged in!'});
                    break;
                case 'delete':
                    this.drop(model);
                    break;
                default:
                    console.log(method, model, options);
                    break;
            }
        },

        create: function (model, uname, pass) {
            var request = new XMLHttpRequest();

            request.open('PUT', this.restResource);

            request.setRequestHeader('Content-Type', 'application/json');

            request.onreadystatechange = (function (model) {
                if (this.readyState === 4) {
                    switch (this.status) {
                        case 200: {
                            model.set({id: JSON.parse(this.responseText).id});
                            model.trigger('loggedin');
                            break;
                        }
                        case 204: {
                            model.trigger('invalid', {message: 'No such user!'});
                            break;
                        }
                        case 400: {
                            model.trigger('invalid', {message: 'Wrong password!'});
                            break;
                        }
                        default: {
                            model.trigger('invalid', {message: 'Unknown error while logging in'});
                            console.log(this.readyState + ' - ' + this.status + ' returned with "' + this.responseText + '" message');
                            break;
                        }
                    }
                }

              }).bind(request, model);

            var body = {
              'login': uname,
              'password': pass
            };
            request.send(JSON.stringify(body));
        },


        edit: function () {
            console.log('this will contain the code to edit user info');
        },

        drop: function () {
            console.log('this will contain the code to drop the user');
        }
    });

    var Singletone = (function () {
        var instance;

        return function Construct_singletone () {
            if (!instance) {
                instance = new Session();
            }
            return instance;
        }
    }());


    return Singletone;
});
