import MGD from "../../src/metrics/MGD";
import { xmlStr, expectedMGD } from "../samples/sample-213";
import { DOMParser } from "@xmldom/xmldom";
describe.skip("should be able to calculate MGD", () => {
	const parsedDocument = new DOMParser().parseFromString(xmlStr, "text/xml");
	it("should produce MGD(sample-188) = ", () => {
		const result = MGD.calculateFn(parsedDocument);

		expect(result).toEqual(expectedMGD);
	});
});
