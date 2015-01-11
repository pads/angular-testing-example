import angular from 'angular'
import mainModule from './mainModule'

angular.element(document).ready(function bootstrapApp() {
  angular.bootstrap(document.querySelector('[data-app]'), [mainModule.name], {
    strictDi: true
  });
});