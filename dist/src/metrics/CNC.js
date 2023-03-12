import { getEventsInDiagram } from "../utils.js";
import xpath from "xpath";
import Metric from "../Metric-Class.js";
import NOA from "./NOA.js";
import TNG from "./TNG.js";
const CNC = (xmlDoc) => {
    //arcs/nodes
    const arcs = xpath.select(".//*[local-name()='sequenceFlow']", xmlDoc).length;
    const events = getEventsInDiagram(xmlDoc).length;
    const nodes = NOA.calculateFn(xmlDoc) + TNG.calculateFn(xmlDoc) + events;
    //! //*[matches(local-name(),'.+Event')]
    //nodes = tasks + gateways + events??
    if (nodes === 0)
        return -1;
    return arcs / nodes;
};
const CNCObj = new Metric("CNC", -1, CNC);
export default CNCObj;
//# sourceMappingURL=CNC.js.map