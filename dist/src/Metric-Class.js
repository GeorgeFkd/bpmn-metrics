export default class Metric {
    constructor(label, nullValue, calculateFn) {
        this.label = label;
        this.nullValue = nullValue;
        this.calculateFn = calculateFn;
        this.label = label;
        this._result = nullValue;
        this.calculateFn = calculateFn;
    }
    get result() {
        return this._result;
    }
    calculateAndUpdateResult(input) {
        const res = this.calculateFn(input);
        this._result = this.calculateFn(input);
        return res;
    }
}
//# sourceMappingURL=Metric-Class.js.map