<template>
	<div>
		<div class="px-6">
			<div class="flex flex-row items-center space-x-3 pt-5 pb-3">
				<Icon
					name="mdi:star-three-points-outline"
					size="2em"
					class="text-black dark:text-zinc-300"
				/>
				<h2 class="text-4xl font-semibold text-black dark:text-zinc-300">
					{{ siteConfig.indexInfo.trending ?? "热门" }}
				</h2>
			</div>
		</div>
		<div class="grid grid-cols-1">
			<template v-for="post in postData" :key="post.title">
				<BlogArchive
					:path="post.path"
					:title="post.title"
					:date="post.date"
					:description="post.description"
					:image="post.image"
					:alt="post.alt"
					:og-image="post.ogImage"
					:tags="post.tags"
					:published="post.published"
				/>
			</template>
			<template v-if="postData.length === 0">
				<BlogEmpty />
			</template>
		</div>
	</div>
</template>

<script lang="ts" setup>
import dayjs from "dayjs";
import { siteConfig } from "~/configs/site.config";
const { data } = await useAsyncData<{
	records: {
		id: number;
		title: string;
		description: string;
		image: string;
		content: string;
		tags: string;
		createDate: string;
		isPublish: boolean;
	}[];
}>("trendingPosts", () =>
	$fetch("http://120.77.170.152:7001/blog", { method: "GET" })
);
const postData = computed(
	() =>
		data.value?.records.map(item => ({
			...item,
			path: `/blogs/${item.id}`,
			date: dayjs(item.createDate).format("YYYY-MM-DD"),
			tags: item.tags.split(","),
			alt: item.title,
			ogImage: item.image,
			published: item.isPublish
		})) ?? []
);
</script>
