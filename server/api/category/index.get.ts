export default defineEventHandler(async () => {
	const baseURL = import.meta.env.PROD
		? "https://api.huangbh.cn"
		: "http://127.0.0.1:7001";
	const res = await $fetch(`${baseURL}/tag`, { query: { page: 1, size: 999 } });
	return res;
});
