class DuckController {

    constructor($scope, duckService) {
        this.$scope = $scope;
        this.duckService = duckService;

        this.$scope.ducks = [];
    
        this.$scope.init = this.init.bind(this);
        this.$scope.addDuck = this.addDuck.bind(this);
    }

    init() {
        this.duckService.getDucks().then(ducks => this.$scope.ducks = ducks);
    }

    addDuck() {
        let count = this.$scope.ducks.length;
        this.$scope.ducks.push({ id: count })
    }
}

export default DuckController;