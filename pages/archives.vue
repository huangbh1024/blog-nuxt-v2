<template>
	<main class="container max-w-5xl mx-auto text-zinc-600">
		<ArchiveHero />
		<ul class="px-12">
			<template v-for="item in archiveData" :key="item.year">
				<div class="select-none relative h-20 pointer-events-none">
					<span
						class="text-[8em] text-transparent absolute -left-12 -top-8 font-bold text-stroke-2 text-stroke-hex-aaa opacity-10"
						>{{ item.year }}</span
					>
				</div>
				<div v-for="blog in item.blogs" :key="blog.id">
					<NuxtLink
						class="block font-normal mb-6 mt-2 no-underline cursor-pointer hover:underline"
						:to="blog.path"
					>
						<li
							class="no-underline flex flex-col md:flex-row gap-2 md:items-center"
						>
							<div class="title text-lg leading-[1.2em] flex gap-2 flex-wrap">
								<span class="align-middle">{{ blog.title }}</span>
							</div>
							<div class="flex gap-2 items-center">
								<span class="text-sm opacity-50 whitespace-nowrap">{{
									blog.createdAt
								}}</span>
							</div>
						</li>
					</NuxtLink>
				</div>
			</template>
		</ul>
	</main>
</template>

<script lang="ts" setup>
import dayjs from "dayjs";
const { data } = await useAsyncData("archives", () =>
	$fetch("/api/blog/archive", { method: "GET" })
);
const archiveData = computed(
	() =>
		data.value?.map(item => ({
			...item,
			blogs: item.blogs.map(blog => ({
				...blog,
				path: `/blogs/${blog.id}`,
				createdAt: dayjs(blog.createdAt).format("YYYY-MM-DD")
			}))
		})) ?? []
);
</script>

<style scoped>
.text-stroke-2 {
	-webkit-text-stroke-width: 2px;
}
.text-stroke-hex-aaa {
	--un-text-stroke-opacity: 1;
	-webkit-text-stroke-color: rgb(100 100 100 / var(--un-text-stroke-opacity));
}
</style>
