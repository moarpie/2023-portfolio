import { w as writable } from "./index.js";
import { c as create_ssr_component, a as add_attribute, e as escape } from "./index2.js";
const isDarkMode = writable(false);
const Section = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { anchor } = $$props;
  let { title } = $$props;
  if ($$props.anchor === void 0 && $$bindings.anchor && anchor !== void 0)
    $$bindings.anchor(anchor);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `<div class="spacer mt-16 md:mt-24"></div>
<div${add_attribute("id", anchor, 0)} class="anchor"></div>
<div class="section pt-10"><div${add_attribute("id", anchor, 0)} class="anchor"></div>

    <h2 class="title-large mb-10 md:mb-16 text-center">${escape(title)}</h2>

    ${slots.default ? slots.default({}) : ``}
</div>`;
});
export {
  Section as S,
  isDarkMode as i
};
