import Metric from "../Metric-Class";
import {
    CalculateMetricFn,
    getEventsInDiagram,
    getOutgoingFlowsOfNode,
} from "../utils";

const NSFE: CalculateMetricFn<Document> = (xmlDoc: Document) => {
    //vriskw ta events kai meta ta incoming/outgoing
    const eventsOfDiagram = getEventsInDiagram(xmlDoc);
    const sum = eventsOfDiagram.reduce((total, current) => {
        return total + getOutgoingFlowsOfNode(current);
    }, 0);
    return sum;
};

const NSFEObj = new Metric("NSFE", 0, NSFE);
export default NSFEObj;
