function createGap(){
    for(var i=0;i<4;i++)
        console.log('');
}
app.directive("baapDirective", function(){
  
     var directiveDefinition = {
         priority:1,
         /*controller:function(scope, elem, attributes,transclude){
             alert("baapDirective Controller of firstApp Module");
         },*/
         /*link: function(){
             alert("link of baapDirective of firstApp module");
         }*/
        compile:function(elem, attributes, transclude){
             return {
                 post: function(scope, elem, attributes, controllers){
                     alert("post of Baap Directive of firstApp Module");
                 }
             }
         }
     }
     
     return directiveDefinition;

    
});
app.directive("firstDirective", function(){
    console.log("directive function");
    return {
        require:'^baapDirective',  //^sign if ur current directive will be the child of the required one.
        //require:'baapDirective', //This works in <div baap-directive first-directive></div>
        compile: function(tempElement, tempAttributes){
            debugger;
            console.log(tempElement);
            console.log(arguments);
            //console.log("this.fun = "+baapDirectiveController);
            tempElement[0].addEventListener("click", function(){
                alert("hello");
            });
            console.log("inside compile");
            //console.log(arguments);
            return {
                pre:function(scope, element, attributes){
                    console.log("pre");
                    console.log(attributes);
                   
                    
                },
                post: function(scope, element, attributes,baapDirectiveController){
                    console.log("post");
                  alert("first Directive of FirstController");
                    console.log(arguments);
                    console.log(baapDirectiveController);
                     // console.log("this.fun = "+baapdirectiveController);
                   
                }
            };
        },
        link:function(){
            console.log("Inside link");
            console.log(arguments);
            
        }
        
    }
});

second.controller('secondAppController', function($scope){
    $scope.hello = "This is the Second App";
    ;
});
var secondDirective = second.directive("baapDirective", function(){
    return {
        compile: function(){
            return {
                pre: function(){
                    
                },
                post: function(){
                    alert("Baap Directive of secondApp");
                    createGap();
                    console.log("Inside post function of baapDirective of secondapp");
                },
                controller: function(scope){
                    scope.color="red"
                    createGap();
                    console.log("Inside baap directive's controller of secondApp");
                    console.log(arguments);
                     
                },
                priority:200
            }
        }
    }
});
second.directive("baapSondirective", function(baapDirectiveDirective){
    debugger;
    return angular.extend({}, baapDirectiveDirective[0],{
        template:'<h1>BaapSon Directive extending from BaapDirective',
        controller: function(scope){
            scope.col="Red"
        }
    });
});
console.log(secondDirective);