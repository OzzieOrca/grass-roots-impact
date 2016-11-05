import angular from 'angular';

import template from './home-categories.tpl.js';

let componentName = 'homeCategories';

class HomeCategoriesController{

  /* @ngInject */
  constructor(){

  }
}

export default angular
  .module(componentName, [
    template.name
  ])
  .component(componentName, {
    controller: HomeCategoriesController,
    templateUrl: template.name
  });
