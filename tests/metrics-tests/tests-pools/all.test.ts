import { DOMParser } from "@xmldom/xmldom";
import { expectedNOA, xmlStr } from "../../samples/sample-pool-007";
import { xmlStr as xmlStr2 } from "../../samples/sample-188";
import NOA from "../../../src/metrics/NOA";
describe.skip("should be able to calculate AGD", () => {
	const parsedDocument = new DOMParser().parseFromString(xmlStr, "text/xml");
	const parsed2 = new DOMParser().parseFromString(xmlStr2, "text/xml");
	it("should produce NOA (sample-pool-007) ", () => {
		NOA.calculateAndUpdateResult(parsed2);
		const result = NOA.calculateAndUpdateResult(parsedDocument);
		console.log("RESULT->", result);
		expect(NOA.result).toEqual(expectedNOA);
	});
});
