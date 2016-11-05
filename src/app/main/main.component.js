import 'babel/external-helpers';
import angular from 'angular';
import 'angular-ui-router';

import menuComponent from '../menu/menu.component.js';
import homeComponent from '../home/home.component.js';
import needsComponent from '../needs/needs.component.js';
import appConfig from 'common/app.config.js';

import template from './main.tpl.js';

let componentName = 'main';

class MainController{

  /* @ngInject */
  constructor(){

  }
}

/* @ngInject */
function routingConfig($stateProvider, $locationProvider, $urlRouterProvider){
  $stateProvider
    .state('home', {
      url: "/home",
      template: '<home></home>'
    })
    .state('home-categories', {
      url: "/categories",
      template: '<home-categories></home-categories>'
    })
    .state('create-need', {
      url: "/needs/create",
      template: '<create-need></create-need>'
    })
    .state('needs', {
      url: "/needs/:category",
      template: '<needs></needs>'
    });

  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/home');
}

export default angular
  .module(componentName, [
    template.name,
    appConfig.name,
    'ui.router',
    menuComponent.name,
    homeComponent.name,
    needsComponent.name
  ])
  .config(routingConfig)
  .component(componentName, {
    controller: MainController,
    templateUrl: template.name
  });