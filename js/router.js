define([
    'backbone',
    'models/model',
    'collections/collection',
    'views/view',
    'views/add'
], function(Backbone,model,collection,view,add) {

    const myRouter = Backbone.Router.extend({
        routes : {
            '':'index',
            'create' : 'create',
            'edit/:id': 'edit',
            'delete/:id' : 'delete'
        },

        initialize: function(){
           // Backbone.history.start();
        },
       
        index :function(){
            view.render();
           
        },

        create : function(){
            add.render();
        },

        edit : function (id) { 
            console.log("edit");
        },

        delete : function (id) {
            console.log("delete");
        }
        
    });

    return myRouter;
    
});    