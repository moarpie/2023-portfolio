

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/cases/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.b61b754c.js","_app/immutable/chunks/index.de179b2c.js","_app/immutable/chunks/Button.f10f9c2e.js"];
export const stylesheets = ["_app/immutable/assets/2.065312d1.css","_app/immutable/assets/Button.3dd8bb79.css"];
export const fonts = [];
