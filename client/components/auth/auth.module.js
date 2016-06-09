'use strict';

angular.module('schoolApp.auth', ['schoolApp.constants', 'schoolApp.util', 'ngCookies', 'ui.router'])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
