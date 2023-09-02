import { c as create_ssr_component, e as escape } from "./index2.js";
const CaseHeader_svelte_svelte_type_style_lang = "";
const css = {
  code: ".header.svelte-13b5u66{max-width:750px;margin:0 auto}.seperator.svelte-13b5u66{width:60%;height:1px;margin:0 auto;background-image:var(--primary-gradient)}.display.svelte-13b5u66{background-color:var(--interactive-color);background-image:var(--primary-gradient);background-size:100%;-webkit-background-clip:text;-moz-background-clip:text;-webkit-text-fill-color:transparent;-moz-text-fill-color:transparent}",
  map: null
};
const CaseHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { subtitle } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  $$result.css.add(css);
  return `<div class="header container svelte-13b5u66"><div class="text-center mt-16 md:mt-24 mb-6"><div class="display svelte-13b5u66">${escape(title)}</div></div>
    <div class="seperator svelte-13b5u66"></div>
    <div class="text-center title mb-2 md:mb-4 mx-4"><h1 class="subtitle-large mt-6">${escape(subtitle)}</h1></div>
    <div class="text-center"></div></div>
<div class="mb-24 md:mb-48"></div>`;
});
export {
  CaseHeader as C
};
