import angular from 'angular';

import currentUserModule from './currentUser';

export default angular.module('currentUserResolverModule', [currentUserModule.name]).service('currentUserResolver', [
  '$location', '$q', 'CurrentUser',
  function($location, $q, CurrentUser) {
    var deferred = $q.defer();

    CurrentUser.get().then(function () {
      deferred.resolve();
    }, function () {
      deferred.reject();
      $location.path('/login');
    });

    return deferred.promise;
  }
]);
