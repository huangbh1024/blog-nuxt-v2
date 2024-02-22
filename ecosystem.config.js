module.exports = {
	apps: [
		{
			name: "blog-nuxt-v2",
			port: "9090",
			exec_mode: "cluster",
			script: "./.output/server/index.mjs"
		}
	]
};
