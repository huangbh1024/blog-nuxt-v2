<template>
	<main class="container max-w-5xl mx-auto text-zinc-600">
		<CategoryTopic :category="categoryName" />
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
			<template v-for="post in postData" :key="post.title">
				<BlogCard
					:path="post.path"
					:title="post.title"
					:description="post.description"
					:image="post.image"
					:alt="post.alt"
					:tags="post.tags"
					:created-at="post.createdAt"
				/>
			</template>
			<template v-if="postData.length === 0">
				<BlogEmpty />
			</template>
		</div>
	</main>
</template>

<script lang="ts" setup>
import dayjs from "dayjs";
const route = useRoute();
const id = computed(() => Number(route.params.id as string));
const { data } = await useAsyncData("categoryPosts", () =>
	$fetch(`/api/category/${id.value}`, { method: "GET" })
);
const categoryName = computed(() => data.value?.tagName ?? "");
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
