describe('duckDirective', () => {

    let $compile, $scope;

    beforeEach(angular.mock.module('ExampleApp'));

    beforeEach(inject((_$compile_, _$rootScope_) => {
        $compile = _$compile_;
        $scope = _$rootScope_;
    }));

    it('should contain duck image', () => {
        let element = $compile(`<duck id="5"></duck>`)($scope);

        $scope.$digest();

        let image = element.find('img');
        expect(image).not.toBeNull();
        expect(image.attr('src')).toEqual('assets/duck.png');
    });

    it('should contain id', () => {
        let element = $compile(`<duck id="5"></duck>`)($scope);

        $scope.$digest();

        let idSpan = element.find('span');
        expect(idSpan).not.toBeNull();
        expect(idSpan.text()).toEqual('#5');
    });
});