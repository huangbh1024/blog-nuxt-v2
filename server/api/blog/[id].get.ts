import { Blog } from "~/types/blog";
import { Response } from "~/types/reponse";

export default defineEventHandler(async event => {
	const baseURL = import.meta.dev
		? "http://127.0.0.1:7001"
		: "https://api.huangbh.cn";
	const id = getRouterParam(event, "id");
	const { data } = await $fetch<Response<Blog>>(`${baseURL}/blog/${id}`, {
		method: "GET"
	});
	return data;
});
