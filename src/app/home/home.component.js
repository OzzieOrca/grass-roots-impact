import angular from 'angular';

import homeCategoriesComponent from './categories/home-categories.component.js';
import createComponent from '../needs/create/create.component.js';

import template from './home.tpl.js';

let componentName = 'home';

class HomeController{

  /* @ngInject */
  constructor(){

  }
}

export default angular
  .module(componentName, [
    template.name,
    homeCategoriesComponent.name,
    createComponent.name
  ])
  .component(componentName, {
    controller: HomeController,
    templateUrl: template.name
  });
