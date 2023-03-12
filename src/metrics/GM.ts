import { BPMN_ELEMENTS } from "../constants.js";
import { CalculateMetricFn, getGatewaysInDiagram } from "../utils.js";
import xpath from "xpath";
import Metric from "../Metric-Class.js";
const GM: CalculateMetricFn<Document> = (xmlDoc: Document) => {
    const gatewaysOfDiagram = getGatewaysInDiagram(xmlDoc);
    const xor_gateways = gatewaysOfDiagram.filter(
        (node) => node.nodeName.replace(/.+:/, "") === BPMN_ELEMENTS.XOR
    );
    const or_gateways = gatewaysOfDiagram.filter(
        (node) => node.nodeName.replace(/.+:/, "") === BPMN_ELEMENTS.OR
    );
    const and_gateways = gatewaysOfDiagram.filter(
        (node) => node.nodeName.replace(/.+:/, "") === BPMN_ELEMENTS.AND
    );
    const event_based_gateways = gatewaysOfDiagram.filter(
        (node) => node.nodeName.replace(/.+:/, "") === BPMN_ELEMENTS.EVENT_BASED
    );

    const allGatewaysPerType = [
        xor_gateways,
        or_gateways,
        event_based_gateways,
        and_gateways,
    ];
    const result = allGatewaysPerType.reduce((total, gatewaysOftype) => {
        const gmOfType = gatewaysOftype.reduce(
            (totalOfType, gatewayOfCurrentType) => {
                const incoming = xpath.select(
                    "./*[local-name()='incoming']",
                    gatewayOfCurrentType
                ).length;
                const outgoing = xpath.select(
                    "./*[local-name()='outgoing']",
                    gatewayOfCurrentType
                ).length;
                console.log(incoming, outgoing, "these we work with");
                if (incoming > outgoing) {
                    //it is a merge node
                    return totalOfType - incoming;
                } else if (incoming === outgoing) {
                    //a problematic node
                    return totalOfType;
                } else {
                    //this is a split node
                    return totalOfType + outgoing;
                }
            },
            0
        );
        return total + Math.abs(gmOfType);
    }, 0);
    return result;
};

const GMObj = new Metric("GM", -1, GM);
export default GMObj;
