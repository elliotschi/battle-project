angular.module('lolStats.landing', [])
  
  .controller('LandingController', ['$scope', '$http', '$location',function ($scope, $http, $location) {
    $scope.getStats = function() {
      $location.path('/stats')
    }
  }]);