import AGD from "./metrics/AGD";
import CFC from "./metrics/CFC";
import CLA from "./metrics/CLA";
import GH from "./metrics/GH";
import GM from "./metrics/GM";
import Metric from "./Metric-Class";
import MGD from "./metrics/MGD";
import NOA from "./metrics/NOA";
import NOAJS from "./metrics/NOAJS";
import NSFA from "./metrics/NSFA";
import NSFG from "./metrics/NSFG";
import TNG from "./metrics/TNG";
import TS from "./metrics/TS";
import DENSITY from "./metrics/DENSITY";
import CNC from "./metrics/CNC";
import NMF from "./metrics/NMF";
import NSFE from "./metrics/NSFE";
// import { readdirSync } from "fs";
// // const fs = window.require("fs");
// console.log("not messed up yet");
// const allfiles = readdirSync("../metrics");
// console.log(allfiles);

export {
    AGD,
    CFC,
    CLA,
    GH,
    GM,
    MGD,
    NOA,
    NOAJS,
    NSFA,
    NSFG,
    TNG,
    TS,
    DENSITY,
    CNC,
    NMF,
    NSFE,
};

//edw tha mporousa na kanw thn Metric class me -> result,label,calculateFN kai na ekana export ta objects
export default [
    AGD,
    CFC,
    CLA,
    GH,
    MGD,
    NOA,
    NOAJS,
    NSFA,
    NSFG,
    TNG,
    TS,
    GM,
    DENSITY,
    CNC,
    NMF,
    NSFE,
];
