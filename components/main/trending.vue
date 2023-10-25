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
					:created-at="post.createdAt"
					:description="post.description"
					:image="post.image"
					:alt="post.alt"
					:tags="post.tags"
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
import { useSiteConfig } from "~/configs/useSiteConfig";
const { siteConfig } = useSiteConfig();
const { data } = await useAsyncData("trendingPosts", () =>
	$fetch("/api/blog", {
		method: "GET",
		query: { page: 1, size: 3, orderBy: "viewCount", order: "DESC" }
	})
);
const postData = computed(
	() =>
		data.value?.records.map(item => ({
			...item,
			path: `/blogs/${item.id}`,
			createdAt: dayjs(item.createdAt).format("YYYY-MM-DD"),
			alt: item.title
		})) ?? []
);
</script>
