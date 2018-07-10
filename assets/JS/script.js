var app = angular.module('myApp', []);
app.controller('carsTable', function ($scope, $http) {
  $http.get('assets/voiture.json').then(function (response) {
    $scope.inData = response.data;
  });
});
