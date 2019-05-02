define([
    'backbone',
    'models/model'
], function(Backbone,model) {
    
    const myCollection = Backbone.Collection.extend({
        model : model,
        url : "crud.php"
    });

    return new myCollection;
});