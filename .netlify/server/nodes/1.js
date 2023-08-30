

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.6e547181.js","_app/immutable/chunks/index.de179b2c.js","_app/immutable/chunks/singletons.50c3f40c.js","_app/immutable/chunks/index.9a51c85f.js"];
export const stylesheets = [];
export const fonts = [];
