import { CalculateMetricFn } from "../utils";
import NOA from "./NOA";
import NSFA from "./NSFA";
import Metric from "../Metric-Class";
const CLA: CalculateMetricFn<Document> = (xmlDoc: Document) => {
    const nsfa = NSFA.calculateFn(xmlDoc);
    if (nsfa === 0) return -1;
    return NOA.calculateFn(xmlDoc) / nsfa;
};

const CLAObj = new Metric("CLA", -1, CLA);
export default CLAObj;
