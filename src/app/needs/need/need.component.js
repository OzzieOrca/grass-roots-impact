import angular from 'angular';
import moment from 'moment';

import needDetailsComponent from './need-details/need-details.component.js';

import template from './need.tpl.js';

let componentName = 'need';

class NeedController{

  /* @ngInject */
  constructor($window, $firebaseObject){
    this.$window = $window;
    this.$firebaseObject = $firebaseObject;
    this.moment = moment;
  }

  $onInit(){
    this.user = this.$firebaseObject(this.$window.firebase.database().ref('users').child(this.need.userId));
  }
}

export default angular
  .module(componentName, [
    template.name,
    needDetailsComponent.name
  ])
  .component(componentName, {
    controller: NeedController,
    templateUrl: template.name,
    bindings: {
      need: '<'
    }
  });
