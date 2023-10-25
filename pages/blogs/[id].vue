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
				<main v-dompurify-html="parseHtml"></main>
			</div>
		</div>
		<BlogToc />
	</div>
</template>
<script lang="ts" setup>
import dayjs from "dayjs";
import { useParse } from "./useParse";
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

// 转义\n \r \t 等字符
const escape = (str: string) => {
	return str.replace(/\\n/g, "\n").replace(/\\r/g, "\r").replace(/\\t/g, "\t");
};

const { parseHtml } = useParse(escape(detail.value!.content as string));
</script>
