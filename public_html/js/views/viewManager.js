define([
    'backbone',
    'underscore'
], function(
    Backbone,
    _
){
    var viewManager = {
        views: [],
        listener: function (thisView) {
            for (var viewIndex in this.views) {
                if (this.views[viewIndex] !== thisView) {
                    this.views[viewIndex].hide();
                }
            }
        },
        addView: function(view) {
            if (this.views.indexOf(view) == -1) {
                $('#page').append(view.$el);
                this.views.push(view.render());
                this.listenTo(view, 'show', this.listener.bind(this, view));
            }
        }

    };

    _.extend(viewManager, Backbone.Events);

    return viewManager;
});
