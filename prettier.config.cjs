/** @type {import("prettier").Config} */
module.exports = {
  semi: true, // Always end statements with semicolons
  singleQuote: true, // Use single quotes instead of double
  trailingComma: 'all', // Add trailing commas where valid in ES5 (objects, arrays, etc.)
  printWidth: 100, // Max line length before wrapping
  tabWidth: 2, // Use 2 spaces for tabs
  useTabs: false, // Use spaces, not tabs
  bracketSpacing: true, // Print spaces between brackets in object literals
  bracketSameLine: false, // Put closing > of JSX on its own line
  arrowParens: 'always', // Always include parens around arrow function params
  plugins: ['prettier-plugin-tailwindcss'], // Ensure Tailwind classes are auto-sorted
};
// This configuration is tailored for a JavaScript/TypeScript project using Prettier