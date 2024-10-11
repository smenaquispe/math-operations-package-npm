export default class CantDevideByZero extends Error {
    constructor() {
        super('Division by zero is not allowed');
        this.name = 'CantDevideByZero';
    }
}