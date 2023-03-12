import { CalculateMetricFn } from "./utils.js";

export default class Metric {
    private _result: number;

    constructor(
        public readonly label: string,
        public readonly nullValue: number,
        public readonly calculateFn: CalculateMetricFn<Document>
    ) {
        this.label = label;
        this._result = nullValue;
        this.calculateFn = calculateFn;
    }

    public get result() {
        return this._result;
    }

    calculateAndUpdateResult(input: Document): number {
        const res = this.calculateFn(input);
        this._result = this.calculateFn(input);
        return res;
    }
}
