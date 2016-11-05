SystemJS.config({
  browserConfig: {
    "paths": {
      "npm:": "/jspm_packages/npm/",
      "github:": "/jspm_packages/github/",
      "app/": "src/app/",
      "common/": "src/common/",
      "assets/": "dist/assets/",
      "lib/": "lib/"
    }
  },
  nodeConfig: {
    "paths": {
      "npm:": "jspm_packages/npm/",
      "github:": "jspm_packages/github/"
    }
  },
  devConfig: {
    "map": {
      "babel-runtime": "npm:babel-runtime@5.8.38",
      "plugin-babel-runtime": "npm:babel-runtime@5.8.38",
      "core-js": "npm:core-js@1.2.7",
      "babel": "npm:babel-core@5.8.38",
      "path": "npm:jspm-nodelibs-path@0.2.1",
      "fs": "npm:jspm-nodelibs-fs@0.2.0",
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.17",
      "process": "npm:jspm-nodelibs-process@0.2.0",
      "angular-mocks": "github:angular/bower-angular-mocks@1.5.8"
    },
    "packages": {
      "github:angular/bower-angular-mocks@1.5.8": {
        "map": {
          "angular": "github:angular/bower-angular@1.5.8"
        }
      }
    }
  },
  transpiler: "plugin-babel"
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "BlackrockDigital/startbootstrap-agency": "github:BlackrockDigital/startbootstrap-agency@3.3.7",
    "angular": "github:angular/bower-angular@1.5.8",
    "angular-messages": "github:angular/bower-angular-messages@1.5.8",
    "angular-ui-router": "github:angular-ui/ui-router@0.3.2",
    "angularfire": "github:firebase/angularfire@2.1.0",
    "bootstrap-sass": "github:twbs/bootstrap-sass@3.3.7",
    "firebase": "github:firebase/firebase-bower@3.5.3",
    "lodash": "npm:lodash@4.16.6",
    "moment": "npm:moment@2.15.2"
  },
  packages: {
    "github:angular/bower-angular-messages@1.5.8": {
      "map": {
        "angular": "github:angular/bower-angular@1.5.8"
      }
    }
  }
});
