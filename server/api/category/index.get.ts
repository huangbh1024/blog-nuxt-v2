import { Category } from "~/types/category";
import { Response } from "~/types/reponse";

export default defineEventHandler(async event => {
	const baseURL = event.context.baseURL;
	const { data } = await $fetch<
		Response<{ records: Category[]; total: number }>
	>(`${baseURL}/tag`, { query: { page: 1, size: 999 } });
	return data;
});
