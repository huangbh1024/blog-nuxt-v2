<template>
	<div class="container mx-auto">
		<div class="p-6 my-4 mx-3 rounded-md bg-gray-200 dark:bg-zinc-800">
			<h1
				class="text-black dark:text-zinc-300 font-semibold leading-tight text-4xl md:text-5xl my-5"
			>
				#{{ category }}
			</h1>
		</div>
	</div>
</template>

<script lang="ts" setup>
defineProps<{ category: string }>();
</script>
