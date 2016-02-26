angular.module('lolStats.stats', [])

  .controller('StatsController', ['$scope', 'landingService', function($scope, landingService) {
    // $scope.name = landingService.data.userName;

   //do something with LandingService to display data
   console.log(landingService.data)
  }]);