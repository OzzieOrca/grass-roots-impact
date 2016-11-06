import angular from 'angular';
import moment from 'moment';

import template from './need-details.tpl.js';

let componentName = 'needDetails';

class NeedDetailsController{

  /* @ngInject */
  constructor($window, $firebaseObject, $stateParams){
    this.$window = $window;
    this.$firebaseObject = $firebaseObject;
    this.moment = moment;
    this.needId = $stateParams.id;
    this.justCreated = $stateParams.justCreated;
  }

  $onInit(){
    this.need = this.$firebaseObject(this.$window.firebase.database().ref('needs').child(this.needId));
    //this.need.$loaded().then(() => {
    //  this.user = this.$firebaseObject(this.$window.firebase.database().ref('users').child(this.need.userId));
    //});
  }
}

export default angular
  .module(componentName, [
    template.name
  ])
  .component(componentName, {
    controller: NeedDetailsController,
    templateUrl: template.name
  });
