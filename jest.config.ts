import type { Config } from "jest";

const config: Config = {
    preset: "ts-jest/presets/js-with-ts",
    // transform: {
    //     // ".(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
    //     //     "<rootDir>/mocks/file-mock.ts",
    //     // ".(css|less)$": "<rootDir>/mocks/style-mock.ts",
    //     // "^.+\\.[t|j]sx?$": "ts-jest",
    //     "^.+\\.[t|j]s$": "ts-jest",
    // },
    // testRegex: "(/tests/.*|(\\.|/)(test|spec))\\.(js|ts)$",
    testEnvironment: "node",
    verbose: true,
    moduleFileExtensions: ["ts", "js"],
    resolver: "jest-ts-webcompat-resolver",
};

export default config;
