'use strict';

angular.module('schoolApp', [
				'schoolApp.auth', 
				'schoolApp.admin', 
        'schoolApp.teacher',
				'schoolApp.constants',
    			'ngCookies', 
    			'ngResource', 
    			'ngSanitize', 
    			'btford.socket-io', 
    			'ui.router', 
    			'ui.bootstrap',
    			'ngAnimate',
    			'validation.match'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });
