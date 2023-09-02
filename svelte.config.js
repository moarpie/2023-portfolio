import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';
import { importAssets } from 'svelte-preprocess-import-assets';

const config = {
  kit: {
    adapter: adapter({
      edge: false,
      split: false,
    }),
  },
  preprocess: [
    importAssets({

    }),
    preprocess(),

  ],
};

export default config;
