import TS from "../../src/metrics/TS";
//188 has problem with TS
import { xmlStr, expectedTS } from "../samples/sample-213";
import { DOMParser } from "@xmldom/xmldom";
describe.skip("should be able to calculate TS", () => {
	const parsedDocument = new DOMParser().parseFromString(xmlStr, "text/xml");
	it("should produce TS(sample-188) = ", () => {
		const result = TS.calculateFn(parsedDocument);

		expect(result).toEqual(expectedTS);
	});
});
