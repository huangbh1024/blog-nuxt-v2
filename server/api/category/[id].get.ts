import { Blog } from "~/types/blog";
import { Response } from "~/types/reponse";

export default defineEventHandler(async event => {
	const id = getRouterParam(event, "id");
	const baseURL = event.context.baseURL;
	const { data } = await $fetch<
		Response<{ records: Blog[]; total: number; tagName: string }>
	>(`${baseURL}/tag/${id}/blog`, { method: "GET" });
	return data;
});
