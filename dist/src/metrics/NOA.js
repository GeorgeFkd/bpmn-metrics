import Metric from "../Metric-Class.js";
import xpath from "xpath";
const NOA = (xmlDoc) => {
    //!this is temporary-> it wastes resources
    //!correct //*[matches(local-name(),'$t|Task')]
    const result = xpath.select(".//*[matches(local-name(),'.*(t|T)ask')]", xmlDoc);
    return result.length;
};
const NOAObj = new Metric("NOA", -1, NOA);
export default NOAObj;
//# sourceMappingURL=NOA.js.map