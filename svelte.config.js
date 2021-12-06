import preprocess from 'svelte-preprocess';
import imagePreprocessor from 'svimg';
import path from 'path';
import fs from 'fs';
import vercel from '@sveltejs/adapter-vercel';

const mediaQueries = fs.readFileSync('./src/styles/media.pcss').toString();

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		imagePreprocessor({
			inputDir: 'static',
			outputDir: 'static/g',
			webp: true,
			avif: true
		}),
		preprocess({
			postcss: {
				prependData: mediaQueries
			}
		})
	],

	kit: {
		adapter: vercel(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			resolve: {
				alias: {
					src: path.resolve('./src'),
					assets: path.resolve('./src/assets'),
					components: path.resolve('./src/components'),
					modules: path.resolve('./src/modules'),
					models: path.resolve('./src/models'),
					utils: path.resolve('./src/utils')
				}
			}
		}
	}
};

export default config;
