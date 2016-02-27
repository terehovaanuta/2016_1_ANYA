define([
    'backbone',
    'views/main',
    'views/login',
    'views/game',
    'views/scoreboard',
], function(
    Backbone,
    mainView,
    loginView,
    gameView,
    scoreboardView
){

    var Router = Backbone.Router.extend({
        routes: {
            'scoreboard': 'scoreboardAction',
            'game': 'gameAction',
            'login': 'loginAction',
            '*default': 'defaultActions'
        },
        defaultActions: function () {
            console.log('the #main route');
            mainView.render();
            $('#page').html(mainView.$el.html());
        },
        scoreboardAction: function () {
            console.log('the #scoreboard route');
            scoreboardView.render();
            $('#page').html(scoreboardView.$el.html());
        },
        gameAction: function () {
            console.log('the #game route');
            gameView.render();
            $('#page').html(gameView.$el.html());
        },
        loginAction: function () {
            console.log('the #login route');
            loginView.render();
            $('#page').html(loginView.$el.html());
        }
    });

    return new Router();
});