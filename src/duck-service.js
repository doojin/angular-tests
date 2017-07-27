class DuckService {

    constructor($q) {
        this.$q = $q;
    }

    getDucks() {
        let ducks = [
            { id: 0 },
            { id: 1 }
        ];

        return this.$q(resolve => {
            setTimeout(() => resolve(ducks), 1500);
        })
    }
}

export default DuckService;