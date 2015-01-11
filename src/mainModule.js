import angular from 'angular';
import 'angular-route';

import router from './router';
import loginController from './loginController';
import currentUserResolverModule from './currentUserResolver';
import loginResolverModule from './loginResolver';

export default angular.module('mainModule', [
  'ngRoute',
  loginController.name,
  currentUserResolverModule.name,
  loginResolverModule.name
]).config([
  '$routeProvider', router
]).run();