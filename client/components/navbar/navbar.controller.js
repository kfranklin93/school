'use strict';

class NavbarController {
  //end-non-standard

  //start-non-standard
  constructor(Auth) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.isTeacher = Auth.isTeacher;
    this.getCurrentUser = Auth.getCurrentUser;
  }

}

angular.module('schoolApp')
  .controller('NavbarController', NavbarController);
