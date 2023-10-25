export const useSiteConfig = () => {
	const { t } = useI18n();
	const siteConfig = computed(() => ({
		siteName: "黄某人's Blog",
		menuList: [
			{ key: 0, name: t("menus.blogs"), path: "blogs" },
			{ key: 1, name: t("menus.categories"), path: "categories" },
			{ key: 2, name: t("menus.archives"), path: "archives" },
			{ key: 3, name: t("menus.about"), path: "about" }
		],
		indexInfo: {
			title: t("indexInfo.title"),
			content: t("indexInfo.content"),
			recent: t("indexInfo.recent"),
			trending: t("indexInfo.trending")
		},
		blogInfo: {
			title: t("blogInfo.title"),
			content: t("blogInfo.content")
		},
		categoryInfo: {
			title: t("categoryInfo.title"),
			content: t("categoryInfo.content")
		}
	}));
	return { siteConfig };
};
