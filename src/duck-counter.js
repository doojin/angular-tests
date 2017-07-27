class DuckCounter {
    constructor() {
        this.restrict = 'E';
        this.scope = {
            count: '@'
        };
        this.template = `
            <div class="duck-counter">
                <div>Ducks: {{count}}</div>
                <div>
                    <span ng-repeat="n in [].constructor(counter)">
                        <img src="assets/duck.png">
                    </span>
                </div>
            </div>
        `;
    }
}

export default () => new DuckCounter();