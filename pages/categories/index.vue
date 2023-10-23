<template>
	<main class="container max-w-5xl mx-auto text-zinc-600">
		<CategoryHero />
		<div class="flex flex-wrap px-6 mt-12 gap-3">
			<template v-for="topic in topics" :key="topic">
				<CategoryCard :title="topic" />
			</template>
		</div>
	</main>
</template>
<script lang="ts" setup>
import type { Category } from "~/types/category";
const { data } = await useAsyncData<{ records: Category[]; total: number }>(
	"categories",
	() => $fetch("/api/category", { method: "GET" })
);
const topics = computed(() => data.value?.records.map(item => item.name) ?? []);
</script>
