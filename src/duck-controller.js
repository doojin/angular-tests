class DuckController {

    constructor($scope, duckService) {
        $scope.ducks = [];
        duckService.getDucks().then(ducks => $scope.ducks = ducks);

        $scope.addDuck = this.addDuck.bind(this);

        this.$scope = $scope;
    }

    addDuck() {
        let count = this.$scope.ducks.length;
        this.$scope.ducks.push({ id: count })
    }
}

export default DuckController;