export const testEnvironment = "node";
export const testMatch = ["**/tests/**/*.test.ts"];
export const transform = {
  "^.+\\.ts$": "ts-jest",
};
export const moduleFileExtensions = ["ts", "js", "json", "node"];
