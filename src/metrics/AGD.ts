import { CalculateMetricFn, getGatewaysInDiagram } from "../utils";
import TNG from "./TNG";
import xpath from "xpath";
import Metric from "../Metric-Class";
function AGD(xmlDoc: Document): number {
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
    if (gatewaysOfDiagram.length === 0) return -1;
    //this needs a check
    const sumOfIncomingOutgoingOfGateways = gatewaysOfDiagram.reduce(
        (total, current) => {
            const xpathRes = xpath.select(
                `./*[local-name()='incoming' or local-name()='outgoing']`,
                current
            );

            return (total += xpathRes.length);
        },
        0
    );
    const sum =
        sumOfIncomingOutgoingOfGateways / (TNG.calculateFn(xmlDoc) as number);

    return sum;
}

const AGDObj: Metric = new Metric("AGD", -1, AGD);
export default AGDObj;
