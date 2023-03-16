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
} from "./samples/sample-213";
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

describe("Metrics should be calculated correctly", () => {
	it("Calculates AGD in private process diagram", () => {
		const xmlDoc = new DOMParser().parseFromString(xmlStr, "text/xml");
		const result = AGD.calculateFn(xmlDoc);

		expect(result).toEqual(expectedAGD);
	});

	it("Calculates CFC in private process diagram", () => {
		const xmlDoc = new DOMParser().parseFromString(xmlStr, "text/xml");
		const result = CFC.calculateFn(xmlDoc);

		expect(result).toEqual(expectedCFC);
	});

	it("Calculates CLA in private process diagram", () => {
		const xmlDoc = new DOMParser().parseFromString(xmlStr, "text/xml");
		const result = CLA.calculateFn(xmlDoc);

		expect(result).toEqual(expectedCLA);
	});

	it("Calculates CNC in private process diagram", () => {
		const xmlDoc = new DOMParser().parseFromString(xmlStr, "text/xml");
		const result = CNC.calculateFn(xmlDoc);

		expect(result).toEqual(expectedCNC);
	});

	it("Calculates DENSITY in private process diagram", () => {
		const xmlDoc = new DOMParser().parseFromString(xmlStr, "text/xml");
		const result = DENSITY.calculateFn(xmlDoc);

		expect(result).toEqual(expectedDENSITY);
	});

	it("Calculates GH in private process diagram", () => {
		const xmlDoc = new DOMParser().parseFromString(xmlStr, "text/xml");
		const result = GH.calculateFn(xmlDoc);

		expect(parseFloat(result.toFixed(2))).toEqual(expectedGH);
	});

	it("Calculates GM in private process diagram", () => {
		const xmlDoc = new DOMParser().parseFromString(xmlStr, "text/xml");
		const result = GM.calculateFn(xmlDoc);

		expect(result).toEqual(expectedGM);
	});

	it("Calculates MGD in private process diagram", () => {
		const xmlDoc = new DOMParser().parseFromString(xmlStr, "text/xml");
		const result = MGD.calculateFn(xmlDoc);

		expect(result).toEqual(expectedMGD);
	});

	it("Calculates NMF in private process diagram", () => {
		const xmlDoc = new DOMParser().parseFromString(xmlStr, "text/xml");
		const result = NMF.calculateFn(xmlDoc);

		expect(result).toEqual(expectedNMF);
	});

	it("Calculates NOA in private process diagram", () => {
		const xmlDoc = new DOMParser().parseFromString(xmlStr, "text/xml");
		const result = NOA.calculateFn(xmlDoc);

		expect(result).toEqual(expectedNOA);
	});

	it("Calculates NOAJS in private process diagram", () => {
		const xmlDoc = new DOMParser().parseFromString(xmlStr, "text/xml");
		const result = NOAJS.calculateFn(xmlDoc);

		expect(result).toEqual(expectedNOAJS);
	});

	it("Calculates NSFA in private process diagram", () => {
		const xmlDoc = new DOMParser().parseFromString(xmlStr, "text/xml");
		const result = NSFA.calculateFn(xmlDoc);

		expect(result).toEqual(expectedNSFA);
	});

	it("Calculates NSFE in private process diagram", () => {
		const xmlDoc = new DOMParser().parseFromString(xmlStr, "text/xml");
		const result = NSFE.calculateFn(xmlDoc);

		expect(result).toEqual(expectedNSFE);
	});

	it("Calculates NSFG in private process diagram", () => {
		const xmlDoc = new DOMParser().parseFromString(xmlStr, "text/xml");
		const result = NSFG.calculateFn(xmlDoc);

		expect(result).toEqual(expectedNSFG);
	});

	it("Calculates TNG in private process diagram", () => {
		const xmlDoc = new DOMParser().parseFromString(xmlStr, "text/xml");
		const result = TNG.calculateFn(xmlDoc);

		expect(result).toEqual(expectedTNG);
	});

	it("Calculates TS in private process diagram", () => {
		const xmlDoc = new DOMParser().parseFromString(xmlStr, "text/xml");
		const result = TS.calculateFn(xmlDoc);

		expect(result).toEqual(expectedTS);
	});
});
