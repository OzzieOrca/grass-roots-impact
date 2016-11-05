import angular from 'angular';

import template from './about.tpl.js';

let componentName = 'about';

class AboutController{

  /* @ngInject */
  constructor(){

  }
}

export default angular
  .module(componentName, [
    template.name
  ])
  .component(componentName, {
    controller: AboutController,
    templateUrl: template.name
  });
