import xpath from "xpath";
export const getBranchesOfGateNode = (node) => {
    const xpathRes = xpath.select("./*[local-name()='outgoing']", node);
    return xpathRes.length;
};
export const getOutgoingFlowsOfNode = (node) => {
    const xpathRes = xpath.select("./*[local-name()='outgoing']", node);
    return xpathRes.length;
};
export const findSplitNodesOfGate = (xml, gateName) => {
    return xpath.select(`.//*[local-name()='${gateName}'][count(./*[local-name()='outgoing'])>1]`, xml);
};
export const getProcessXmlDocWithRefAttr = (xml, processRef) => {
    if (!xml) {
        return new Document();
    }
    if (processRef === "") {
        return xml;
    }
    // gia kapoio logo edw h teleia prokalei thema
    return xpath.select(`//*[local-name()='process'][@id='${processRef}']`, xml)[0];
};
//!
export const getParticipants = (xml) => {
    console.log("GETTING PARTICIPANTS IN ", xml);
    if (!xml) {
        return [];
    }
    const xpathRes = xpath.select("//*[local-name()='participant']", xml);
    const result = [];
    const attrsWanted = ["name", "processRef"];
    for (let participant = 0; participant < xpathRes.length; participant++) {
        let obj = {};
        for (let i = 0; i < xpathRes[participant].attributes.length; i++) {
            const elem = xpathRes[participant].attributes[i];
            console.log(elem.textContent);
            if (attrsWanted.includes(elem.nodeName)) {
                //{name:"",processRef:""}
                obj[elem.name] = elem.textContent;
                console.log(obj, "pushed");
            }
        }
        result.push(obj);
    }
    //filter out black boxes
    const withoutBlackBoxPools = result.filter((obj) => obj.processRef);
    return withoutBlackBoxPools;
};
export const getAmountOfBranchesOfThisGateNode = (node) => {
    return xpath.select("count(self::node()/*[local-name()='outgoing'])", node)
        .length;
};
export function countStructuralElements(xmlDoc) {
    if (!xmlDoc) {
        return new Map();
    }
    // let xmlDoc;
    // try {
    //     xmlDoc = parser.parseFromString(xmlStr);
    // } catch (error) {
    //     console.error(error);
    // }
    let allEls = xpath.select(".//*", xmlDoc);
    let allElsToNodes = allEls.map((el) => {
        return el;
    });
    let allElsWithLocalName = allElsToNodes.map((el) => {
        //yparxei h idiothta sta objects alla den fainetai
        const localName = el.nodeName.replace(/.+:/, "");
        return Object.assign(Object.assign({}, el), { localName });
    });
    let elNames = allElsWithLocalName.map((el) => {
        return el.localName;
    });
    let distinctElemsInBpmnDiagram = new Set(elNames);
    let result = BpmnTagsCountOccurences(distinctElemsInBpmnDiagram, elNames);
    //nomizw kalytera sto ui gia na mhn kanw teleiws remove pragmata apla na ta emfanizw kai na ta kryvw
    return result;
}
function BpmnTagsCountOccurences(uniqueTagsInDiagram, allTags) {
    if (!uniqueTagsInDiagram) {
        return new Map();
    }
    let result = new Map();
    uniqueTagsInDiagram.forEach((tagName) => {
        let elems = allTags.filter((name) => {
            return name === tagName;
        });
        //here i can get any edge cases
        if (tagName === "subProcess") {
            result.set(tagName, elems.length / 2);
        }
        else {
            result.set(tagName, elems.length);
        }
    });
    return result;
}
export const getEventsInDiagram = (xmlDoc) => {
    const xpathRes = xpath.select(".//*[matches(local-name(),'.+Event$')]", xmlDoc);
    return xpathRes;
};
export const elementNameIsConsideredActivity = (elementName) => {
    //first any exceptions
    if (typeof elementName !== "string")
        throw Error("element name supplied is not of type string");
    //! watch out for this
    //if (elementName === "subProcess") return true;
    let thematches = elementName.match(/.*(T|t)ask$/g);
    if (thematches === null)
        return false;
    return thematches.length > 0;
};
export const getGatewaysTypes = (xmlDoc) => {
    return [];
};
export const getGatewaysInDiagram = (xmlDoc) => {
    const gatewayXPathRes = xpath.select(".//*[ends-with(local-name(),'Gateway') and local-name()!='Bounds']", xmlDoc);
    return gatewayXPathRes;
};
export const removeDuplicates = (arr) => {
    return arr.filter((item, index) => arr.indexOf(item) === index);
};
//# sourceMappingURL=utils.js.map