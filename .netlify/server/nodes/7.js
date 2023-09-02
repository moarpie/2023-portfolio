

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/cases/portfolio/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.c1923afd.js","_app/immutable/chunks/index.de179b2c.js","_app/immutable/chunks/skanva5.c1cc6072.js","_app/immutable/chunks/CaseHeader.27719d45.js"];
export const stylesheets = ["_app/immutable/assets/CaseHeader.065312d1.css"];
export const fonts = [];
