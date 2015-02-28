// var myFirebaseRef = new Firebase("https://<your-firebase>.firebaseio.com/");
// var myFirebaseRef = new Firebase("https://<your-firebase>.firebaseio.com/");



var app = angular.module("worstCity", ["firebase"]);

app.controller("SampleCtrl", ["$scope", "$firebase",
  function($scope, $firebase) {

  var refTransit = new Firebase("https://publicdata-transit.firebaseio.com/sf-muni");
  var sync = $firebase(refTransit);
  sync.$asObject().$bindTo($scope, "transitData");

  var refParking = new Firebase("https://publicdata-parking.firebaseio.com/");
  var sync = $firebase(refParking);
  // sync.$asObject().$bindTo($scope, "parkingData");
  
  var refWeather = new Firebase("https://publicdata-weather.firebaseio.com/")
  var sync = $firebase(refWeather);
  // sync.$asObject().$bindTo($scope, "weatherData");
  
  var refAirport = new Firebase("https://publicdata-airports.firebaseio.com/");
  var sync = $firebase(refAirport);
  var airportData = sync.$asObject();
  sync.$asObject().$bindTo($scope, "airportData");


  console.log(airportData)

  // function getCities(){
  //   var cities = {};
  //   // airportData.forEach(function(item){
  //   //   console.log(item)
  //   // })
  //   // console.log(airportData)
  //   // for ( var item in airportData){
  //   //   console.log(item)
  //   // }
  // }
  
  // getCities();



}
]);