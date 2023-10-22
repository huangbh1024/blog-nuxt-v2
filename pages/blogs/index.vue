<template>
	<main class="container max-w-5xl mx-auto text-zinc-600">
		<BlogHero />
		<div class="px-3">
			<input
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
						:date="post.date"
						:description="post.description"
						:image="post.image"
						:alt="post.alt"
						:og-image="post.ogImage"
						:tags="post.tags"
						:published="post.published"
					/>
				</template>
				<BlogArchive
					v-if="postData.length <= 0"
					title="No Post Found"
					image="/not-found.jpg"
				/>
			</div>
			<template #fallback>
				<BlogLoader />
				<BlogLoader />
			</template>
		</ClientOnly>
		<div class="flex justify-center items-center space-x-6">
			<button :disabled="pageNumber <= 1" @click="onPreviousPageClick">
				<Icon
					name="mdi:code-less-than"
					size="30"
					:class="{ 'text-sky-700 dark:text-sky-400': pageNumber > 1 }"
				/>
			</button>
			<p>{{ pageNumber }} / {{ totalPage }}</p>
			<button :disabled="pageNumber >= totalPage" @click="onNextPageClick">
				<Icon
					name="mdi:code-greater-than"
					size="30"
					:class="{ 'text-sky-700 dark:text-sky-400': pageNumber < totalPage }"
				/>
			</button>
		</div>
	</main>
</template>
<script lang="ts" setup>
import dayjs from "dayjs";
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
}>("allPosts", () =>
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
const pageNumber = ref(1);
const size = ref(4);
const onPreviousPageClick = () => {
	if (pageNumber.value > 1) {
		pageNumber.value -= 1;
	}
};
const totalPage = computed(() => {
	if (postData.value.length <= size.value) return 1;
	else return postData.value.length / size.value;
});
const onNextPageClick = () => {
	if (pageNumber.value < totalPage.value) {
		pageNumber.value += 1;
	}
};
</script>
