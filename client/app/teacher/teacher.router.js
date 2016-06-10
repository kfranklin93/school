'use strict';

angular.module('schoolApp.teacher')
  .config(function($stateProvider) {
    $stateProvider.state('teacher', {
      url: '/teacher',
      templateUrl: 'app/teacher/teacher.html',
      controller: 'TeacherController',
      controllerAs: 'teacher',
      authenticate: 'teacher'
    });
  });
