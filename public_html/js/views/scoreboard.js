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

        className: 'scoreboard-view',

        template: tmpl,
        rendered: false,
        initialize: function () {
            // TODO
        },
        render: function () {
            collection.add();
            //collection.sort();
            this.$el.html(this.template({
                players: collection
            }));
            this.rendered = true;
            return this;
        },
        show: function () {
            if (!this.rendered) {
                this.render();
            }
            this.trigger('show');
            this.$el.children().show();
        },
        hide: function () {
            this.$el.children().hide();
        },

    });

    return new ScoresView();
});
