import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import path from 'path';
import fs from 'fs';

const mediaQueries = fs.readFileSync('./src/styles/media.pcss').toString();

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		postcss: {
			prependData: mediaQueries
		}
	}),

	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			resolve: {
				alias: {
					src: path.resolve('./src'),
					components: path.resolve('src/components'),
					modules: path.resolve('src/modules'),
					models: path.resolve('src/models'),
					utils: path.resolve('src/utils')
				}
			}
		}
	}
};

export default config;
