const nextJest = require("next/jest");

const createJestConfig = nextJest({ dir: "./" });

const customJestConfig = {
	setupFilesAfterEnv: ["./jest.setup.js"],
	// absolute imports / path alias config
	// moduleNameMapper: {
	// 	'^@/components/(.*)$': '<rootDir>/components/$1',
	// }
	// IF using TypeScript
	// moduleDirectories: ["node_modules", "./"],
	// testEnvironment: "jest-environment-jsdom",
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
