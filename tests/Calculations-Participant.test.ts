import {
	xmlStr,
	expectedAGD,
	expectedCFC,
	expectedCLA,
	expectedGH,
	expectedGM,
	expectedMGD,
	expectedNOA,
	expectedNOAJS,
	expectedNSFA,
	expectedNSFG,
	expectedTNG,
	expectedTS,
	expectedCNC,
	expectedDENSITY,
	expectedNMF,
	expectedNSFE,
} from "./samples/sample-pool-007";

import {
	AGD,
	CFC,
	CLA,
	CNC,
	DENSITY,
	GH,
	GM,
	MGD,
	NMF,
	NOA,
	NOAJS,
	NSFA,
	NSFE,
	NSFG,
	TNG,
	TS,
} from "../src/all";
import { DOMParser } from "@xmldom/xmldom";
describe("Metrics should be calculated correctly for separate participant", () => {
	// The following tests test the metrics are calculated correctly
	// given the xml sub-section of the participant
	// Getting the correct sub-section of the diagram is tested elsewhere
	let xmlDoc = new DOMParser().parseFromString(xmlStr, "text/xml");
	// let xmlDoc = getProcessXmlDocWithRefAttr(xmlWholeDoc, "Process_0g566ig");

	it("Calculates AGD in participant's process diagram", () => {
		const result = AGD.calculateFn(xmlDoc);

		expect(result).toEqual(expectedAGD);
	});

	it("Calculates CFC in participant's process diagram", () => {
		const result = CFC.calculateFn(xmlDoc);

		expect(result).toEqual(expectedCFC);
	});

	it("Calculates CLA in participant's process diagram", () => {
		const result = CLA.calculateFn(xmlDoc);

		expect(parseFloat(result.toFixed(2))).toEqual(expectedCLA);
	});

	it("Calculates CNC in participant's process diagram", () => {
		const result = CNC.calculateFn(xmlDoc);

		expect(parseFloat(result.toFixed(2))).toEqual(expectedCNC);
	});

	it("Calculates DENSITY in participant's process diagram", () => {
		const result = DENSITY.calculateFn(xmlDoc);

		expect(parseFloat(result.toFixed(2))).toEqual(expectedDENSITY);
	});

	it("Calculates GH in participant's process diagram", () => {
		const result = GH.calculateFn(xmlDoc);

		expect(parseFloat(result.toFixed(2))).toEqual(expectedGH);
	});

	it("Calculates GM in participant's process diagram", () => {
		const result = GM.calculateFn(xmlDoc);

		expect(result).toEqual(expectedGM);
	});

	it("Calculates MGD in participant's process diagram", () => {
		const result = MGD.calculateFn(xmlDoc);

		expect(result).toEqual(expectedMGD);
	});

	it("Calculates NMF in participant's process diagram", () => {
		const result = NMF.calculateFn(xmlDoc);

		expect(result).toEqual(expectedNMF);
	});

	it("Calculates NOA in participant's process diagram", () => {
		const result = NOA.calculateFn(xmlDoc);

		expect(result).toEqual(expectedNOA);
	});

	it("Calculates NOAJS in participant's process diagram", () => {
		const result = NOAJS.calculateFn(xmlDoc);

		expect(result).toEqual(expectedNOAJS);
	});

	it("Calculates NSFA in participant's process diagram", () => {
		const result = NSFA.calculateFn(xmlDoc);

		expect(result).toEqual(expectedNSFA);
	});

	it("Calculates NSFE in participant's process diagram", () => {
		const result = NSFE.calculateFn(xmlDoc);

		expect(result).toEqual(expectedNSFE);
	});

	it("Calculates NSFG in participant's process diagram", () => {
		const result = NSFG.calculateFn(xmlDoc);

		expect(result).toEqual(expectedNSFG);
	});

	it("Calculates TNG in participant's process diagram", () => {
		const result = TNG.calculateFn(xmlDoc);
		expect(result).toEqual(expectedTNG);
	});

	it("Calculates TS in participant's process diagram", () => {
		const result = TS.calculateFn(xmlDoc);
		expect(result).toEqual(expectedTS);
	});
});
