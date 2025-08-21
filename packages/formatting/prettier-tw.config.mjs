/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
export const config = {
  trailingComma: "all",
  semi: true,
  printWidth: 80,
  plugins: ["prettier-plugin-tailwindcss"],
  // tailwindStylesheet: "@repo/tailwind-config/nf-styles",
  tailwindFunctions: ["clsx", "cva"],
};
