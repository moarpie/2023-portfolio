import { c as create_ssr_component, v as validate_component } from "../../../chunks/index2.js";
import { B as Button } from "../../../chunks/Button.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".case-section{padding-top:1rem}@media all and (min-width: 768px){.case-section{padding-top:2rem}}@media all and (min-width: 1024px){.case-section{padding-top:4rem}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="container">${slots.default ? slots.default({}) : ``}
    <div class="back-button flex justify-center mt-32">${validate_component(Button, "Button").$$render(
    $$result,
    {
      class: "primary",
      label: "Back to home",
      link: "/#work"
    },
    {},
    {}
  )}</div>
</div>`;
});
export {
  Layout as default
};
