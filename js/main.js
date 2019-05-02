requirejs.config({
  baseUrl: "js",
  paths: {
    jquery: [
      "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min",
      "lib/jquery.min"
    ],
    bootstrap: [
      "https:////maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min",
      "lib/bootstrap.min"
    ],
    handlebars:"lib/handlebars",
    underscore:"lib/underscore",
    backbone:"lib/backbone"
  } 
});


/* require(["views/view","views/add","models/model","collections/collection","router"], function(myView,createView,myModel,myCollection,myRouter) {
  const viewObj = new myView();
  const creatViewObj = new createView();
  const modelObj = new myModel();
  const collectionObj = new myCollection();
  const routerobj = new myRouter();
  Backbone.history.start();
}); */

require(['jquery', 'backbone', 'router'], function ($, Backbone, Router) {
  var router = new Router();
  Backbone.history.start();
});