<template>
	<div
		class="py-5 border-t dark:border-gray-800 mt-5 text-zinc-700 dark:text-zinc-300"
	>
		<div class="px-6 container max-w-5xl mx-auto">
			<div class="grid grid-cols-1 md:grid-cols-3">
				<FooterSite v-if="path === 'about'" />
				<FooterDevloper v-else />
				<FooterLink />
				<FooterConnect />
			</div>

			<div class="border-t dark:border-gray-800 mt-5 text-center p-2">
				© 2020-2023 No Right is reserved.
				<div>
					在线人数: <span>{{ onlineCount }}</span>
				</div>
			</div>
		</div>
	</div>
</template>
<script lang="ts" setup>
const route = useRoute();
const path = computed(() => route.fullPath.replace("/", ""));
const onlineCount = ref(0);
const ctx = useNuxtApp();
onMounted(() => {
	const socket = ctx.$nuxtSocket({});
	socket.on("onlineCount", data => {
		onlineCount.value = data;
	});
});
</script>
