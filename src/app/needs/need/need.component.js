import angular from 'angular';
import moment from 'moment';

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
    if(typeof this.need.$loaded === 'function'){
      this.need.$loaded().then(() => {
        this.loadUser();
      });
    }else{
      this.loadUser();
    }
  }

  loadUser(){
    this.user = this.$firebaseObject(this.$window.firebase.database().ref('users').child(this.need.userId));
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
