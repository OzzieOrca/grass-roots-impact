import angular from 'angular';
import 'angularfire';

import needComponent from './need/need.component.js';
import createComponent from './create/create.component.js';

import template from './needs.tpl.js';

let componentName = 'needs';

class NeedsController{

  /* @ngInject */
  constructor($window, $stateParams, $firebaseArray){
    let ref = $window.firebase.database().ref().child("needs");
    this.category = $stateParams.category;
    console.log(this.category);
    if(this.category){
      ref = ref.orderByChild('category').startAt(this.category).endAt(this.category);
    }
    this.needs = $firebaseArray(ref);
  }
}

export default angular
  .module(componentName, [
    template.name,
    'firebase',
    needComponent.name,
    createComponent.name
  ])
  .component(componentName, {
    controller: NeedsController,
    templateUrl: template.name
  });
