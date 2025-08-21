import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import turboPlugin from "eslint-plugin-turbo";
import tseslint from "typescript-eslint";
import onlyWarn from "eslint-plugin-only-warn";
import perfectionist from "eslint-plugin-perfectionist";

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config[]}
 * */
export const config = [
  js.configs.recommended,
  eslintConfigPrettier,
  perfectionist.configs["recommended-natural"],
  ...tseslint.configs.strict,
  {
    plugins: {
      turbo: turboPlugin,
    },
    rules: {
      "turbo/no-undeclared-env-vars": "warn",
    },
  },
  {
    plugins: {
      onlyWarn,
    },
  },
  {
    rules: {
      "perfectionist/sort-imports": [
        "error",
        {
          type: "natural",
          order: "asc",
          groups: [
            "side-effect",
            ["type-builtin", "value-builtin"],
            ["type-external", "value-external"],
            ["type-internal", "value-internal"],
            ["type-parent", "value-parent"],
            ["type-sibling", "value-sibling"],
            ["type-index", "value-index"],
            "object",
            "unknown",
          ],
          newlinesBetween: 1,
          internalPattern: ["^@repo/.+"],
        },
      ],
    },
  },
  {
    ignores: ["dist/**"],
  },
];
