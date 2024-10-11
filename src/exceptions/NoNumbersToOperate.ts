export default class NoNumbersToOperate extends Error {
    constructor() {
        super('No numbers to operate');
        this.name = 'NoNumbersToOperate';
    }
}