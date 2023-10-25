<script lang="ts" setup>
interface Props {
	path?: string;
	title?: string;
	createdAt?: string;
	description?: string;
	image?: string;
	tags?: Array<string>;
	alt?: string;
}

const { t } = useI18n();

const props = withDefaults(defineProps<Props>(), {
	path: "/",
	title: "",
	createdAt: "...",
	description: "",
	image: "/not-found.jpg",
	tags: () => [],
	alt: "not-found"
});
const titleWithDefault = computed(() => props.title || t("base.contentEmpty"));
const descriptionWithDefault = computed(
	() => props.description || t("base.contentEmpty")
);
</script>

<template>
	<article
		class="group border dark:border-gray-800 m-2 overflow-hidden rounded-2xl shadow-sm text-zinc-700 dark:text-zinc-300"
	>
		<NuxtLink :to="path">
			<NuxtImg
				class="lg:h-48 md:h-36 w-full object-cover object-center rounded-t-2xl shadow-lg group-hover:scale-[1.02] transition-all duration-500"
				:src="image"
				:alt="alt"
			/>
			<div class="px-3 pb-4">
				<div class="text-black dark:text-zinc-300 pt-3 pb-2">
					<div class="flex items-center">
						<LogoDate />
						{{ createdAt }}
					</div>
					<div class="flex items-center gap-1 flex-wrap">
						<LogoTag />
						<template v-for="tag in tags" :key="tag">
							<span>{{ tag }}</span>
						</template>
					</div>
				</div>
				<h2
					class="text-xl font-semibold text-black dark:text-zinc-300 pb-1 group-hover:text-sky-700 dark:group-hover:text-sky-400"
				>
					{{ titleWithDefault }}
				</h2>
				<p class="text-ellipsis line-clamp-2 text-base">
					{{ descriptionWithDefault }}
				</p>
				<div
					class="flex group-hover:underline text-sky-700 dark:text-sky-400 items-center py-2"
				>
					<p>{{ $t("base.readMore") }}</p>
					<LogoArrow />
				</div>
			</div>
		</NuxtLink>
	</article>
</template>
