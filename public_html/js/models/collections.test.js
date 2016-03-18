/*define(function (require) {

    QUnit.module("models/score");
    
    QUnit.test('Scores collection is ordered!', function () {
        
        var Scores = require('../collections/scores');
        
        function sorted (collection) {
            for (var i = collection.length - 1; i > 0; i--) {
                if(collection[i].get("score") > collection[i - 1].get("score"))
                    return false;
            }
            return true;
        }

        QUnit.ok(sorted(Scores.models));

    });
});*/


define(function(require) {
    QUnit.module('models/scores');

    QUnit.test('Scores collection is ordered!', function () {
        var scores = require('../collections/scores').toJSON(),
            scoresSorted = _.sortBy(scores, function (model) {
                return -model.score;
            });

        console.info('scores', scores);
        console.info('scoresSorted', scoresSorted);
        QUnit.ok(_.isEqual(scores, scoresSorted), 'Returned array is sorted');
    });
});