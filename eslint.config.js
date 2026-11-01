// @ts-check
import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist/**", "node_modules/**", "uploads/**"] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.ts"],
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_", caughtErrorsIgnorePattern: "^_" },
      ],
    },
  },
  {
    // The smoke test reads loosely-typed JSON responses on purpose: it asserts
    // on whatever the API returns, so `any` there is the honest type.
    files: ["src/scripts/smoke-test.ts", "src/scripts/smoke/**/*.ts"],
    rules: { "@typescript-eslint/no-explicit-any": "off" },
  }
);
