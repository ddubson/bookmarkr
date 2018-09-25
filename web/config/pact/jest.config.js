module.exports = {
  rootDir: "../../",
  transform: {"^.+\\.tsx?$": "ts-jest"},
  setupFiles: ["./config/pact/pactSetup.js"],
  moduleFileExtensions: ["ts", "js"],
  testRegex: "(/test/.*|(\\.|/)(pact))\\.(ts?)$",
  setupTestFrameworkScriptFile: "./config/pact/pactTestWrapper.js"
};