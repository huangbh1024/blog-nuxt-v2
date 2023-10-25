import VueDOMPurifyHTML from "vue-dompurify-html";

export default defineNuxtPlugin(nuxtApp => {
	// Doing something with nuxtApp
	nuxtApp.vueApp.use(VueDOMPurifyHTML);
});
