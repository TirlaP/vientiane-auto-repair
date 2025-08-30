/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
   semi: true,
   tabWidth: 3,
   singleQuote: false,
   endOfLine: "crlf",
   plugins: ["prettier-plugin-tailwindcss"],
};

export default config;
