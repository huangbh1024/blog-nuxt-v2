<template>
	<div class="container mx-auto">
		<div class="grid grid-cols-1 sm:grid-cols-2 items-center">
			<div class="px-6">
				<h1
					class="text-black dark:text-zinc-300 font-semibold leading-tight text-4xl md:text-5xl my-5"
				>
					{{ siteConfig.indexInfo.title ?? "" }}
				</h1>
				<p class="dark:text-zinc-300">
					{{ siteConfig.indexInfo.content ?? "" }}
				</p>
			</div>
			<div class="px-6 justify-self-center">
				<LogoDog />
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { useSiteConfig } from "~/configs/useSiteConfig";
const { siteConfig } = useSiteConfig();
</script>
