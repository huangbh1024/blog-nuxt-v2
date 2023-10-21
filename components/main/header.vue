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
				<li>
					<button
						class="hover:scale-110 transition-all ease-out hover:cursor-pointer"
						@click="toogleTheme"
					>
						<Icon :name="isDark ? 'icon-park:moon' : 'noto:sun'" size="20" />
					</button>
				</li>
			</ul>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { siteConfig } from "~/configs/site.config";
const route = useRoute();
const path = computed(() => route.fullPath.replace("/", ""));

const isDark = ref(false);
let _isDark: boolean;
const toggleDark = () => {
	const root = document.documentElement;
	_isDark = root.classList.contains("dark");
	isDark.value = !_isDark;
	root.classList.remove(_isDark ? "dark" : "light");
	root.classList.add(_isDark ? "light" : "dark");
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
				clipPath: _isDark ? [...clipPath].reverse() : clipPath
			},
			{
				duration: 300,
				easing: "ease-in",
				pseudoElement: _isDark
					? "::view-transition-old(root)"
					: "::view-transition-new(root)"
			}
		);
	});
};
const toogleTheme = (event: MouseEvent) => {
	const isSupport =
		// @ts-expect-error: Transition API
		document.startViewTransition &&
		!window.matchMedia("(prefers-reduced-motion: reduce)").matches;

	if (!isSupport) {
		toggleDark();
		return;
	}
	toggleViewTransition(event);
};
</script>
