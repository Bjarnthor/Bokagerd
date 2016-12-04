'use strict';

angular.module('testApp')
  .controller('PdfCtrl', function ($scope, PdfService){



  	 $scope.getDocument= function(documentName){

        var pdf = PdfService.getPdf(documentName);
        window.open(pdf, '_blank', '');
    };

  });