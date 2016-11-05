/* eslint angular/module-getter:0, angular/document-service:0 */
import 'babel/external-helpers';

import angular from 'angular';
import firebase from 'firebase';

/* @ngInject */
function appConfig($httpProvider) {
  $httpProvider.useApplyAsync(true);

  var config = {
    apiKey: "AIzaSyB832kmwb4YaOdjjPNdkSoS61L-5ykOR_0",
    authDomain: "grass-roots-impact.firebaseapp.com",
    databaseURL: "https://grass-roots-impact.firebaseio.com",
    storageBucket: "grass-roots-impact.appspot.com",
    messagingSenderId: "913023038985"
  };
  firebase.initializeApp(config);
}

export default angular.module('appConfig', [

])
  .config(appConfig);
