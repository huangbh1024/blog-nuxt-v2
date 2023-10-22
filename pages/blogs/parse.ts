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

import "highlight.js/styles/monokai-sublime.css";
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
	markedHighlight({
		langPrefix: "hljs language-",
		highlight(code, lang) {
			const language = hljs.getLanguage(lang) ? lang : "bash";
			return hljs.highlight(code, { language }).value;
		}
	})
);

export const parse = (str: string) => marked.parse(str);
