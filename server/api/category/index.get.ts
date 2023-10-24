import { Category } from "~/types/category";
import { Response } from "~/types/reponse";

export default defineEventHandler(async () => {
	const baseURL = import.meta.env.PROD
		? "https://api.huangbh.cn"
		: "http://127.0.0.1:7001";
	const { data } = await $fetch<
		Response<{ records: Category[]; total: number }>
	>(`${baseURL}/tag`, { query: { page: 1, size: 999 } });
	return data;
});
