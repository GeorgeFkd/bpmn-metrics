import NMF from "../../src/metrics/NMF";
//188 has problem with NOAJS
import { xmlStr, expectedNMF } from "../samples/sample-collaboration";
import { DOMParser } from "@xmldom/xmldom";
describe("should be able to calculate NOAJS", () => {
    const parsedDocument = new DOMParser().parseFromString(xmlStr, "text/xml");
    it("should produce NMF(sample-collaboration) = ", () => {
        const result = NMF.calculateFn(parsedDocument);

        expect(result).toEqual(expectedNMF);
    });
});
