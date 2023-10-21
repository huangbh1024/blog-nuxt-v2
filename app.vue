<template>
	<div class="bg-[#F1F2F4] dark:text-zinc-300 dark:bg-[#151818]">
		<NuxtLayout>
			<NuxtLoadingIndicator />
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>

<script lang="ts" setup></script>
<style>
html.dark {
	color-scheme: dark;
}
::view-transition-old(root),
::view-transition-new(root) {
	mix-blend-mode: normal;
	animation: none;
}
/* 进入dark模式和退出dark模式时，两个图像的位置顺序正好相反 */
.dark::view-transition-old(root) {
	z-index: 1;
}
.dark::view-transition-new(root) {
	z-index: 999;
}
::view-transition-old(root) {
	z-index: 999;
}
::view-transition-new(root) {
	z-index: 1;
}
.page-enter-active,
.page-leave-active {
	transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
	opacity: 0;
	filter: blur(1rem);
}

.layout-enter-active,
.layout-leave-active {
	transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
	opacity: 0;
	filter: blur(1rem);
}
</style>
