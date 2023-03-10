import {
    CalculateMetricFn,
    findSplitNodesOfGate,
    getBranchesOfGateNode,
} from "../utils";
import { BPMN_ELEMENTS } from "../constants";
import Metric from "../Metric-Class";
const CFC: CalculateMetricFn<Document> = (xmlDoc: Document) => {
    const xorSplitNodes = findSplitNodesOfGate(xmlDoc, BPMN_ELEMENTS.XOR);
    const orSplitNodes = findSplitNodesOfGate(xmlDoc, BPMN_ELEMENTS.OR);
    const andSplitNodes = findSplitNodesOfGate(xmlDoc, BPMN_ELEMENTS.AND);
    const eventBasedSplitNodes = findSplitNodesOfGate(
        xmlDoc,
        BPMN_ELEMENTS.EVENT_BASED
    );
    const CFC_OF_EVENT_BASED = (eventBasedSplitNodes as Node[]).reduce(
        (total, current) => {
            return (total as number) + getBranchesOfGateNode(current) * 1;
        },
        0
    );
    const CFC_OF_XOR = (xorSplitNodes as Node[]).reduce((total, current) => {
        return (total as number) + getBranchesOfGateNode(current) * 1;
    }, 0);
    const CFC_OF_OR = (orSplitNodes as Node[]).reduce((total, current) => {
        console.log(getBranchesOfGateNode(current));
        //prettier-ignore
        return (total as number) + 2 ** (getBranchesOfGateNode(current as Node)) - 1;
    }, 0);
    const CFC_OF_AND = (andSplitNodes as Node[]).reduce((total, current) => {
        //getting the length is the same
        //prettier-ignore
        return (total as number) + 1;
    }, 0);

    return CFC_OF_XOR + CFC_OF_OR + CFC_OF_AND + CFC_OF_EVENT_BASED;
};

const CFCObj = new Metric("CFC", -1, CFC);

export default CFCObj;
