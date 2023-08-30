

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.7920776c.js","_app/immutable/chunks/index.de179b2c.js","_app/immutable/chunks/Section.8c56c06d.js","_app/immutable/chunks/index.9a51c85f.js","_app/immutable/chunks/Button.f10f9c2e.js"];
export const stylesheets = ["_app/immutable/assets/3.bc120f0d.css","_app/immutable/assets/Button.3dd8bb79.css"];
export const fonts = [];
