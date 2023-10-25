import { Blog } from "~/types/blog";
import { Response } from "~/types/reponse";

export default defineEventHandler(async event => {
	const baseURL = event.context.baseURL;
	const { data } = await $fetch<Response<{ year: string; blogs: Blog[] }[]>>(
		`${baseURL}/blog/archive`,
		{ method: "GET" }
	);
	return data;
});
