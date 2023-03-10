import NOA from "../../src/metrics/NOA";
//188 has problem with NOA
import { xmlStr, expectedNOA } from "../samples/sample-213";
import { DOMParser } from "@xmldom/xmldom";
describe("should be able to calculate NOA", () => {
    const parsedDocument = new DOMParser().parseFromString(xmlStr, "text/xml");
    it("should produce NOA(sample-188) = ", () => {
        const result = parseFloat(NOA.calculateFn(parsedDocument).toFixed(2));

        expect(result).toEqual(expectedNOA);
    });
});
