<template>
	<div>
		<p class="text-black dark:text-zinc-300 text-2xl py-1 font-semibold">
			黄某人
		</p>
		<p class="py-2 dark:text-zinc-300">
			一个前端开发从业者，喜欢编程，喜欢分享，喜欢记录生活点滴
		</p>
		<div class="my-3 space-x-3 pb-3">
			<NuxtLink
				to="https://github.com/huangbh1024"
				target="_blank"
				class="p-2 bg-gray-300 text-gray-800 rounded-md"
				aria-label="github"
			>
				<Icon name="fa:github" size="1em" />
			</NuxtLink>
			<NuxtLink
				to="https://space.bilibili.com/326776280"
				target="_blank"
				class="p-2 bg-gray-300 text-gray-800 rounded-md"
				aria-label="bilibili"
			>
				<Icon name="simple-icons:bilibili" size="1em" />
			</NuxtLink>
			<!-- <NuxtLink
				to=""
				target="_blank"
				class="p-2 bg-gray-300 text-gray-800 rounded-md"
				aria-label="qq"
			>
				<Icon name="mingcute:qq-fill" size="1em" />
			</NuxtLink>
			<NuxtLink
				to=""
				target="_blank"
				class="p-2 bg-gray-300 text-gray-800 rounded-md"
				aria-label="wechat"
			>
				<Icon name="fa:wechat" size="1em" />
			</NuxtLink> -->
		</div>
	</div>
</template>
