class DuckController {
    constructor($scope) {
        $scope.ducks = [];

        $scope.addDuck = this.addDuck.bind(this);

        this.$scope = $scope;
    }

    addDuck() {
        let count = this.$scope.ducks.length;
        this.$scope.ducks.push({ id: count })
    }
}

export default DuckController;