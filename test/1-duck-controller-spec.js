import DuckController from '../src/duck-controller';

describe('DuckController', () => {

    let $scope, duckService, duckController;

    beforeEach(() => {
        $scope = {};
        duckService =  jasmine.createSpyObj('duckService', ['getDucks']);
    });

    describe('constructor', () => {

        it('should retrieve ducks from service', () => {
            let duck = { id: 0 };

            let promise = {
                then: callback => {
                    callback([ duck ]);
                }
            };

            duckService.getDucks.and.returnValue(promise);

            duckController = new DuckController($scope, duckService);

            expect($scope.ducks).toEqual([ duck ]);
        });

    });

    describe('addDuck', () => {

        it('should add duck', () => {
            let promise = { then: () => {} };
            duckService.getDucks.and.returnValue(promise);
            duckController = new DuckController($scope, duckService);

            $scope.ducks = [{ id: 0 }];

            duckController.addDuck();

            expect($scope.ducks.length).toBe(2);
            expect($scope.ducks[0]).toEqual({ id: 0 });
            expect($scope.ducks[1]).toEqual({ id: 1 });

        });

    });

});