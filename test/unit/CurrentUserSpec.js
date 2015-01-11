import angular from 'angular';
import 'angular-mocks';

import currentUserModule from 'src/currentUser';

describe('Current User', function () {
  beforeEach(angular.mock.module(currentUserModule.name));

  var CurrentUser;
  var scope;

  beforeEach(inject(function ($injector) {
    CurrentUser = $injector.get('CurrentUser');
    scope = $injector.get('$rootScope');
  }));

  describe('GETing the Current User', function () {
    it('should resolve the current user.', function () {
      var currentUser;

      CurrentUser.authenticate();

      CurrentUser.get().then(function (user) {
        currentUser = user;
      });
      scope.$digest();
      expect(currentUser.name).toEqual('pads');
    });
  })
});