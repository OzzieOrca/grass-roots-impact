import angular from 'angular';
import 'angularfire';

import template from './create.tpl.js';

let componentName = 'createNeed';

class CreateNeedsController{

  /* @ngInject */
  constructor($window, $firebaseArray, $state){
    this.$window = $window;
    this.$state = $state;
    this.$firebaseArray = $firebaseArray;
  }

  save(){
    let ref = this.$window.firebase.database().ref().child("needs");
    let needs = this.$firebaseArray(ref);
    needs.$add({
        category: this.category,
        description: this.description,
        location: this.location,
        name: this.name,
        userId: 0,
        created: firebase.database.ServerValue.TIMESTAMP
      })
      .then(() => {
        console.log('saved');
        this.$state.go('needs');
      });
  }
}

export default angular
  .module(componentName, [
    template.name,
    'firebase'
  ])
  .component(componentName, {
    controller: CreateNeedsController,
    templateUrl: template.name
  });
