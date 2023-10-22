module.exports = {
	darkMode: "class",
	content: [],
	theme: {
		extend: {
			fontFamily: {
				spacegrotesk: ["Space Grotesk", "sans-serif"]
			}
		}
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("@tailwindcss/forms"),
		require("daisyui")
	],
	daisyui: {
		themes: ["light", "dark"]
	}
};
