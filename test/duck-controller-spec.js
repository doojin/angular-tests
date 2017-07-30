describe('DuckController', () => {

    beforeEach(angular.mock.module('ExampleApp'));

    let controller, $scope, duckService, $q;

    beforeEach(inject(($controller, $rootScope,  _$q_) => {
        $scope = $rootScope;
        duckService = jasmine.createSpyObj('DuckService', ['getDucks']);
        controller = $controller('DuckController', { $scope: $scope, DuckService: duckService });

        $q = _$q_;
    }));

    describe('init', () => {

        it('should retrieve ducks from service', () => {
            let ducks = [{ id: 0 }];
            mockDuckServiceResponse(ducks);

            controller.init();
            $scope.$digest();

            expect($scope.ducks).toEqual(ducks);
        });

    });

    describe('addDuck', () => {

        it('should add duck to ducks array', () => {
            $scope.ducks = [{ id: 0 }, { id: 1 }];
            
            controller.addDuck();

            expect($scope.ducks.length).toBe(3);
            expect($scope.ducks[0]).toEqual({ id: 0 });
            expect($scope.ducks[1]).toEqual({ id: 1 });
            expect($scope.ducks[2]).toEqual({ id: 2 });
        });

    });

    function mockDuckServiceResponse(response) {
        let deferred = $q.defer();
        deferred.resolve(response);
        duckService.getDucks.and.returnValue(deferred.promise);
    }

});