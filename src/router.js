import indexTemplate from './templates/index.html!text';
import secretTemplate from './templates/secret.html!text';
import loginTemplate from './templates/login.html!text';

export default function router($routeProvider) {
  $routeProvider.when('/', {
    template: indexTemplate
  }).when('/secret', {
    template: secretTemplate,
    resolve: { currentUser: 'currentUserResolver' }
  }).when('/login', {
    template: loginTemplate,
    controller: 'loginController',
    resolve: { redirectIfAuthenticated: 'loginResolver' }
  });
};