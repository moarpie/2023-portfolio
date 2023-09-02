export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","Michael Jensen - CV.pdf","css/dark-variables.css","css/light-variables.css","css/variables.css","favicon.png","img/.DS_Store","img/cases/.DS_Store","img/cases/thumbnails/.DS_Store","img/cases/thumbnails/fold-article.jpg","img/cases/thumbnails/full-size-thumbs.zip","img/cases/thumbnails/inwido-case.jpg","img/cases/thumbnails/just-go-case.jpg","img/cases/thumbnails/outrup-case.jpg","img/cases/thumbnails/portfolio.jpg","img/cases/thumbnails/skanva-case.jpg","img/skills/dark-accessibility.svg","img/skills/dark-design-systems.svg","img/skills/dark-prototyping.svg","img/skills/dark-user-research.svg","img/skills/designSystems-1.svg","img/skills/designSystems.svg","img/skills/light-accessibility.svg","img/skills/light-design-systems.svg","img/skills/light-prototyping.svg","img/skills/light-user-research.svg"]),
	mimeTypes: {".pdf":"application/pdf",".css":"text/css",".png":"image/png",".jpg":"image/jpeg",".zip":"application/zip",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.966aeff0.js","app":"_app/immutable/entry/app.0c2ab137.js","imports":["_app/immutable/entry/start.966aeff0.js","_app/immutable/chunks/index.de179b2c.js","_app/immutable/chunks/singletons.304fd022.js","_app/immutable/chunks/index.9a51c85f.js","_app/immutable/entry/app.0c2ab137.js","_app/immutable/chunks/index.de179b2c.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js'))
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
				id: "/cases/inwido",
				pattern: /^\/cases\/inwido\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/cases/justgo",
				pattern: /^\/cases\/justgo\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/cases/outrup",
				pattern: /^\/cases\/outrup\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/cases/portfolio",
				pattern: /^\/cases\/portfolio\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/cases/skanva",
				pattern: /^\/cases\/skanva\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 8 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
