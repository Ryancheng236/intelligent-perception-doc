import { sidebar } from "vuepress-theme-hope";

export default sidebar({
	'/guide/': [{
		text: '快速入门',
		link: "/guide/",
		children: "structure",
	},
	],
	'/technology/': [{
		text: "核心知识",
		children: [
			"",
			{
				text: "软件开发",
				prefix: "development/",
				children: "structure"
			},
			{
				text: "人工智能",
				prefix: "ai/",
				children: "structure"
			}, {
				text: '应用领域',
				prefix: 'fields/',
				children: "structure"
			},
			{
				text: "嵌入式",
				prefix: "embedded/",
				children: "structure"
			},
			{
				text: "服务部署",
				prefix: "deployment/",
				children: "structure"
			}
		],

	},
	],
	'/resources/': [{
		text: "常用资源",
		link: "/resources/",
		children: "structure",
	},
	],
});