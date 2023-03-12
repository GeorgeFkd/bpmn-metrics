import Metric from "../Metric-Class.js";
import { getBranchesOfGateNode, getGatewaysInDiagram, } from "../utils.js";
const NSFG = (xmlDoc) => {
    const gatewaysOfDiagram = getGatewaysInDiagram(xmlDoc);
    const result = gatewaysOfDiagram.reduce((total, current) => {
        return total + getBranchesOfGateNode(current);
    }, 0);
    return result;
};
const NSFGObj = new Metric("NSFG", -1, NSFG);
export default NSFGObj;
//# sourceMappingURL=NSFG.js.map