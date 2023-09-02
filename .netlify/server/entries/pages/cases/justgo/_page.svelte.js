import { c as create_ssr_component, v as validate_component, a as add_attribute } from "../../../../chunks/index2.js";
import { C as CaseHeader } from "../../../../chunks/CaseHeader.js";
const ___ASSET___0 = "/_app/immutable/assets/wireframes1.88aa253d.jpg";
const ___ASSET___1 = "/_app/immutable/assets/wireframes2.1f181186.jpg";
const ___ASSET___2 = "/_app/immutable/assets/mockup.ee7f0481.png";
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

<div class="case-section grid grid-cols-1 md:grid-cols-2 gap-8 mt-8"><div class=""><img${add_attribute("src", ___ASSET___1, 0)} alt=""></div>
    <div class=""><h2 class="title-medium">Using familiar interactions
        </h2>
        <p>As part of the onboarding process, users are asked to choose what times and which weekdays they are available for events, to easily filter all available events. This presents a set of problems in firstly to show a simple overview of the weekdays, and also how the user is able to create a new timeslot for multiple days at the same time.
        </p>
        <p>This is where I used the iOS calendar design pattern of having the days represented by a circle, with a small dot underneath when there are timeslots created for that particular day.
        </p>
        <p>This pattern will also be used for the modal that creates new timeslots, where the user can select multiple day circles that the new timeslot should be active for.
        </p></div></div>

<div class="case-section flex justify-center"><img${add_attribute("src", ___ASSET___2, 0)} alt="">
</div>`;
});
export {
  Page as default
};
