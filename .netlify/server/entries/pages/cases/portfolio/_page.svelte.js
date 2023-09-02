import { c as create_ssr_component, v as validate_component, a as add_attribute } from "../../../../chunks/index2.js";
import { _ as ___ASSET___1, a as ___ASSET___2, b as ___ASSET___3 } from "../../../../chunks/skanva5.js";
import { C as CaseHeader } from "../../../../chunks/CaseHeader.js";
const ___ASSET___0 = "/_app/immutable/assets/typography.dbb5a69d.jpg";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(CaseHeader, "CaseHeader").$$render(
    $$result,
    {
      title: "Design system based portfolio",
      subtitle: "Overengineered for my own amusement"
    },
    {},
    {}
  )}  

<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8"><div class="order-2 md:order-1"><h2 class="title-medium">But why?
        </h2>
        <p>What started out as a small project to learn the JS framework Svelte, turned into a complete overhaul of my portfolio from the previous version. 
        </p>
        <p>I used the project as an opportunity to learn more about how the pixels we create as designers get turned into usable code. Along the way I learned a lot about how for example the complexity of components quickly grows as the design requires different properties. 
        </p></div>
    <div class="order-1 md:order-2"><img${add_attribute("src", ___ASSET___0, 0)} alt=""></div></div>

<div class="case-section grid grid-cols-1 md:grid-cols-2 gap-8 mt-8"><div class="order-1"><img${add_attribute("src", ___ASSET___0, 0)} alt=""></div>
    <div class="order-2"><h2 class="title-medium">Responsive typography
        </h2>
        <p>Using Figma and the Token Studio plugin, I implemented responsive typography with design tokens, ensuring a consistent and visually appealing user experience on all devices.
        </p></div></div>

<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8"><div class="order-2 md:order-1"><h2 class="title-medium">Responsive typography
        </h2>
        <p>Sit mollit commodo occaecat incididunt excepteur commodo eiusmod anim esse. Id laboris quis incididunt veniam mollit officia reprehenderit qui enim laboris officia ut anim id Lorem. Ipsum magna officia sint sit dolor pariatur tempor aliquip enim est aliqua. Ipsum tempor tempor sunt dolor ex. Tempor ipsum pariatur deserunt. Consequat anim sunt mollit et amet Lorem cupidatat excepteur eu ea nostrud deserunt excepteur non elit.

Nostrud mollit id ullamco minim sunt irure. Fugiat incididunt eiusmod labore labore tempor quis ex consequat sit duis. Pariatur velit tempor et commodo. Reprehenderit incididunt laborum nisi et commodo fugiat quis. Reprehenderit aliquip pariatur aliquip excepteur deserunt pariatur occaecat. Dolor do id enim voluptate velit ea culpa.
        </p></div>
    <div class="order-1 md:order-2"><p><span class="display">I am a display title</span></p>
        <p><span class="title-large">I am a large title</span></p></div></div>

<div class="case-section grid grid-cols-1 md:grid-cols-2 gap-8 mt-8"><div class=""><img${add_attribute("src", ___ASSET___1, 0)} alt=""></div>
    <div class=""><img${add_attribute("src", ___ASSET___2, 0)} alt=""></div></div>

<div class="case-section grid grid-cols-1 gap-8 mt-8"><h2 class="title-medium">Guerilla user research
    </h2>
    <p>Occasionally you can get creative with how you gather user data. For example when we were redesigning the contact page for the site, I realised that we could take form entries from the existing site and sort all the questions and inquiries that the users had into categories and then use those insights to figure out how the page should be structured and use that as a basis for the wireframing process.
    </p>
    <img${add_attribute("src", ___ASSET___3, 0)} alt="">
</div>`;
});
export {
  Page as default
};
