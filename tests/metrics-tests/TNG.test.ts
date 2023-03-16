import TNG from "../../src/metrics/TNG";
//188 has problem with TNG
import { xmlStr, expectedTNG } from "../samples/sample-213";
import { DOMParser } from "@xmldom/xmldom";
describe.skip("should be able to calculate TNG", () => {
	const parsedDocument = new DOMParser().parseFromString(xmlStr, "text/xml");
	it("should produce TNG(sample-213) = ", () => {
		const result = parseFloat(TNG.calculateFn(parsedDocument).toFixed(2));

		expect(result).toEqual(expectedTNG);
	});
});
