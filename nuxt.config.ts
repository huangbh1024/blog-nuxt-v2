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
		head: {
			charset: "utf-8",
			viewport: "width=device-width,initial-scale=1",
			title: "黄某人's Blog",
			meta: [{ name: "description", content: "黄某人的博客" }]
		}
	},
	typescript: { strict: true },

	colorMode: {
		preference: "system",
		fallback: "light",
		classSuffix: "",
		dataValue: "theme"
	},
	css: ["highlight.js/styles/monokai-sublime.css"]
});
