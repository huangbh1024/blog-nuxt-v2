export default defineEventHandler(event => {
	const ssrHeader = new Headers();
	event.context.headers = ssrHeader;
	const reqPath = event.node.req.url;
	if (reqPath && reqPath.startsWith("/api")) {
		event.context.baseURL = import.meta.dev
			? "http://127.0.0.1:7001"
			: "https://api.huangbh.cn";
	}
});
