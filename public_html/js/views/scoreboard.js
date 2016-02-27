define([
    'backbone',
    'tmpl/scoreboard',
    'collections/scores'
], function(
    Backbone,
    tmpl,
    collection
){

    var ScoresView = Backbone.View.extend({
        tagName: 'div',

        template: tmpl,
        initialize: function () {
            // TODO
        },
        render: function () {
            collection.add([
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
            //collection.sort();
            this.$el.html(this.template({
                players: collection
            }));
            console.log(collection);
        },
        show: function () {
            // TODO
        },
        hide: function () {
            // TODO
        }

    });

    return new ScoresView();
});