import '../node_modules/angular/angular';
import DuckController from './duck-controller';
import Duck from './duck-directive';

let app = angular.module('ExampleApp', []);

app.controller('DuckController', DuckController);
app.directive('duck', Duck);