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
					:date="post.date"
					:description="post.description"
					:image="post.image"
					:alt="post.alt"
					:og-image="post.ogImage"
					:tags="post.tags"
					:published="post.published"
				/>
			</template>
			<template v-if="recentPostData.length === 0">
				<BlogEmpty />
			</template>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { siteConfig } from "~/configs/site.config";
const recentPostData = [
	{
		path: "/blogs/1",
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
		path: "/blogs/2",
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
		path: "/blogs/3",
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
</script>
