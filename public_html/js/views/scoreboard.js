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
            collection.add();
            //collection.sort();
            this.$el.html(this.template({
                players: collection
            }));
            return this;
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