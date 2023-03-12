import { findSplitNodesOfGate, getBranchesOfGateNode, } from "../utils.js";
import { BPMN_ELEMENTS } from "../constants.js";
import Metric from "../Metric-Class.js";
const CFC = (xmlDoc) => {
    const xorSplitNodes = findSplitNodesOfGate(xmlDoc, BPMN_ELEMENTS.XOR);
    const orSplitNodes = findSplitNodesOfGate(xmlDoc, BPMN_ELEMENTS.OR);
    const andSplitNodes = findSplitNodesOfGate(xmlDoc, BPMN_ELEMENTS.AND);
    const eventBasedSplitNodes = findSplitNodesOfGate(xmlDoc, BPMN_ELEMENTS.EVENT_BASED);
    const CFC_OF_EVENT_BASED = eventBasedSplitNodes.reduce((total, current) => {
        return total + getBranchesOfGateNode(current) * 1;
    }, 0);
    const CFC_OF_XOR = xorSplitNodes.reduce((total, current) => {
        return total + getBranchesOfGateNode(current) * 1;
    }, 0);
    const CFC_OF_OR = orSplitNodes.reduce((total, current) => {
        console.log(getBranchesOfGateNode(current));
        //prettier-ignore
        return total + Math.pow(2, (getBranchesOfGateNode(current))) - 1;
    }, 0);
    const CFC_OF_AND = andSplitNodes.reduce((total, current) => {
        //getting the length is the same
        //prettier-ignore
        return total + 1;
    }, 0);
    return CFC_OF_XOR + CFC_OF_OR + CFC_OF_AND + CFC_OF_EVENT_BASED;
};
const CFCObj = new Metric("CFC", -1, CFC);
export default CFCObj;
//# sourceMappingURL=CFC.js.map