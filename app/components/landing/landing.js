angular.module('lolStats.landing', [])

  .controller('LandingController', ['$scope', '$location', 'landingService' ,function ($scope, $location, landingService) {
    $scope.userName = 'rondomvp';

    $scope.sendUsername = function(){
      landingService.sendData($scope.userName)
        .then(function(res){ 
          landingService.data = res;
        })
        .then(function() { $location.path('/stats')});
    };
      
  }])
  .factory('landingService', function ($http) {
      //service stores shared data
      return {
        sendData : function(userName) {
          return $http({
            method : "POST",
            url : '/',
            data : {userName : userName}
          });
        }
      };

});