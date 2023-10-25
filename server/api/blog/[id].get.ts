import { Blog } from "~/types/blog";
import { Response } from "~/types/reponse";

export default defineEventHandler(async event => {
	const id = getRouterParam(event, "id");
	const baseURL = event.context.baseURL;
	const { data } = await $fetch<Response<Blog>>(`${baseURL}/blog/${id}`, {
		method: "GET"
	});
	return data;
});
