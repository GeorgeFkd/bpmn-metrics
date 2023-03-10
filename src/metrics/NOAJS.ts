import { CalculateMetricFn } from "../utils";
import NOA from "./NOA";
import TNG from "./TNG";
import Metric from "../Metric-Class";
const NOAJS: CalculateMetricFn<Document> = (xmlDoc: Document) => {
    //!correct
    return NOA.calculateFn(xmlDoc) + TNG.calculateFn(xmlDoc);
};

const NOAJSObj = new Metric("NOAJS", -1, NOAJS);
export default NOAJSObj;
