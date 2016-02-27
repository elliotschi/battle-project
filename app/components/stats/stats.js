angular.module('lolStats.stats', [])

  .controller('StatsController', ['$scope', 'landingService', function($scope, landingService) {
    // $scope.name = landingService.data.userName;

   //do something with LandingService to display data
   var stats = landingService.data;
   console.log(stats);
   $scope.stats = stats;
   $scope.userName = stats.config.data.userName || null;
   $scope.champions = stats.data.champions; //this is an array
   $scope.champList = [];
   $scope.champStats = [];

   for(var i = 0; i < $scope.champions.length; i++) {
    $scope.champList.push($scope.champions[i].id);
    $scope.champStats.push($scope.champions[i].stats);
   }


  }]);