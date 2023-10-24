<template>
	<article
		class="group border dark:border-gray-800 m-2 rounded-2xl overflow-hidden shadow-lg text-zinc-700"
	>
		<NuxtLink to="/">
			<div
				class="lg:h-48 md:h-36 w-full object-cover object-center group-hover:scale-[1.05] transition-all duration-500"
			>
				<LogoConfused />
			</div>
			<div class="p-5">
				<h2
					class="text-3xl font-semibold text-black dark:text-zinc-300 pb-1 group-hover:text-sky-700 dark:group-hover:text-sky-400"
				>
					没有找到相关内容
				</h2>

				<div
					class="flex group-hover:underline text-sky-700 dark:text-sky-400 items-center pt-2"
				>
					<p>返回主页</p>
					<LogoArrow />
				</div>
			</div>
		</NuxtLink>
	</article>
</template>
