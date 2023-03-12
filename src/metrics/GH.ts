import Metric from "../Metric-Class.js";
import { CalculateMetricFn, getGatewaysInDiagram } from "../utils.js";
const GH: CalculateMetricFn<Document> = (xmlDoc: Document) => {
    const gatewaysOfDiagram = getGatewaysInDiagram(xmlDoc);
    //? asxoloumaste me olwn twn eidwn ta gateways? h mono or-xor-and?
    // /.+:/
    const numberOfGatewaysInDiagram = gatewaysOfDiagram.length;
    if (numberOfGatewaysInDiagram === 0) return -1;
    const result = new Map<string, number>();
    gatewaysOfDiagram.map((current) => {
        //vlepoume ti typos einai
        const typeOfGateway = current.nodeName.replace(/.+:/, "");
        if (result.get(typeOfGateway) !== undefined) {
            //for some reason TS doesnt get it as defined
            result.set(
                typeOfGateway,
                (result.get(typeOfGateway) as number) + 1
            );
        } else {
            result.set(typeOfGateway, 1);
        }
    }, 0);
    let sum = 0;
    for (const value of result.values()) {
        const p_i = value / numberOfGatewaysInDiagram;
        //prettier-ignore
        sum += -1 * (Math.log(p_i)/Math.log(3)) * p_i
    }
    return sum;
};

const GHObj = new Metric("GH", -1, GH);
export default GHObj;
