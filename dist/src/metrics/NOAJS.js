import NOA from "./NOA.js";
import TNG from "./TNG.js";
import Metric from "../Metric-Class.js";
const NOAJS = (xmlDoc) => {
    //!correct
    return NOA.calculateFn(xmlDoc) + TNG.calculateFn(xmlDoc);
};
const NOAJSObj = new Metric("NOAJS", -1, NOAJS);
export default NOAJSObj;
//# sourceMappingURL=NOAJS.js.map