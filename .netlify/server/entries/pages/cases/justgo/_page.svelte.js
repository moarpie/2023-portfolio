import { c as create_ssr_component, e as escape, v as validate_component, a as add_attribute } from "../../../../chunks/index2.js";
const ___ASSET___0 = "/_app/immutable/assets/wireframes1.88aa253d.jpg";
const ___ASSET___1 = "/_app/immutable/assets/wireframes2.1f181186.jpg";
const ___ASSET___2 = "/_app/immutable/assets/mockup.ee7f0481.png";
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
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(CaseHeader, "CaseHeader").$$render(
    $$result,
    {
      title: "Social cycling app UX design",
      subtitle: "Freelance work for Snapp A/S"
    },
    {},
    {}
  )}  
<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8"><div class="order-2 md:order-1"><h2 class="title-medium">Background
        </h2>
        <p>In this project, I was hired in to do UX design for an app that Snapp were planning to create with an external client. The idea behind the app is to act as a social platform that cyclist can create and find cycling events that are tailored to their exact preferences.
        </p>
        <p>I worked closely with their developers and their client to ensure that the design would meet both the cliens demands and the technologies that would lie behind.
        </p>
        <p>The final product onboards the user with their unique cycling preferences, and utilizes design patterns from the iOS calendar app for them to select when they want to participate in events.
        </p></div>
    <div class="order-1 md:order-2"><img${add_attribute("src", ___ASSET___0, 0)} alt=""></div></div>

<div class="mt-32 grid grid-cols-1 md:grid-cols-2 gap-8 mt-8"><div class=""><img${add_attribute("src", ___ASSET___1, 0)} alt=""></div>
    <div class=""><h2 class="title-medium">Using familiar interactions
        </h2>
        <p>As part of the onboarding process, users are asked to choose what times and which weekdays they are available for events, to easily filter all available events. This presents a set of problems in firstly to show a simple overview of the weekdays, and also how the user is able to create a new timeslot for multiple days at the same time.
        </p>
        <p>This is where I used the iOS calendar design pattern of having the days represented by a circle, with a small dot underneath when there are timeslots created for that particular day.
        </p>
        <p>This pattern will also be used for the modal that creates new timeslots, where the user can select multiple day circles that the new timeslot should be active for.
        </p></div></div>

<div class="grid grid-cols-1"><img${add_attribute("src", ___ASSET___2, 0)} alt="">
</div>`;
});
export {
  Page as default
};
