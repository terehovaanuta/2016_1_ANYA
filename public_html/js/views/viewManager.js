define([
    'backbone',
    'underscore'
], function(
    Backbone,
    _
){
    var viewManager = {
        views: [],

        addView: function(view) {
            if (this.views.indexOf(view) == -1) {
                $('#page').append(view.$el);
                this.views.push(view);
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
        }

    };

    _.extend(viewManager, Backbone.Events);

    return viewManager;
});
