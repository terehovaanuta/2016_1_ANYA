define([
    'backbone',
    'models/score'
], function(
    Backbone,
    PlayerModel
){

    var PlayerCollection = Backbone.Collection.extend({
    	model: PlayerModel,
    	comparator: 'score'
    });

    return new PlayerCollection();
});