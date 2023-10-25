export default defineI18nConfig(() => ({
	legacy: false,
	locale: "zh-CN",
	fallbackLocale: "zh-CN",
	messages: {
		"zh-CN": {
			menus: {
				home: "首页",
				blogs: "博客",
				categories: "分类",
				archives: "归档",
				about: "关于"
			},
			indexInfo: {
				title: "欢迎访问我的博客",
				content: "这边后续换成一言，实现文字打印效果",
				recent: "近况",
				trending: "热门"
			},
			blogInfo: {
				title: "所有博客",
				content: "在这里接受知识的洗礼吧！"
			},
			categoryInfo: {
				title: "所有分类",
				content: "在这里接受知识的洗礼吧！"
			},
			base: {
				readMore: "阅读更多",
				backToHome: "返回主页",
				contentEmpty: "没有找到相关内容",
				quickLink: "快速链接",
				authorDescription:
					"一个前端开发从业者，喜欢编程，喜欢分享，喜欢记录生活点滴",
				aboutSite: "关于本站",
				aboutSiteContent:
					"这是一个用Nuxt3、TailwindCSS构建的个人博客网站，目前它部署在阿里云服务器。"
			}
		},
		"en-US": {
			menus: {
				home: "Home",
				blogs: "Blogs",
				categories: "Categories",
				archives: "Archives",
				about: "About"
			},
			indexInfo: {
				title: "Welcome To My Blog Site",
				content:
					"Prague will be later replaced by Yiyan to achieve text printing effect.",
				recent: "Recent Posts",
				trending: "Trending Posts"
			},
			blogInfo: {
				title: "All Blogs",
				content: "Receive the baptism of knowledge here!"
			},
			categoryInfo: {
				title: "All Categories",
				content: "Receive the baptism of knowledge here!"
			},
			base: {
				readMore: "Read More",
				backToHome: "Back To Home",
				contentEmpty: "No related content found",
				quickLink: "Quick Link",
				authorDescription:
					"A front-end development practitioner who likes programming, sharing, and recording life moments",
				aboutSite: "About This Site",
				aboutSiteContent:
					"This is a personal blog website built with Nuxt3 and TailwindCSS, and it is currently deployed on Alibaba Cloud server."
			}
		}
	}
}));
