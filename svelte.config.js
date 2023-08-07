import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { importAssets } from 'svelte-preprocess-import-assets';

const config = {
  kit: {
    adapter: adapter({
      edge: false,
      split: false,
    }),
  },
  preprocess: [
    preprocess(),
    importAssets(),
  ],
};

export default config;
