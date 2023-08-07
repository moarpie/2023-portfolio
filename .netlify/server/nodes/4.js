

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/cases/justgo/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.34830252.js","_app/immutable/chunks/index.de179b2c.js"];
export const stylesheets = [];
export const fonts = [];
