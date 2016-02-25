angular.module('lolStats.landing', [])
  
  .controller('LandingController', ['$scope', '$http', '$location',function ($scope, $http, $location) {
    $scope.userName = '';
    
    $scope.sendData = function(userName) {
      return $http({
        method: "POST",
        url : '/',
        data : { userName : userName}
      })
      .then (function (res) {
        console.log(res.data, "res.data");
      })
    };

    $scope.sendName = function() {
      $scope.sendData($scope.userName)
        .then(function(res) {
          $location.path('/stats')
        });
    }

  }]);