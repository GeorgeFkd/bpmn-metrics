import { CalculateMetricFn, countStructuralElements } from "../utils.js";
import { BPMN_ELEMENTS } from "../constants.js";
import Metric from "../Metric-Class.js";
const NMF: CalculateMetricFn<Document> = (xmlDoc: Document) => {
    const structuralElems = countStructuralElements(xmlDoc);
    const messageFlows = structuralElems.get(BPMN_ELEMENTS.MESSAGE_FLOW);
    if (messageFlows === undefined) {
        return -1;
    } else {
        return messageFlows;
    }
};

const NMFObj = new Metric("NMF", -1, NMF);

export default NMFObj;
