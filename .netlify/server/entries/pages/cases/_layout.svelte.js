import { c as create_ssr_component, v as validate_component } from "../../../chunks/index2.js";
import { B as Button } from "../../../chunks/Button.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
