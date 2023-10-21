<template>
	<div
		class="flex flex-col dark:text-zinc-300 my-5 md:my-0 md:justify-self-center"
	>
		<p class="text-black dark:text-zinc-300 text-base font-semibold">
			快速向导
		</p>
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
import { siteConfig } from "~/configs/site.config";
</script>
