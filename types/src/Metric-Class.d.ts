import { CalculateMetricFn } from "./utils.js";
export default class Metric {
    readonly label: string;
    readonly nullValue: number;
    readonly calculateFn: CalculateMetricFn<Document>;
    private _result;
    constructor(label: string, nullValue: number, calculateFn: CalculateMetricFn<Document>);
    get result(): number;
    calculateAndUpdateResult(input: Document): number;
}
