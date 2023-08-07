import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["css/dark-variables.css","css/light-variables.css","css/variables.css","favicon.png"]),
	mimeTypes: {".css":"text/css",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.5fb82219.js","app":"_app/immutable/entry/app.8c9c3374.js","imports":["_app/immutable/entry/start.5fb82219.js","_app/immutable/chunks/index.de179b2c.js","_app/immutable/chunks/singletons.52c3e972.js","_app/immutable/chunks/index.9a51c85f.js","_app/immutable/entry/app.8c9c3374.js","_app/immutable/chunks/index.de179b2c.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js')),
			__memo(() => import('../server/nodes/3.js')),
			__memo(() => import('../server/nodes/4.js'))
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
})());
