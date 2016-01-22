var libModule = angular.module('libModule',[]);
libModule.directive('baapDirective', function(){
 var directiveDefinition = {
     controller:function(){
         alert("baap directive controller of libModule");
     },
     compile:function(){
         var linker = {
             post: function(){
                 alert("post of baapdirective of libmodule");
             }
         };
         return linker;
     },
     priority:2
 };
    return directiveDefinition;

});