<template>
	<div class="px-6 container max-w-5xl mx-auto sm:grid grid-cols-12 gap-x-12">
		<div class="col-span-12 lg:col-span-9">
			<BlogHeader
				:title="detail.title"
				:image="detail.image"
				:alt="detail.alt"
				:date="detail.date"
				:description="detail.description"
				:tags="detail.tags"
			/>
			<div
				class="prose prose-pre:max-w-xs sm:prose-pre:max-w-full prose-sm sm:prose-base md:prose-lg prose-h1:no-underline max-w-5xl mx-auto prose-zinc dark:prose-invert prose-img:rounded-lg"
			>
				<main v-html="content"></main>
			</div>
		</div>
		<BlogToc />
	</div>
</template>
<script lang="ts" setup>
import dayjs from "dayjs";
import { parse } from "./parse";
const route = useRoute();
const id = computed(() => Number(route.params.id as string));
const { data } = await useAsyncData<{
	id: number;
	title: string;
	description: string;
	image: string;
	content: string;
	tags: string;
	createDate: string;
	isPublish: boolean;
}>("postDetail", () =>
	$fetch("http://120.77.170.152:7001/blog/" + id.value, { method: "GET" })
);
const detail = computed(() => ({
	...data.value,
	date: dayjs(data.value?.createDate).format("YYYY-MM-DD"),
	tags: data.value?.tags.split(","),
	alt: data.value?.title,
	ogImage: data.value?.image,
	published: data.value?.isPublish
}));
// 字符串的 /n 转义
const content = parse(detail.value!.content!.replace(/\\n/g, "\n"));
</script>
