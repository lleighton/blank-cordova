document.addEventListener('deviceready', onDeviceReady, false);
function onDeviceReady() {
	alert('The Device Is Ready');
}

var myApp = angular.module('myApp', []);
myApp.controller('appController', ['$scope', function($scope) {
	$scope.greeting = 'Hola!';
}]);