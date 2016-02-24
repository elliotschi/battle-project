angular.module('lolStats.landing', [])
  
  .controller('LandingController', ['$scope', '$http', '$location',function ($scope, $http, $location) {
    $scope.userName = '';
    
    $scope.sendData = function(userName) {
      $http({
        method: "POST",
        url : '/',
        data : { userName : userName}
      }).then (function (res) {
        console.log("success");
        console.log(res);
      }).then($location.path('/stats'))
    }

    $scope.sendName = function() {
      sendData($scope.userName);
    }
  }]);