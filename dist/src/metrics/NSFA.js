import { elementNameIsConsideredActivity, } from "../utils.js";
import xpath from "xpath";
import Metric from "../Metric-Class.js";
const NSFA = (xmlDoc) => {
    //! takes too long to calculate
    //the problem with subprocesses -> elementNameIsConsideredActivity helps
    //the problem with boundaryEvents
    //exei ena themataki dioti apo ta prwta pairnei ta
    //incoming kai apo ta deutera ta outgoing opote se sygkekrimenes
    //! solution: για κάθε ζευγάρι tasks βλέπω incoming του 1ου και outgoing του 2ου και αντίστροφα
    //periptwseis den tha ta metrhsei
    //they are events not tasks so?
    //(kapoy exw kanei to assumption oti feugei
    //mono ena sequenceFlow apo to task kai checkarw mono auto)
    if (!xmlDoc)
        return -1;
    //console.time("Optimal NSFA");
    const allNodes = xpath.select(".//*", xmlDoc);
    //console.time("NoA");
    const allActivities = allNodes.filter((node) => elementNameIsConsideredActivity(node.nodeName.replace(/.+:/, "")));
    //console.timeEnd("NoA");
    let newsum = 0;
    console.log("choose from: ", allActivities.length);
    for (let i = 0; i < allActivities.length - 1; i++) {
        for (let j = i + 1; j < allActivities.length; j++) {
            const choice1 = allActivities[i];
            const name1 = xpath.select("./@name", choice1);
            const choice2 = allActivities[j];
            const name2 = xpath.select("./@name", choice2);
            //console.log(name1[0].textContent, " - ", name2[0].textContent);
            //twra prepei na dw incoming tou enos kai outgoing toy allou
            //an kapoio incoming tou enos exei to idio outgoing nodeValue tou allounou tote sum+=1
            const outgoingOfFirst = xpath.select("./*[local-name() = 'outgoing']", choice1);
            const outgoingOfSecond = xpath.select("./*[local-name() = 'outgoing']", choice2);
            const incomingOfFirst = xpath.select("./*[local-name() = 'incoming']", choice1);
            const incomingOfSecond = xpath.select("./*[local-name() = 'incoming']", choice2);
            // console.log(
            //     "1 outgoing",
            //     outgoingOfFirst.length,
            //     "2 incoming",
            //     incomingOfSecond.length
            // );
            // console.log(
            //     "2 outgoing",
            //     outgoingOfSecond.length,
            //     "1 incoming",
            //     incomingOfFirst.length
            // );
            if (outgoingOfFirst.length !== 0 && incomingOfSecond.length !== 0) {
                for (let outgoing of outgoingOfFirst) {
                    for (let incoming of incomingOfSecond) {
                        if (outgoing.textContent === incoming.textContent) {
                            newsum += 1;
                            //console.log(outgoing.textContent);
                        }
                    }
                }
            }
            if (outgoingOfSecond.length !== 0 && incomingOfFirst.length !== 0) {
                for (let outgoing of outgoingOfSecond) {
                    for (let incoming of incomingOfFirst) {
                        if (outgoing.textContent === incoming.textContent) {
                            newsum += 1;
                            //console.log(outgoing.textContent);
                        }
                    }
                }
            }
        }
    }
    //console.timeEnd("Optimal NSFA");
    return newsum;
    console.time("Non Optimal NSFA");
    const allSFs = xpath.select("//*[local-name()='sequenceFlow']", xmlDoc);
    const sum = allSFs.reduce((total, current) => {
        const [sourceRef, targetRef] = xpath.select("./@*[matches(local-name(),'(source|target)Ref')]", current);
        //these are on the total xmlDoc
        const sourceNodes = xpath.select(`//*[@id='${sourceRef.nodeValue}']`, xmlDoc);
        const targetNodes = xpath.select(`//*[@id='${targetRef.nodeValue}']`, xmlDoc);
        if (sourceNodes.length === 0 || targetNodes.length === 0)
            return total;
        const sourceNode = sourceNodes[0];
        const targetNode = targetNodes[0];
        if (elementNameIsConsideredActivity(sourceNode.nodeName.replace(/.+:/, "")) &&
            elementNameIsConsideredActivity(targetNode.nodeName.replace(/.+:/, ""))) {
            return (total += 1);
        }
        return total;
    }, 0);
    console.timeEnd("Non Optimal NSFA");
    return sum;
};
const NSFAObj = new Metric("NSFA", -1, NSFA);
export default NSFAObj;
//# sourceMappingURL=NSFA.js.map