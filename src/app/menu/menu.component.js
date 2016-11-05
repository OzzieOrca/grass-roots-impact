import angular from 'angular';
import 'angularfire';

import template from './menu.tpl.js';

let componentName = 'menu';

class MenuController{

  /* @ngInject */
  constructor($firebaseAuth){
    this.auth = $firebaseAuth();
    this.watchAuthState();
  }

  watchAuthState(){
    this.auth.$onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        this.currentUser = firebaseUser;
      } else {
        this.currentUser = null;
      }
    });
  }

  signIn(){
    this.auth.$signInWithPopup("google");
  }

  signOut(){
    this.auth.$signOut();
  }
}

export default angular
  .module(componentName, [
    template.name,
    'firebase'
  ])
  .component(componentName, {
    controller: MenuController,
    templateUrl: template.name
  });
