import Metric from "../Metric-Class";
import { countStructuralElements } from "../utils";
import { CalculateMetricFn } from "../utils";
import xpath from "xpath";
const TNG: CalculateMetricFn<Document> = (xmlDoc: Document) => {
    //!not the best way will remove
    const result = xpath.select(
        ".//*[ends-with(local-name(),'Gateway')]",
        xmlDoc
    );

    return result.length;
};

const TNGObj = new Metric("TNG", -1, TNG);
export default TNGObj;
