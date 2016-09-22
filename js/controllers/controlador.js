app.controller('controlador', function ($rootScope, $scope, $http) {

	var seVe = true;
	var noSeVe1 = true;
	var noSeVe2 = true;
	var noSeVe3 = true;
	var noSeVe4 = true;
	var noSeVe5 = true;

	var paises = [
					{name: 'España', city: "Madrid"},
					{name: 'Japón', city: "Japan"},
					{name: 'Estados Unidos', city: "New York"},
					{name: 'Alemania', city: "Berlin"},
					{name: 'Brasil', city: "Rio de Janeiro"}
				];
	var animales = [
					{spanish: 'Perros', english: "dogs"},
					{spanish: 'Gatos', english: "cats"},
					{spanish: 'Pajaros', english: "birds"},
					{spanish: 'Toros', english: "bulls"},
					{spanish: 'Arañas', english: "spiders"},
					{spanish: 'Serpientes', english: "snakes"},
					{spanish: 'Conejos', english: "rabbits"}
				];

	var update = function(itemCountry){
		ciudadSelec = itemCountry;

		$scope.noSeVe1 = false;
		$scope.ciudadSelec = ciudadSelec;

		if(ciudadSelec != ''){
			$scope.noSeVe2 = false;
		}

	}

	var finalUpdate = function(itemAnimal){
		animalSelec = itemAnimal;

		$scope.animalSelec = animalSelec;

		if(ciudadSelec != ''){
			$scope.noSeVe3 = false;
			$scope.noSeVe4 = false;
		}

	}

	var resultadoFinal = function(){

		if(ciudadSelec != '' && animalSelec !=''){
			$scope.noSeVe5 = false;
			$scope.seVe = false;
		}

		var objDay = new Date();
		var currentDay =  objDay.getUTCDate();
		var currentMonth = objDay.getMonth() + 1;
		var currentYear = objDay.getFullYear();
		var currentHour = objDay.getHours();
		var currentMins = objDay.getMinutes();
		var currentSec = objDay.getSeconds();
		var finalCurrentTime = currentHour+':'+currentMins+':'+currentSec;
		var finalCurrentDay = currentDay+'/'+currentMonth+'/'+currentYear;

		$scope.finalCurrentDay = finalCurrentDay;
		$scope.finalCurrentTime = finalCurrentTime;

		var render1 = function (response) {
			var i = Math.round(Math.random()*100);
			var image = response.data.photos.photo[i];

			$rootScope.urlImg = image;
		};

		var render2 = function (response) {
			var i = Math.round(Math.random()*100);
			var urlAnimal = response.data.photos.photo[i];

			$scope.urlAnimal = urlAnimal;
		};
		var render3 = function (response) {
			var iconWeather = response.data.weather[0].icon;
			var tiempo = response.data.weather[0].description;
			var temperatura = response.data.main.temp;
			var humedad = response.data.main.humidity;
			var presion = response.data.main.pressure;

			$scope.tiempo = tiempo;
			$scope.temperatura = temperatura;
			$scope.humedad = humedad;
			$scope.presion = presion;
			$scope.iconWeather = iconWeather;
		};

		var urlFlickr = 'https://api.flickr.com/services/rest/',
			urlWeather = 'http://api.openweathermap.org/data/2.5/weather'
			paramsBackground = {
				api_key     : '348ef2bcd981d15960223904c30a6eb3',
				method      : 'flickr.photos.search',
				text        : 'landscapes of '+ciudadSelec,
				format      : 'json',
				jsoncallback: 'JSON_CALLBACK'
			},paramsAnimals = {
				api_key     : '348ef2bcd981d15960223904c30a6eb3',
				method      : 'flickr.photos.search',
				text        : animalSelec+' in '+ciudadSelec,
				format      : 'json',
				jsoncallback: 'JSON_CALLBACK'
			},paramsWeather ={
				APPID       : '368764370b3d9b4d3e4e7ce8e3397624',
				q           : ciudadSelec,
				mode        : 'json',
				units       : 'metric',
				lang        : 'es',
				callback    : 'JSON_CALLBACK'
			};

		$http.jsonp(urlFlickr, {params: paramsBackground}).then(render1);
		$http.jsonp(urlFlickr, {params: paramsAnimals}).then(render2);
		$http.jsonp(urlWeather, {params: paramsWeather}).then(render3);
	
	}


	$scope.paises = paises;
	$scope.animales = animales;
	$scope.seVe = seVe;
	$scope.noSeVe1 = noSeVe1;
	$scope.noSeVe2 = noSeVe2;
	$scope.noSeVe3 = noSeVe3;
	$scope.noSeVe4 = noSeVe4;
	$scope.noSeVe5 = noSeVe5;
	$scope.update = update;
	$scope.finalUpdate = finalUpdate;
	$scope.resultadoFinal = resultadoFinal;


});