import { Category } from "~/types/category";
import { Response } from "~/types/reponse";

export default defineEventHandler(async () => {
	const baseURL = import.meta.dev
		? "http://127.0.0.1:7001"
		: "https://api.huangbh.cn";
	const { data } = await $fetch<
		Response<{ records: Category[]; total: number }>
	>(`${baseURL}/tag`, { query: { page: 1, size: 999 } });
	return data;
});
