import { c as create_ssr_component, h as createEventDispatcher, e as escape, a as add_attribute } from "./index2.js";
const Button_svelte_svelte_type_style_lang = "";
const css = {
  code: "a.svelte-7xyefg{all:unset;display:inline-flex;box-sizing:border-box;align-items:center;justify-content:center;cursor:pointer}.button.svelte-7xyefg{color:var(--button-label-color);text-align:center;transition:background-color 250ms;background:var(--button-background-color);height:var(--button-height);padding-left:var(--button-padding-x);padding-right:var(--button-padding-x);border-radius:var(--button-border-radius);font-family:var(--button-label-font-family);font-size:var(--button-label-font-size);line-height:var(--button-label-line-height);letter-spacing:var(--button-label-letter-spacing)}.primary.svelte-7xyefg{background:var(--button-primary-background-color)}.primary.svelte-7xyefg:hover{background:var(--button-primary-background-color-hover)}.primary.svelte-7xyefg:active{background:var(--button-primary-background-color-active)}.primary.svelte-7xyefg:focus{background:var(--button-primary-background-color-focus)}.secondary.svelte-7xyefg{background:var(--button-secondary-background-color)}.secondary.svelte-7xyefg:hover{background:var(--button-secondary-background-color-hover)}.secondary.svelte-7xyefg:active{background:var(--button-secondary-background-color-active)}.secondary.svelte-7xyefg:focus{background:var(--button-secondary-background-color-focus)}.full-width.svelte-7xyefg{width:100%}",
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { label } = $$props;
  let { link } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  $$result.css.add(css);
  return `<a class="${"button " + escape($$props.class, true) + " svelte-7xyefg"}"${add_attribute("href", link, 0)}>${escape(label)}</a>`;
});
export {
  Button as B
};
