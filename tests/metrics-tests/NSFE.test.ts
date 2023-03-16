import NSFE from "../../src/metrics/NSFE";
//188 has problem with NOAJS
import { xmlStr, expectedNSFE } from "../samples/sample-collaboration";
import { DOMParser } from "@xmldom/xmldom";
describe.skip("should be able to calculate NOAJS", () => {
	const parsedDocument = new DOMParser().parseFromString(xmlStr, "text/xml");
	it("should produce NSFE(sample-collaboration) = ", () => {
		const result = NSFE.calculateFn(parsedDocument);

		expect(result).toEqual(expectedNSFE);
	});
});
