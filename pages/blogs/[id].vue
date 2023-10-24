<template>
	<div class="px-6 container max-w-5xl mx-auto sm:grid grid-cols-12 gap-x-12">
		<div class="col-span-12 lg:col-span-9">
			<BlogHeader
				:title="detail.title"
				:image="detail.image"
				:alt="detail.alt"
				:created-at="detail.createdAt"
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
const { data } = await useAsyncData("detail", () =>
	$fetch(`/api/blog/${id.value}`, { method: "GET" })
);

const detail = computed(() => ({
	...data.value,
	createdAt: dayjs(data.value?.createdAt).format("YYYY-MM-DD"),
	alt: data.value?.title
}));
// 字符串的 /n 转义
const content = parse(detail.value!.content!.replace(/\\n/g, "\n"));
</script>
