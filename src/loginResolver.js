import angular from 'angular';

import currentUserModule from './currentUser';

export default angular.module('loginResolverModule', [currentUserModule.name]).service('loginResolver', [
  '$location', '$q', 'CurrentUser',
  function($location, $q, CurrentUser) {
    var deferred = $q.defer();

    CurrentUser.get().then(function () {
      deferred.reject();
      $location.path('/secret');
    }, function () {
      deferred.resolve();
    });

    return deferred.promise;
  }
]);
