define([
    'jquery',
    'backbone',
    'models/model',
    'collections/collection',
    'handlebars'
], function($,Backbone,model,collection,Handlebars) {
    
    const myView = Backbone.View.extend({
        //el: '#app',
        model : model,
        collection : collection,
        template : Handlebars.compile($("#tmp-handlbars").html()),
        initialize: function() {
            this.render();
        },
        render: function() {

            
             this.$el.html(this.template({
                data : collection.toJSON()
            })); 
            
            console.log(this.collection);
        }
    });

    return new myView;
});