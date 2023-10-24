import { Marked } from "marked";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import sql from "highlight.js/lib/languages/sql";
import bash from "highlight.js/lib/languages/bash";
import css from "highlight.js/lib/languages/css";
import json from "highlight.js/lib/languages/json";
import less from "highlight.js/lib/languages/less";
import scss from "highlight.js/lib/languages/scss";
import xml from "highlight.js/lib/languages/xml";
import typescript from "highlight.js/lib/languages/typescript";
import java from "highlight.js/lib/languages/java";
import { markedHighlight } from "marked-highlight";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("js", javascript);
hljs.registerLanguage("sql", sql);
hljs.registerLanguage("bash", bash);
hljs.registerLanguage("css", css);
hljs.registerLanguage("json", json);
hljs.registerLanguage("less", less);
hljs.registerLanguage("scss", scss);
hljs.registerLanguage("xml", xml);
hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("java", java);

const marked = new Marked(
	{ gfm: true },
	markedHighlight({
		langPrefix: "hljs language-",
		highlight(code, lang) {
			const language = hljs.getLanguage(lang) ? lang : "bash";
			return hljs.highlight(code, { language }).value;
		}
	})
);

const renderer = new marked.Renderer();
type TableOfContents = { level: number; text: string; id: string }[];
export const useParse = (content: string) => {
	const tableOfContents = ref<TableOfContents>([]);
	renderer.heading = (text, level) => {
		const escapedText = text.toLowerCase().replace(/[^\w]+/g, "-");
		tableOfContents.value.push({
			level,
			text,
			id: escapedText
		});
		return `<h${level} id="${escapedText}">${text}</h${level}>`;
	};
	const parseHtml = marked.parse(content, { renderer });
	return { tableOfContents, parseHtml };
};
