import xpath from "xpath";
interface Participant {
    name: string;
    processRef: string;
}
export type CalculateMetricFn<Input> = (xmlDoc: Input) => number;
export declare const getBranchesOfGateNode: (node: Node) => number;
export declare const getOutgoingFlowsOfNode: (node: Node) => number;
export declare const findSplitNodesOfGate: (xml: Document, gateName: string) => xpath.SelectedValue[];
export declare const getProcessXmlDocWithRefAttr: (xml: Document, processRef: string) => Document;
export declare const getParticipants: (xml: Document) => Participant[];
export declare const getAmountOfBranchesOfThisGateNode: (node: Node) => number;
export declare function countStructuralElements(xmlDoc: Document): Map<string, number>;
export declare const getEventsInDiagram: (xmlDoc: Document) => Node[];
export declare const elementNameIsConsideredActivity: (arg: string) => boolean;
export declare const getGatewaysTypes: (arg: Document) => string[];
export declare const getGatewaysInDiagram: (arg: Document) => Node[];
export declare const removeDuplicates: (arr: string[]) => string[];
export {};
