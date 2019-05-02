define([
    'jquery',
    'backbone',
    'models/model',
    'collections/collection'
], function($,Backbone,model,collection) {
    
    const createView = Backbone.View.extend({
        el: '#app',
        model : model,
        collection : collection,
        initialize: function() {
            this.render();
        },
        render: function() {
           console.log("add view");
        }
    });

    return new createView;
});