export default defineEventHandler(async event => {
	const baseURL = import.meta.env.PROD
		? "https://api.huangbh.cn"
		: "http://127.0.0.1:7001";
	const id = getRouterParam(event, "id");
	const res = await $fetch(`${baseURL}/blog/${id}`, {
		method: "GET"
	});
	return res;
});
