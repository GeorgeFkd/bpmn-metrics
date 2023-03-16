import DENSITY from "../../src/metrics/DENSITY";
import { xmlStr, expectedDENSITY } from "../samples/sample-213";
import { DOMParser } from "@xmldom/xmldom";
describe.skip("should be able to calculate DENSITY", () => {
	it("should produce DENSITY(sample-188) = 0.5", () => {
		const xmlDoc = new DOMParser().parseFromString(xmlStr, "text/xml");
		const result = DENSITY.calculateFn(xmlDoc);

		expect(result).toEqual(expectedDENSITY);
	});
});
