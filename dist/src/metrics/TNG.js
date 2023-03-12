import Metric from "../Metric-Class.js";
import xpath from "xpath";
const TNG = (xmlDoc) => {
    //!not the best way will remove
    const result = xpath.select(".//*[ends-with(local-name(),'Gateway')]", xmlDoc);
    return result.length;
};
const TNGObj = new Metric("TNG", -1, TNG);
export default TNGObj;
//# sourceMappingURL=TNG.js.map