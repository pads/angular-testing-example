import angular from 'angular'

export default angular.module('currentUserModule', []).factory('CurrentUser', [
    '$q',
    function CurrentUser($q) {
      var authToken;

      var get = function() {
        var deferred = $q.defer();

        if(authToken) {
          deferred.resolve({ name: 'pads' });
        } else {
          deferred.reject();
        }

        return deferred.promise;
      };

      var authenticate = function() {
        var deferred = $q.defer();

        authToken = 'ABC123';
        deferred.resolve();

        return deferred.promise;
      };

      return {
        get: get,
        authenticate: authenticate
      }
    }
  ]
);