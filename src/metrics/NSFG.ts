import Metric from "../Metric-Class";
import {
    CalculateMetricFn,
    getBranchesOfGateNode,
    getGatewaysInDiagram,
} from "../utils";
const NSFG: CalculateMetricFn<Document> = (xmlDoc: Document) => {
    const gatewaysOfDiagram = getGatewaysInDiagram(xmlDoc);
    const result = gatewaysOfDiagram.reduce((total, current) => {
        return total + getBranchesOfGateNode(current);
    }, 0);
    return result;
};

const NSFGObj = new Metric("NSFG", -1, NSFG);
export default NSFGObj;
