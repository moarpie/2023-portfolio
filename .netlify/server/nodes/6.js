

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/cases/outrup/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.0aff9d76.js","_app/immutable/chunks/index.de179b2c.js","_app/immutable/chunks/CaseHeader.27719d45.js"];
export const stylesheets = ["_app/immutable/assets/CaseHeader.065312d1.css"];
export const fonts = [];
