<template>
	<main class="container max-w-5xl mx-auto text-zinc-600">
		<BlogHero />
		<div class="px-3">
			<input
				v-model="keyword"
				placeholder="Search"
				type="text"
				class="block w-full bg-[#F1F2F4] dark:bg-zinc-800 dark:placeholder-zinc-500 text-zinc-300 rounded-md border-gray-300 dark:border-gray-800 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
			/>
		</div>
		<ClientOnly>
			<div v-auto-animate class="space-y-5 my-5">
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
				<BlogArchive v-if="postData.length <= 0" />
			</div>
			<template #fallback>
				<BlogLoader />
				<BlogLoader />
			</template>
		</ClientOnly>
		<div class="flex justify-center items-center space-x-6">
			<button :disabled="page <= 1" @click="onPreviousPageClick">
				<Icon
					name="mdi:code-less-than"
					size="30"
					:class="{ 'text-sky-700 dark:text-sky-400': page > 1 }"
				/>
			</button>
			<p>{{ page }} / {{ totalPage }}</p>
			<button :disabled="page >= totalPage" @click="onNextPageClick">
				<Icon
					name="mdi:code-greater-than"
					size="30"
					:class="{ 'text-sky-700 dark:text-sky-400': page < totalPage }"
				/>
			</button>
		</div>
	</main>
</template>
<script lang="ts" setup>
import dayjs from "dayjs";
const size = ref(3);
const page = ref(1);
const keyword = ref("");
const { data, refresh } = await useAsyncData("postList", () =>
	$fetch("/api/blog", {
		method: "GET",
		query: { page: page.value, size: size.value, keyword: keyword.value }
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
const search = useDebounce(() => refresh(), 500);
watch(keyword, () => {
	page.value = 1;
	// 防抖 防止接口请求过多
	search();
});
const totalPost = computed(() => data.value?.total ?? 0);
const totalPage = computed(() => {
	if (totalPost.value <= size.value) return 1;
	else return Math.ceil(totalPost.value / size.value);
});
const onPreviousPageClick = () => {
	if (page.value > 1) {
		page.value -= 1;
		refresh();
	}
};
const onNextPageClick = () => {
	if (page.value < totalPage.value) {
		page.value += 1;
		refresh();
	}
};
</script>
