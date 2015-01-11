import angular from 'angular';

import currentUserModule from './currentUser';

export default angular.module('loginControllerModule', [currentUserModule.name]).controller('loginController', [
  '$scope', '$location', 'CurrentUser',
  function ($scope, $location, CurrentUser) {
    $scope.login = function login() {
      CurrentUser.authenticate($scope.username, $scope.password).then(function () {
        $location.path('/secret');
      });
    };
  }]
);