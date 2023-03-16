import NOAJS from "../../src/metrics/NOAJS";
//188 has problem with NOAJS
import { xmlStr, expectedNOAJS } from "../samples/sample-213";
import { DOMParser } from "@xmldom/xmldom";
describe.skip("should be able to calculate NOAJS", () => {
	const parsedDocument = new DOMParser().parseFromString(xmlStr, "text/xml");
	it("should produce NOAJS(sample-188) = ", () => {
		const result = NOAJS.calculateFn(parsedDocument);

		expect(result).toEqual(expectedNOAJS);
	});
});
