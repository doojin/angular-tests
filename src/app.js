import '../node_modules/angular/angular';

import DuckCounter from './duck-counter';

let app = angular.module('ExampleApp', []);

app.directive('duckCounter', DuckCounter);