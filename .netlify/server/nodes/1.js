

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.36e7094f.js","_app/immutable/chunks/index.de179b2c.js","_app/immutable/chunks/singletons.304fd022.js","_app/immutable/chunks/index.9a51c85f.js"];
export const stylesheets = [];
export const fonts = [];
