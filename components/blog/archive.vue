<script lang="ts" setup>
const { t } = useI18n();
interface Props {
	path?: string;
	title?: string;
	createdAt?: string;
	description?: string;
	image?: string;
	alt?: string;
	tags?: Array<string>;
}

const props = withDefaults(defineProps<Props>(), {
	path: "/",
	title: "",
	createdAt: "...",
	description: "",
	image: "/not-found.jpg",
	alt: "not-found",
	tags: () => []
});
const titleWithDefault = computed(() => props.title || t("base.contentEmpty"));
const descriptionWithDefault = computed(
	() => props.description || t("base.contentEmpty")
);
</script>

<template>
	<article
		class="group border dark:border-gray-800 m-2 rounded-2xl overflow-hidden shadow-sm text-zinc-700 dark:text-zinc-300"
	>
		<NuxtLink :to="path" class="grid grid-cols-1 sm:grid-cols-10 gap-1">
			<div class="sm:col-span-3">
				<NuxtImg
					class="h-full w-full object-cover object-center rounded-t-2xl sm:rounded-l-2xl sm:rounded-t-none shadow-lg group-hover:scale-[1.02] transition-all duration-500"
					:src="image"
					:alt="alt"
				/>
			</div>
			<div class="sm:col-span-7 p-5">
				<h2
					class="text-xl font-semibold text-black dark:text-zinc-300 pb-1 group-hover:text-sky-700 dark:group-hover:text-sky-400"
				>
					{{ titleWithDefault }}
				</h2>
				<p class="text-ellipsis line-clamp-2">
					{{ descriptionWithDefault }}
				</p>
				<div
					class="text-black dark:text-zinc-300 text-sm mt-2 mb-1 md:flex md:space-x-6"
				>
					<div class="flex items-center">
						<LogoDate />
						<p>{{ createdAt }}</p>
					</div>
					<div class="flex items-center gap-1 flex-wrap">
						<LogoTag />
						<p v-for="tag in tags" :key="tag">
							{{ tag }}
						</p>
					</div>
				</div>
				<div
					class="flex group-hover:underline text-sky-700 dark:text-sky-400 items-center pt-2"
				>
					<p>{{ $t("base.readMore") }}</p>
					<LogoArrow />
				</div>
			</div>
		</NuxtLink>
	</article>
</template>
