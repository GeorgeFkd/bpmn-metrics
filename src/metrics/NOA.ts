import Metric from "../Metric-Class";
import { CalculateMetricFn } from "../utils";
import { countStructuralElements as analyzeXMLString } from "../utils";
import xpath from "xpath";

const NOA: CalculateMetricFn<Document> = (xmlDoc: Document) => {
    //!this is temporary-> it wastes resources
    //!correct //*[matches(local-name(),'$t|Task')]
    const result = xpath.select(
        ".//*[matches(local-name(),'.*(t|T)ask')]",
        xmlDoc
    );
    return result.length;
};

const NOAObj = new Metric("NOA", -1, NOA);
export default NOAObj;
