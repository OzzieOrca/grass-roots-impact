import angular from 'angular';
import 'angularfire';

import needComponent from './need/need.component.js';

import template from './needs.tpl.js';

let componentName = 'needs';

class NeedsController{

  /* @ngInject */
  constructor($window, $firebaseArray){
    let ref = $window.firebase.database().ref().child("needs");
    this.needs = $firebaseArray(ref);
  }
}

export default angular
  .module(componentName, [
    template.name,
    'firebase',
    needComponent.name
  ])
  .component(componentName, {
    controller: NeedsController,
    templateUrl: template.name
  });
