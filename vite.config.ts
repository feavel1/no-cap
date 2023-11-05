import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { purgeCss } from 'vite-plugin-tailwind-purgecss';
import { imagetools } from '@zerodevx/svelte-img/vite';

export default defineConfig({
	optimizeDeps: {
		include: ['lodash.get', 'lodash.isequal', 'lodash.clonedeep']
	},
	plugins: [
		sveltekit(),
		purgeCss(),
		imagetools({
			profiles: {
				// Now we change `run` to generate 4 variants instead: 640/1280w in webp/jpg
				run: new URLSearchParams('w=640;1920&format=webp;jpg')
			}
		})
	]
});
