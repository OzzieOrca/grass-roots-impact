import angular from 'angular';
import 'angularfire';

import authService from 'common/services/auth.service.js';

import template from './menu.tpl.js';

let componentName = 'menu';

class MenuController{

  /* @ngInject */
  constructor(auth){
    this.auth = auth;
  }
}

export default angular
  .module(componentName, [
    template.name,
    'firebase',
    authService.name
  ])
  .component(componentName, {
    controller: MenuController,
    templateUrl: template.name
  });
