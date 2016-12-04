'use strict';

/**
 * @ngdoc overview
 * @name testApp
 * @description
 * # testApp
 *
 * Main module of the application.
 */
angular
  .module('testApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/skopuniskolastarfi', {
        templateUrl: 'views/skopuniskolastarfi.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
       .when('/gagnlegirpunktar', {
        templateUrl: 'views/gagnlegirpunktar.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
       .when('/hverskynsbaekur', {
        templateUrl: 'views/hverskynsbaekur.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
       .when('/honnunogutlit', {
        templateUrl: 'views/honnunogutlit.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
       .when('/efnividurogumgengni', {
        templateUrl: 'views/efnividurogumgengni.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/endalaus', {
        templateUrl: 'views/endalaus.html',
        controller: 'Book1Ctrl',
        controllerAs: 'book1'
      })
      .when('/fanabok', {
        templateUrl: 'views/fanabok.html',
        controller: 'Book1Ctrl',
        controllerAs: 'book1'
      })
      .when('/harmonikka', {
        templateUrl: 'views/harmonikka.html',
        controller: 'Book1Ctrl',
        controllerAs: 'book1'
      })
      .when('/harmonikkuleikhus', {
        templateUrl: 'views/harmonikkuleikhus.html',
        controller: 'Book1Ctrl',
        controllerAs: 'book1'
      })
      .when('/mappa', {
        templateUrl: 'views/mappa.html',
        controller: 'Book1Ctrl',
        controllerAs: 'book1'
      })
      .when('/saumudbok', {
        templateUrl: 'views/saumudbok.html',
        controller: 'Book1Ctrl',
        controllerAs: 'book1'
      })
      .when('/pdf', {
        templateUrl: 'views/pdf.html',
        controller: 'PdfCtrl',
        controllerAs: 'pdf'
      })
      .when('/slodirogheimildir', {
        templateUrl: 'views/slodirogheimildir.html',
        controller: 'Book1Ctrl',
        controllerAs: 'pdf'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
