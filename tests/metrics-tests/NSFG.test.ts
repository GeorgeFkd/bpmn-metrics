import NSFG from "../../src/metrics/NSFG";
//188 has problem with nsfg
import { xmlStr, expectedNSFG } from "../samples/sample-213";
import { DOMParser } from "@xmldom/xmldom";
describe.skip("should be able to calculate NSFG", () => {
	const parsedDocument = new DOMParser().parseFromString(xmlStr, "text/xml");
	it("should produce NSFG(sample-188) = ", () => {
		const result = parseFloat(NSFG.calculateFn(parsedDocument).toFixed(2));

		expect(result).toEqual(expectedNSFG);
	});
});
