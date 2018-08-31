class Paul {
    constructor() {
        this._one = 1;
    }

    hello() {
        console.log('Hello World');
    }

    greeting(name) {
        console.log(`Hello ${name}`);
    }

    get one() {
        return this._one;
    }
}

const paul = new Paul();
paul.hello();
paul.greeting('Paul');
const num = paul.one;
console.log(`Got ${num}`);