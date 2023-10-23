<template>
	<div class="pb-10">
		<div class="px-6">
			<div class="flex flex-row items-center space-x-3 pt-5 pb-3">
				<Icon
					name="mdi:star-three-points-outline"
					size="2em"
					class="text-black dark:text-zinc-300"
				/>
				<h2 class="text-4xl font-semibold text-black dark:text-zinc-300">
					{{ siteConfig.indexInfo.recent ?? "近况" }}
				</h2>
			</div>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
			<template v-for="post in recentPostData" :key="post.title">
				<BlogCard
					:path="post.path"
					:title="post.title"
					:created-at="post.createdAt"
					:description="post.description"
					:image="post.image"
					:alt="post.alt"
					:tags="post.tags"
				/>
			</template>
			<template v-if="recentPostData?.length === 0">
				<BlogEmpty />
			</template>
		</div>
	</div>
</template>

<script lang="ts" setup>
import dayjs from "dayjs";
import { siteConfig } from "~/configs/site.config";
import type { Blog } from "~/types/blog";
const { data } = await useAsyncData<{ records: Blog[]; total: number }>(
	"recentPost",
	() => $fetch("/api/blog", { method: "GET", query: { page: 1, size: 3 } })
);
const recentPostData = computed(
	() =>
		data.value?.records.map(item => ({
			...item,
			path: `/blogs/${item.id}`,
			createdAt: dayjs(item.createdAt).format("YYYY-MM-DD"),
			alt: item.title
		})) ?? []
);
</script>
