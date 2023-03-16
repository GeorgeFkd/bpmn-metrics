import CFC from "../../src/metrics/CFC";
//188 has problem with CFC
import { xmlStr, expectedCFC } from "../samples/sample-213";
import { DOMParser } from "@xmldom/xmldom";
describe.skip("should be able to calculate CFC", () => {
	const parsedDocument = new DOMParser().parseFromString(xmlStr, "text/xml");
	it("should produce CFC(sample-188) = ", () => {
		const result = CFC.calculateFn(parsedDocument);

		expect(result).toEqual(expectedCFC);
	});
});
