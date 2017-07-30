class DuckService {

    constructor($http, $q) {
        this.$http = $http;
        this.$q = $q;
    }

    getDucks() {
        let deferred = this.$q.defer();

        this.$http.get('http://localhost:9696/ducks')
            .then(response => deferred.resolve(response.data));
        
        return deferred.promise;
    }
}

export default DuckService;