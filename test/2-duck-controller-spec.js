describe('DuckController', () => {

    beforeEach(angular.mock.module('ExampleApp'));

    let $controller, $scope, $q;

    beforeEach(inject((_$controller_, _$rootScope_,  _$q_) => {
        $controller = _$controller_;
        $scope = _$rootScope_;
        $q = _$q_;
    }));

    let duckService, controller;

    beforeEach(() => {
        duckService = jasmine.createSpyObj('DuckService', ['getDucks']);
    });

    describe('constructor', () => {

        it('should retrieve ducks from service', () => {
            let duck = { id: 0 };

            let deferred = $q.defer();
            deferred.resolve([ duck ]);
            duckService.getDucks.and.returnValue(deferred.promise);

            controller = $controller('DuckController', { $scope, DuckService: duckService });

            $scope.$digest();

            expect($scope.ducks).toEqual([ duck ]);
        });

    });
    describe('addDuck', () => {

        it('should add duck', () => {
            let deferred = $q.defer();
            deferred.resolve([ ]);
            duckService.getDucks.and.returnValue(deferred.promise);

            controller = $controller('DuckController', { $scope, DuckService: duckService });

            $scope.ducks = [{ id: 0 }];
            controller.addDuck();

            expect($scope.ducks.length).toBe(2);
            expect($scope.ducks[0]).toEqual({ id: 0 });
            expect($scope.ducks[1]).toEqual({ id: 1 });
        });

    });



});