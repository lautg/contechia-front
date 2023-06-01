/** @type {import("prettier").Config} */
const config = {
	singleQuote: true,
	trailingComma: 'all',
	endOfLine: 'auto',
	semi: true,
	tabWidth: 4,
	printWidth: 120,
	useTabs: true,
	plugins: [require.resolve('prettier-plugin-tailwindcss')],
};

module.exports = config;
