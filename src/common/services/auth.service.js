import angular from 'angular';

let serviceName = 'auth';

class Auth {

  /*@ngInject*/
  constructor($window, $firebaseAuth, $firebaseObject){
    this.$window = $window;
    this.auth = $firebaseAuth();
    this.$firebaseObject = $firebaseObject;
    this.watchAuthState();
  }

  watchAuthState(){
    this.auth.$onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        this.currentUser = firebaseUser;
        console.log(this.currentUser);
        let userRef = this.$firebaseObject(this.$window.firebase.database().ref().child('users').child(this.currentUser.uid));
        userRef.displayName = this.currentUser.displayName;
        userRef.email = this.currentUser.email;
        userRef.photoURL = this.currentUser.photoURL;
        userRef.$save();
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
  .module(serviceName, [
  ])
  .service(serviceName, Auth);
