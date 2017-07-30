describe('DuckService', () => {

    beforeEach(angular.mock.module('DuckApp'));

    let duckService, httpBackend;

    beforeEach(inject(($httpBackend, DuckService) => {
        httpBackend = $httpBackend;
        duckService = DuckService;
    }));

    describe('getDucks', () => {

        it('should return array of ducks', () => {
     
            let response = [{ id: 0 }, { id: 1 }];

            httpBackend.whenGET('http://localhost:9696/ducks').respond(response);

            duckService.getDucks()
                .then(ducks => expect(ducks).toEqual(response));
        
            httpBackend.flush();
        });

    });

});