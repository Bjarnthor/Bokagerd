'use strict';

describe('Controller: Book1controllerCtrl', function () {

  // load the controller's module
  beforeEach(module('testApp'));

  var Book1controllerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Book1controllerCtrl = $controller('Book1controllerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Book1controllerCtrl.awesomeThings.length).toBe(3);
  });
});
