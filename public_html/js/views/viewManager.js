define([
    'backbone',
    'underscore'
], function(
    Backbone,
    _
){
    var viewManager = {
        views: [],
        //
        // initialize: function () {
        //     console.log(this.views);
        //     for (var view in this.views) {
        //         view.render();
        //     }

            // this.listenTo(mainView, 'show', this.show.bind(mainView));
            // this.listenTo(loginView, 'show', this.show.bind(loginView));
            // this.listenTo(gameView, 'show', this.show.bind(gameView));
            // this.listenTo(scoreboardView, 'show', this.show.bind(scoreboardView));
        // },

        html: function () {
            var retVal = '';
            for (var viewIndex in this.views) {
                retVal += this.views[viewIndex].$el[0].outerHTML;
                //console.log(this.views[viewIndex].$el);
            }
            return retVal;
        },

        // show: function (view) {
        //     mainView.hide();
        //     loginView.hide();
        //     gameView.hide();
        //     scoreboardView.hide();
        //     view.show();
        // },

        addView: function(view) {
            if (this.views.indexOf(view) == -1) {
                this.views.push(view);
                console.log(this.views);
                this.listenTo(view, 'show', function (thisView, object) {
                    return function () {
                        for (var viewIndex in object.views) {
                            if (object.views[viewIndex] !== thisView) {
                                object.views[viewIndex].hide();
                            }
                        }
                    }
                }(view, this))
            }
            // this.initialize();
        }

    };

    _.extend(viewManager, Backbone.Events);

    return viewManager;
});
