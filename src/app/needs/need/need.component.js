import angular from 'angular';

import template from './need.tpl.js';

let componentName = 'need';

class NeedController{

  /* @ngInject */
  constructor(){
  }
}

export default angular
  .module(componentName, [
    template.name
  ])
  .component(componentName, {
    controller: NeedController,
    templateUrl: template.name,
    bindings: {
      need: '<'
    }
  });
