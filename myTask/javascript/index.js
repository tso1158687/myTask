/*var app = angular.module("myApp", ["ngRoute"]);
app.config.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl : 'myTask.html'
    })
    .when("/myTaskExecute", {
        templateUrl : 'myTaskExecute.html'
    })
    .when("/myTaskFinished", {
        templateUrl : 'myTaskFinished.html'
    .otherwise({redirectTo:'/'});    
    });
});*/

// function changHeaderColor(){
//     console.log('?')
//     document.getElementById("myTask").add
//     console.log(a)
// }
$(document).ready(function(){
    $('#myTask').click(function(){
      $('#myTask').removeClass('myTask')
      $('#myTask').addClass('myTask2')
    })
})