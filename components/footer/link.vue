<template>
	<div
		class="flex flex-col dark:text-zinc-300 my-5 md:my-0 md:justify-self-center"
	>
		<p class="text-black dark:text-zinc-300 text-base font-semibold">
			{{ $t("base.quickLink") }}
		</p>
		<NuxtLink class="hover:underline" to="/">{{ $t("menus.home") }}</NuxtLink>
		<NuxtLink
			v-for="menu in siteConfig.menuList"
			:key="menu.name"
			:to="menu.path"
			class="hover:underline"
		>
			{{ menu.name }}
		</NuxtLink>
	</div>
</template>
<script lang="ts" setup>
import { useSiteConfig } from "~/configs/useSiteConfig";
const { siteConfig } = useSiteConfig();
</script>
