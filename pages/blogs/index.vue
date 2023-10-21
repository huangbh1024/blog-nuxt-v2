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
		<div class="space-y-5 my-5">
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
			<!-- <BlogLoder /> -->
		</div>
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
const postData = [
	{
		path: "/article/1",
		title: "如何构建响应式网站",
		description: "学习使用HTML和CSS构建响应式网站的基础知识。",
		image: "图片1.jpg",
		alt: "响应式网站",
		ogImage: "og-图片1.jpg",
		date: "2023-10-15",
		tags: ["Web开发", "HTML", "CSS"],
		published: true
	},
	{
		path: "/article/2",
		title: "入门JavaScript",
		description: "针对网页开发的JavaScript编程的初学者指南。",
		image: "图片2.jpg",
		alt: "JavaScript 代码",
		ogImage: "og-图片2.jpg",
		date: "2023-10-12",
		tags: ["Web开发", "JavaScript"],
		published: true
	},
	{
		path: "/article/3",
		title: "TypeScript基础知识",
		description: "探讨TypeScript的基础知识以及对开发人员的好处。",
		image: "图片3.jpg",
		alt: "TypeScript 标志",
		ogImage: "og-图片3.jpg",
		date: "2023-10-08",
		tags: ["Web开发", "TypeScript"],
		published: true
	}
];
const pageNumber = ref(1);
const size = ref(4);
const onPreviousPageClick = () => {
	if (pageNumber.value > 1) {
		pageNumber.value -= 1;
	}
};
const totalPage = computed(() => {
	if (postData.length <= size.value) return 1;
	else return postData.length / size.value;
});
const onNextPageClick = () => {
	if (pageNumber.value < totalPage.value) {
		pageNumber.value += 1;
	}
};
</script>
