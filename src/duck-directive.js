class Duck {
    constructor() {
        this.restrict = 'E';
        this.scope = {
            id: '@'
        };
        this.template = `
            <div class="duck">
                 <img src="assets/duck.png"> 
                 <span>#{{id}}</span>
            </div>
        `;
    }
}

export default () => new Duck();