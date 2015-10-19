var myApp=angular.module('myApp', []);
myApp.controller('userController', function($scope) {
 
  $scope.users = [
  			{
  				name: "Ivanov Ivan",
  				email:"qwer@gmail.com",
  				phone:"6747576"
  			},
  			{
  				name: "Petrov Ivan",
  				email:"qwer@gmail.com",
  				phone:"7646754674"
  			},
  			{
  				name: "Petrov Igor",
  				email:"sadqwer@gmail.com",
  				phone:"76543543567"
  			},
  			{
  				name: "Gorbachev Michail",
  				email:"jhgjh@gmail.com",
  				phone:"7658754"
  			},
  			{
  				name: "John Doe",
  				email:"john-doe@gmail.com",
  				phone:"8767453"
  			}

        
    ];
});