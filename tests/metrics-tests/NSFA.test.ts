import NSFA from "../../src/metrics/NSFA";
//188 has problem with NSFA
import { xmlStr, expectedNSFA } from "../samples/sample-213";
import { DOMParser } from "@xmldom/xmldom";
describe.skip("should be able to calculate NSFA", () => {
	const parsedDocument = new DOMParser().parseFromString(xmlStr, "text/xml");
	it("should produce NSFA(sample-213) = ", () => {
		const result = NSFA.calculateFn(parsedDocument);

		expect(result).toEqual(expectedNSFA);
	});
});
