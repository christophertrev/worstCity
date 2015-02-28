// var myFirebaseRef = new Firebase("https://<your-firebase>.firebaseio.com/");
// var myFirebaseRef = new Firebase("https://<your-firebase>.firebaseio.com/");



var app = angular.module("worstCity", ["firebase"]);

app.controller("SampleCtrl", ["$scope", "$firebase",
  function($scope, $firebase) {
  var ref = new Firebase("https://publicdata-transit.firebaseio.com/sf-muni");
  // var ref = new Firebase("  https://publicdata-parking.firebaseio.com/");
  // var ref = new Firebase("https://vivid-fire-4083.firebaseio.com/");
  // var 

  // create an AngularFire reference to the data
  // console.log(ref)
  var sync = $firebase(ref);
  // var sync = $firebase(ref.child('routes').child('N'));
  // console.log(sync.$asObject())
  sync.$asObject().$bindTo($scope, "data");
  // download the data into a local object
  // $scope.transitData = sync.$asObject();

  // $scope.data.child('routes');
  // console.log($scope.data)
  // console.log(Object.keys($scope.data))

}
]);