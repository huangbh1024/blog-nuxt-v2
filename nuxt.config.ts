// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	modules: [
		"@nuxtjs/tailwindcss",
		"@vueuse/nuxt",
		"nuxt-icon",
		"@nuxt/image",
		"@nuxtjs/color-mode",
		"nuxt-lodash"
	],
	app: {
		pageTransition: { name: "page", mode: "out-in" },
		layoutTransition: { name: "layout", mode: "out-in" },
		cdnURL: "https://cdn.huangbh.cn"
	},
	colorMode: {
		preference: "system",
		fallback: "light",
		classSuffix: "",
		dataValue: "theme"
	}
});
