'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testApp
 */

angular.module('testApp')
  .controller('MainCtrl', function ($scope) {
   
    var last                = '';
    $scope.menuItem         = 0 ;
    $scope.firstExpanded    = false;
    $scope.secondExpanded   = false;
    $scope.thirdxpanded     = false;
    $scope.fourthExpanded   = false;
    $scope.fifthxpanded     = false;

    $scope.hoverIn = function(link, propName){
    	
      
      if($scope.menuItem === link)
      {
        $scope.menuItem   = 0;
        $scope[propName]  = false;  
        last              = propName;
      }
      else if(link > $scope.menuItem || link < $scope.menuItem)
      {
       $scope.menuItem    = link;
       $scope[propName]   = true;
       $scope[last]       = false;
       last               = propName;   
      }
      else
      {
        $scope.menuItem   = 0;
        $scope[propName]  = false;
   
      } 
    	
	};
});
