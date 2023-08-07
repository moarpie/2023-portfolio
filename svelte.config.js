import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess'; // Add this line
import { importAssets } from 'svelte-preprocess-import-assets';

const config = {
  kit: {
    adapter: adapter({
      edge: false,
      split: false,
    }),
  },
  preprocess: [
    preprocess(), // Use svelte-preprocess
    importAssets(),
  ],
};

export default config;
