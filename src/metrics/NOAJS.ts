import { CalculateMetricFn } from "../utils.js";
import NOA from "@metrics/NOA.js";
import TNG from "./TNG.js";
import Metric from "../Metric-Class.js";
const NOAJS: CalculateMetricFn<Document> = (xmlDoc: Document) => {
	//!correct
	return NOA.calculateFn(xmlDoc) + TNG.calculateFn(xmlDoc);
};

const NOAJSObj = new Metric("NOAJS", -1, NOAJS);
export default NOAJSObj;
