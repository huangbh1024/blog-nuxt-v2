<template>
	<div class="py-5 border-b dark:border-gray-800 font-semibold">
		<div
			class="flex px-6 container max-w-5xl justify-between mx-auto items-baseline"
		>
			<ul class="flex items-baseline space-x-5">
				<li class="text-base sm:text-2xl font-bold">
					<NuxtLink to="/" :class="{ underline: path === '' }">
						{{ siteConfig.siteName }}
					</NuxtLink>
				</li>
			</ul>
			<ul class="flex items-center space-x-3 sm:space-x-6 text-sm sm:text-lg">
				<li v-for="menu in siteConfig.menuList" :key="menu.key">
					<NuxtLink
						:to="`/${menu.path}`"
						:class="{ underline: path === menu.path }"
					>
						{{ menu.name }}
					</NuxtLink>
				</li>
			</ul>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { useSiteConfig } from "~/configs/useSiteConfig";
const { siteConfig } = useSiteConfig();
const route = useRoute();
const path = computed(() => route.fullPath.replace("/", ""));
</script>
