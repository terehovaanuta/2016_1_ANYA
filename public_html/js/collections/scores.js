define([
    'backbone',
    'models/score'
], function(
    Backbone,
    PlayerModel
){

    var PlayerCollection = Backbone.Collection.extend({
    	model: PlayerModel,
    	comparator: function (player) {
            return - player.get('score');
        }
    });

    return new PlayerCollection([
                {name: 'John', score: 2},
                {name: 'Mike', score: 1},
                {name: 'Vasily', score: 5},
                {name: 'Urikara', score: 30},
                {name: 'Orochimaru', score: 40},
                {name: 'Ilya', score: 30},
                {name: 'Superman', score: 20},
                {name: 'Dovahkiin', score: 100},
                {name: 'Uriel', score: 10},
                {name: 'Idiot', score: 0}
            ]);
});