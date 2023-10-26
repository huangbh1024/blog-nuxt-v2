// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	modules: [
		"@nuxtjs/tailwindcss",
		"@vueuse/nuxt",
		"nuxt-icon",
		"@nuxt/image",
		"@nuxtjs/color-mode",
		"nuxt-lodash",
		"@nuxtjs/i18n",
		"nuxt-socket-io"
	],
	app: {
		pageTransition: { name: "page", mode: "out-in" },
		layoutTransition: { name: "layout", mode: "out-in" },
		head: {
			charset: "utf-8",
			viewport: "width=device-width,initial-scale=1",
			title: "黄某人's Blog",
			meta: [{ name: "description", content: "黄某人的博客" }]
		},
		cdnURL: "https://cdn.huangbh.cn"
	},
	typescript: { strict: true },

	colorMode: {
		preference: "system",
		fallback: "light",
		classSuffix: "",
		dataValue: "theme"
	},
	i18n: { vueI18n: "./i18n.config.ts" },
	css: ["highlight.js/styles/monokai-sublime.css"],
	io: {
		sockets: [
			{
				name: "onlineCount",
				url: "https://api.huangbh.cn/onlineCount"
			}
		]
	}
});
