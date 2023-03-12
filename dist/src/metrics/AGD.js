import { getGatewaysInDiagram } from "../utils.js";
import TNG from "./TNG.js";
import xpath from "xpath";
import Metric from "../Metric-Class.js";
function AGD(xmlDoc) {
    // const xmlElementsCount = countStructuralElements(xmlDoc);
    // const allTypesOfGateways = new Set(
    //     Array.from(xmlElementsCount.keys()).filter((bpmnElement) => {
    //         return bpmnElement.endsWith("Gateway");
    //     })
    // );
    // const arrayOfGatewayTypes = Array.from(allTypesOfGateways);
    // if (arrayOfGatewayTypes.length === 0) {
    //     console.log("No gateways in diagram");
    //     return -1;
    // }
    const gatewaysOfDiagram = getGatewaysInDiagram(xmlDoc);
    if (gatewaysOfDiagram.length === 0)
        return -1;
    //this needs a check
    const sumOfIncomingOutgoingOfGateways = gatewaysOfDiagram.reduce((total, current) => {
        const xpathRes = xpath.select(`./*[local-name()='incoming' or local-name()='outgoing']`, current);
        return (total += xpathRes.length);
    }, 0);
    const sum = sumOfIncomingOutgoingOfGateways / TNG.calculateFn(xmlDoc);
    return sum;
}
const AGDObj = new Metric("AGD", -1, AGD);
export default AGDObj;
//# sourceMappingURL=AGD.js.map