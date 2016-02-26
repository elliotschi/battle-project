angular.module('lolStats.stats', [])

  .controller('StatsController', ['$scope', 'landingService', function($scope, landingService) {
    // $scope.name = landingService.data.userName;

   //do something with LandingService to display data
   var stats = landingService.data;
   console.log(stats);
   $scope.stats = stats;
   $scope.userName = stats.config.data.userName;
  }]);