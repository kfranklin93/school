'use strict';

class SettingsController {

  constructor(Auth) {
    this.Auth = Auth;
  }

  changePassword(form) {
    this.submitted = true;

    if (form.$valid) {
      this.Auth.changePassword(this.user.oldPassword, this.user.newPassword)
        .then(() => {
          this.message = 'Password successfully changed.';
        })
        .catch(() => {
          form.myPassword.$setValidity('mongoose', false);
          this.errors.other = 'Incorrect password';
          this.message = '';
        });
    }
  }

    changeName(form) {
    this.submitted = true;

    if (form.$valid) {
      this.Auth.changeName(this.user.oldName, this.user.newName)
        .then(() => {
          this.message = 'Name successfully changed.';
        })
        .catch(() => {
          form.myUserName.$setValidity('mongoose', false);
          this.errors.other = 'Incorrect name line error';
          this.message = '';
        });
    }
  }
}

angular.module('schoolApp')
  .controller('SettingsController', SettingsController);
