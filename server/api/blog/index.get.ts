import { Blog } from "~/types/blog";
import type { Response } from "~/types/reponse";
export default defineEventHandler(async event => {
	const {
		page = 1,
		size = 3,
		orderBy = "createdAt",
		order = "DESC",
		keyword = ""
	} = getQuery(event);
	const baseURL = event.context.baseURL;
	const { data } = await $fetch<Response<{ records: Blog[]; total: number }>>(
		`${baseURL}/blog`,
		{
			method: "GET",
			query: { page, size, orderBy, order, keyword }
		}
	);

	return data;
});
