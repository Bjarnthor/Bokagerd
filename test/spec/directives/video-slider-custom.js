'use strict';

describe('Directive: videoSliderCustom', function () {

  // load the directive's module
  beforeEach(module('testApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<video-slider-custom></video-slider-custom>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the videoSliderCustom directive');
  }));
});