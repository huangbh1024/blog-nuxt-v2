import { Blog } from "~/types/blog";
import type { Response } from "~/types/reponse";
export default defineEventHandler(async event => {
	const baseURL = import.meta.env.PROD
		? "https://api.huangbh.cn"
		: "http://127.0.0.1:7001";
	const {
		page = 1,
		size = 3,
		orderBy = "createdAt",
		order = "ASC",
		keyword = ""
	} = getQuery(event);
	const { data } = await $fetch<Response<{ records: Blog[]; total: number }>>(
		`${baseURL}/blog`,
		{
			method: "GET",
			query: { page, size, orderBy, order, keyword }
		}
	);

	return data;
});
