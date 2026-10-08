import js from "@eslint/js";
import globals from "globals";
import html from "eslint-plugin-html";

const shared = Object.fromEntries([
  "PROJECTS", "SITE", "initReveal"
].map(name => [name, "readonly"]));

export default [
  { ignores: ["dist/**", "node_modules/**", ".claude/**", "docs/evidence/**"] },
  {
    files: ["*.js", "*.html"],
    ignores: ["convert-tokens-to-css.js"],
    plugins: { html },
    languageOptions: {
      sourceType: "script",
      globals: { ...globals.browser, ...shared }
    },
    rules: { ...js.configs.recommended.rules }
  },
  {
    files: ["data.js"],
    languageOptions: { globals: { PROJECTS: "off" } }
  },
  {
    files: ["site.js"],
    languageOptions: { globals: { SITE: "off" } }
  },
  {
    files: ["common.js"],
    languageOptions: { globals: { initReveal: "off" } }
  },
  {
    files: ["*.mjs", "scripts/**/*.mjs", "convert-tokens-to-css.js"],
    languageOptions: { globals: globals.node },
    rules: { ...js.configs.recommended.rules }
  },
  {
    files: ["convert-tokens-to-css.js"],
    languageOptions: { sourceType: "commonjs" }
  }
];
