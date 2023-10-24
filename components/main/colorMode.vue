<template>
	<div
		class="dropdown dropdown-left fixed top-[50%] right-0 translate-y-[-50%] z-[999]"
	>
		<ClientOnly>
			<label
				tabindex="0"
				class="btn :hover-[none] bg-white dark:bg-zinc-800 text-black dark:text-zinc-300"
			>
				<Icon name="icon-park-solid:theme" />
			</label>
			<template #fallback>
				<label
					tabindex="0"
					class="btn bg-white dark:bg-zinc-800 text-black dark:text-zinc-300"
				>
					<Icon name="svg-spinners:180-ring" />
				</label>
			</template>
			<ul
				tabindex="0"
				class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-[100px] text-center"
			>
				<li @click="toggleTheme($event, 'light')">
					<a
						:class="{
							'bg-[#2d343f] text-[#f8fafc] pointer-events-none':
								colorMode.preference === 'light'
						}"
						>亮色</a
					>
				</li>
				<li @click="toggleTheme($event, 'dark')">
					<a
						:class="{
							'bg-[#2d343f] text-[#f8fafc] pointer-events-none':
								colorMode.preference === 'dark'
						}"
						>暗色</a
					>
				</li>
				<li @click="toggleTheme($event, 'system')">
					<a
						:class="{
							'bg-[#2d343f] text-[#f8fafc] pointer-events-none':
								colorMode.preference === 'system'
						}"
						>系统</a
					>
				</li>
			</ul>
		</ClientOnly>
	</div>
</template>

<script lang="ts" setup>
const colorMode = useColorMode();
const systemTheme = usePreferredColorScheme();
let _isDark: boolean;
const toggleDark = (theme: "light" | "dark" | "system") => {
	const root = document.documentElement;
	const currentTheme = root.classList.contains("dark") ? "dark" : "light";
	if (theme === "dark" || theme === "light") {
		if (currentTheme === theme) {
			if (colorMode.preference === "system") {
				colorMode.preference = theme;
			}
			return;
		}
		_isDark = currentTheme === "dark";
		colorMode.preference = theme;
		root.classList.remove(_isDark ? "dark" : "light");
		root.classList.add(_isDark ? "light" : "dark");
	} else {
		if (systemTheme.value === currentTheme) {
			colorMode.preference = "system";
			return;
		}
		if (systemTheme.value === "dark") {
			_isDark = false;
			colorMode.preference = "system";
			root.classList.remove("light");
			root.classList.add("dark");
		} else {
			_isDark = true;
			colorMode.preference = "system";
			root.classList.remove("dark");
			root.classList.add("light");
		}
	}
};
const toggleViewTransition = (
	event: MouseEvent,
	theme: "light" | "dark" | "system"
) => {
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
		toggleDark(theme);
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
const toggleTheme = (event: MouseEvent, theme: "light" | "dark" | "system") => {
	const isSupport =
		// @ts-expect-error: Transition API
		document.startViewTransition &&
		!window.matchMedia("(prefers-reduced-motion: reduce)").matches;

	if (!isSupport) {
		toggleDark(theme);
		return;
	}
	toggleViewTransition(event, theme);
};
</script>
