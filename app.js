var app = angular.module('myapp',[]);

app.controller("TodolistController", function($scope){
 var todoList = this;
 todoList.text = "Todo App";
todoList.todos = [
    {

     text: "Learn Angular",
        done: true

    },{
        text: "Learn CSS",
        done:false
    }
];
 todoList.remaining = function(){
  console.log("function 'remaining' has been called");
  var count = 0;

  
 angular.forEach(todoList.todos, function(item){
     // debugger;
    
     if(item.done)
         count++;
      
  });
     
  return todoList.todos.length-count;
 }
 
 todoList.add = function(){
   todoList.todos.push({text:todoList.newTask, done:false});
 }
 
});


app.controller('firstChildController', function($scope){
    var parent = $scope.$parent;
    var scope = $scope;
    $scope.add = function(){
        debugger;
   
    parent.todoController.add();
    }

});