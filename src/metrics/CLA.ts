import { CalculateMetricFn } from "../utils.js";
import NOA from "./NOA.js";
import NSFA from "./NSFA.js";
import Metric from "../Metric-Class.js";
const CLA: CalculateMetricFn<Document> = (xmlDoc: Document) => {
    const nsfa = NSFA.calculateFn(xmlDoc);
    if (nsfa === 0) return -1;
    return NOA.calculateFn(xmlDoc) / nsfa;
};

const CLAObj = new Metric("CLA", -1, CLA);
export default CLAObj;
