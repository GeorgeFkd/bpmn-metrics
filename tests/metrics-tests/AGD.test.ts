import AGD from "../../src/metrics/AGD.js";
import { xmlStr, expectedAGD } from "../samples/sample-188.js";
import { DOMParser } from "@xmldom/xmldom";
describe.skip("should be able to calculate AGD", () => {
	const parsedDocument = new DOMParser().parseFromString(xmlStr, "text/xml");
	it("should produce AGD (sample-188) ", () => {
		const result = AGD.calculateFn(parsedDocument);

		expect(result).toEqual(expectedAGD);
	});
});
