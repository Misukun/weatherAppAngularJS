var app = angular.module('app-cities', ['ui.router', 'ngAnimate']);

app.config(function($stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.otherwise('/home');

	$stateProvider
		//vista para la home
		.state('home', {
			url: '/home',
			templateUrl: 'views/welcome.html',
			controller: 'controlador'
		})

		//vista para comenzar
		.state('start', {
			url: '/comenzar',
			templateUrl: 'views/start.html',
			controller: 'controlador'
		})

		//vista para selecion de ciudad
		.state('select', {
			url: '/tiempo',
			templateUrl: 'views/layout-select-city.html',
			controller: 'controlador'
		});

});
