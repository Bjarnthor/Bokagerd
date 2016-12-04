'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:Book1controllerCtrl
 * @description
 * # Book1controllerCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('Book1Ctrl', function ($scope, BookService) {
   
   

    $scope.currentVideo = null;
	$scope.currentIndex = 0;
	$scope.selected = 0;
    $scope.nameOfBook = null;
    $scope.currentVideo = null;
    $scope.currentVideo = null;
    $scope.currentText = null;

    
    $scope.setCurrentIndex = function(index) {
		
        $scope.currentIndex = index;

	};

	$scope.isCurrentSlideIndex = function (index) {
        
        
        return $scope.currentIndex === index;
        
    };

   
    $scope.changeVideo = function(index) {
       
        $scope.stopVideo();
        $scope.currentText = $scope.currentVideo[index].text;
        $scope.currentIndex = index;
        $scope.selected = index; 
    };

    $scope.init = function(bookName){
        
        $scope.nameOfBook = bookName;
        $scope.currentVideo = BookService.getBookData($scope.nameOfBook);
        $scope.currentText = $scope.currentVideo[0].text;
        
    };

    $scope.stopVideo = function() {
        
        var el = null;

        if($scope.currentIndex === 0){

            el = 'Kynning';
        }
        else{

            el = ($scope.currentIndex);
        }

        var video = angular.element(document).find('#'+el);
        video[0].pause();
        video[0].currentTime = 0;
    };

/*  Slide change fuctionality, might need it later

    $scope.maxIndex = $scope.videos.length-1;
    $scope.minIndex = 0;

    $scope.nextSlide = function() {
        
        if($scope.currentIndex === $scope.maxIndex)
        {
            $scope.currentIndex = $scope.minIndex;
        }
        else
        {
            $scope.currentIndex += 1;   
        }
        
    };
    $scope.previousSlide = function() {
        
        if($scope.currentIndex === $scope.minIndex)
        {
            $scope.currentIndex = $scope.maxIndex;
        }
        else
        {
            $scope.currentIndex -= 1;   
        }
    };  
    */

});
