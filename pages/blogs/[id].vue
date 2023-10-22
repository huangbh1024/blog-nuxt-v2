<template>
	<div class="px-6 container max-w-5xl mx-auto sm:grid grid-cols-12 gap-x-12">
		<div class="col-span-12 lg:col-span-9">
			<BlogHeader
				:title="data.title"
				:image="data.image"
				:alt="data.alt"
				:date="data.date"
				:description="data.description"
				:tags="data.tags"
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
import { parse } from "./parse";

const data = {
	path: "/blogs/3",
	title: "TypeScript基础知识",
	description: "探讨TypeScript的基础知识以及对开发人员的好处。",
	image: "图片3.jpg",
	alt: "TypeScript 标志",
	ogImage: "og-图片3.jpg",
	date: "2023-10-08",
	tags: ["Web开发", "TypeScript"],
	published: true,
	content: "测试内容"
};

// 字符串的 /n 转义
const content = parse(data.content.replace(/\\n/g, "\n"));
</script>
