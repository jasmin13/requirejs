define([
    'backbone'
], function(Backbone) {
    
    const myModel = Backbone.Model.extend({
        defaults:{
            name:'',
            email:'',
            address:'',
            phone:'',
            id:''
        }
    });

    return new myModel;
});