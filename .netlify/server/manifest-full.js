export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["css/dark-variables.css","css/light-variables.css","css/variables.css","favicon.png","img/skills/dark-accessibility.svg","img/skills/dark-design-systems.svg","img/skills/dark-prototyping.svg","img/skills/dark-user-research.svg","img/skills/designSystems-1.svg","img/skills/designSystems.svg","img/skills/light-accessibility.svg","img/skills/light-design-systems.svg","img/skills/light-prototyping.svg","img/skills/light-user-research.svg","img/thumbnails/justgo.png"]),
	mimeTypes: {".css":"text/css",".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.5b03fcd7.js","app":"_app/immutable/entry/app.5ceadb41.js","imports":["_app/immutable/entry/start.5b03fcd7.js","_app/immutable/chunks/index.de179b2c.js","_app/immutable/chunks/singletons.50c3f40c.js","_app/immutable/chunks/index.9a51c85f.js","_app/immutable/entry/app.5ceadb41.js","_app/immutable/chunks/index.de179b2c.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/cases/justgo",
				pattern: /^\/cases\/justgo\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
