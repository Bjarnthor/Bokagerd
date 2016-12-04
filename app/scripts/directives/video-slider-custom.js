'use strict';

/**
 * @ngdoc directive
 * @name testApp.directive:videoSliderCustom
 * @description
 * # videoSliderCustom
 */
angular.module('testApp')
  .directive('videoSliderCustom', function () {
    

    return {
      //template:'<div>Hallo</div>',
      templateUrl: '/views/VideoSlider.html',
      restrict: 'E',
      scope: {
      		myBook: '=myBook'
      		
    	},
      link: function($scope,scope,BookService) {
        
        		scope.currentVideo = BookService.getBookData(scope.myBook);
    			scope.currentText = scope.currentVideo[0].text;

    
    			scope.setCurrentIndex = function(index) {
		
        			scope.currentIndex = index;
				};

				scope.isCurrentSlideIndex = function (index) {
        
        
        			return scope.currentIndex === index;

    			};

   
    			scope.changeVideo = function(index) {
       
        			$scope.currentText = $scope.currentVideo[index].text;
        			$scope.currentIndex = index;
        			$scope.selected = index; 
    			};
      		}
    	};
  });
