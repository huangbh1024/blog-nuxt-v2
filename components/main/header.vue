<template>
	<div class="py-5 border-b dark:border-gray-800 font-semibold">
		<div
			class="flex px-6 container max-w-5xl justify-between mx-auto items-baseline"
		>
			<ul class="flex items-baseline space-x-5">
				<li class="text-base sm:text-2xl font-bold">
					<NuxtLink to="/" :class="{ underline: path === '' }">
						黄某人's Blog
					</NuxtLink>
				</li>
			</ul>
			<ul class="flex items-center space-x-3 sm:space-x-6 text-sm sm:text-lg">
				<li>
					<NuxtLink to="/blogs" :class="{ underline: path === 'blogs' }">
						博客
					</NuxtLink>
				</li>
				<li>
					<NuxtLink
						to="/categories"
						:class="{ underline: path === 'categories' }"
					>
						分类
					</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/archives" :class="{ undefline: path === 'archives' }">
						归档
					</NuxtLink>
				</li>
				<li title="About Me" :class="{ underline: path === 'about' }">
					<NuxtLink to="/about" aria-label="About me"> 关于 </NuxtLink>
				</li>
				<li>
					<button
						class="hover:scale-110 transition-all ease-out hover:cursor-pointer"
						@click="toogleTheme"
					>
						测试主题切换
					</button>
				</li>
			</ul>
		</div>
	</div>
</template>

<script lang="ts" setup>
const route = useRoute();
const path = computed(() => route.fullPath.replace("/", ""));
const isDark = usePreferredDark();
const toggleDark = () => {
	const root = document.documentElement;
	isDark.value = root.classList.contains("dark");
	root.classList.remove(isDark.value ? "dark" : "light");
	root.classList.add(isDark.value ? "light" : "dark");
};
const toggleViewTransition = (event: MouseEvent) => {
	const x = event.clientX;
	const y = event.clientY;
	const endRadius = Math.hypot(
		Math.max(x, innerWidth - x),
		Math.max(y, innerHeight - y)
	);
	const clipPath = [
		`circle(0px at ${x}px ${y}px)`,
		`circle(${endRadius}px at ${x}px ${y}px)`
	];
	// @ts-expect-error: Transition API
	const transition = document.startViewTransition(async () => {
		toggleDark();
		await nextTick();
	});
	transition.ready.then(() => {
		document.documentElement.animate(
			{
				clipPath: isDark.value ? [...clipPath].reverse() : clipPath
			},
			{
				duration: 300,
				easing: "ease-in",
				pseudoElement: isDark.value
					? "::view-transition-old(root)"
					: "::view-transition-new(root)"
			}
		);
	});
};
const toogleTheme = (event: MouseEvent) => {
	// @ts-expect-error: Transition API
	const isSupport =
		document.startViewTransition &&
		!window.matchMedia("(prefers-reduced-motion: reduce)").matches;

	if (!isSupport) {
		toggleDark();
		return;
	}
	toggleViewTransition(event);
};
</script>
