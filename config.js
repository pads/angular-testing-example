System.config({
  "paths": {
    "*": "*.js",
    "app/*": "src/*.js",
    "github:*": "jspm_packages/github/*.js"
  }
});

System.config({
  "map": {
    "angular": "github:angular/bower-angular@1.3.8",
    "angular-mocks": "github:angular/bower-angular-mocks@1.3.8",
    "angular-route": "github:angular/bower-angular-route@1.3.8",
    "text": "github:systemjs/plugin-text@0.0.2",
    "github:angular/bower-angular-route@1.3.8": {
      "angular": "github:angular/bower-angular@1.3.8"
    }
  }
});

