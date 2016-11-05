import angular from 'angular';
import moment from 'moment';

import template from './need.tpl.js';

let componentName = 'need';

class NeedController{

  /* @ngInject */
  constructor(){
    this.moment = moment;
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
