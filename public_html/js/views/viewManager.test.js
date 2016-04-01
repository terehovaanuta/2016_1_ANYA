define(function (require) {

    QUnit.module("views/viewManager");

    QUnit.test('viewManager does not add an already added view', function () {
        var mainView = require('views/main'),
            viewManager = require('views/viewManager');

        viewManager.addView(mainView);
        viewManager.addView(mainView);

        QUnit.ok(viewManager.views.length == 1, 'Success!');
    });

    QUnit.test('viewManager adds views', function (assert) {
        var mainView = require('views/main'),
            loginView = require('views/login'),
            gameView = require('views/game'),
            scoreboardView = require('views/scoreboard'),
            viewManager = require('views/viewManager');

        viewManager.addView(mainView);
        assert.notOk(viewManager.views.length != 1 || viewManager.views[viewManager.views.length - 1] != mainView, 'First addition ok');

        viewManager.addView(loginView);
        assert.notOk(viewManager.views.length != 2 || viewManager.views[viewManager.views.length - 1] != loginView, 'Second addition ok');

        viewManager.addView(gameView);
        assert.notOk(viewManager.views.length != 3 || viewManager.views[viewManager.views.length - 1] != gameView, 'Third addition ok');

        viewManager.addView(scoreboardView);
        assert.notOk(viewManager.views.length != 4 || viewManager.views[viewManager.views.length - 1] != scoreboardView, 'Fourth addition ok');

    });
    
});
