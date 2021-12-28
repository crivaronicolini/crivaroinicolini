/** @type {import('@sveltejs/kit').Config} */
import { mdsvex } from "mdsvex";
import { mdsvexConfig } from "./mdsvex.config.js";
import vercel from '@sveltejs/adapter-vercel';
const config = {
	extensions: [".svelte", ...mdsvexConfig.extensions],
	preprocess: [
		mdsvex(mdsvexConfig),
	],
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
                adapter: vercel(),
            files: {
                assets: 'static',
            }
	}
};

export default config;
