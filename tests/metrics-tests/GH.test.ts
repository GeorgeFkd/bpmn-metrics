import GH from "../../src/metrics/GH";
import { xmlStr, expectedGH } from "../samples/sample-188";
import { DOMParser } from "@xmldom/xmldom";
describe("should be able to calculate GH", () => {
    const parsedDocument = new DOMParser().parseFromString(xmlStr, "text/xml");
    it("should produce GH(sample-188) = ", () => {
        const result = parseFloat(GH.calculateFn(parsedDocument).toFixed(2));

        expect(result).toEqual(expectedGH);
    });
});
