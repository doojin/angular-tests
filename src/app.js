import '../node_modules/angular/angular';
import DuckController from './duck-controller';
import DuckService from './duck-service';
import Duck from './duck-directive';

let app = angular.module('DuckApp', []);

app.controller('DuckController', ['$scope', 'DuckService', DuckController]);
app.service('DuckService', ['$http', '$q', DuckService]);
app.directive('duck', Duck);