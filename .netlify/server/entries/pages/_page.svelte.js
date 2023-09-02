import { c as create_ssr_component, e as escape, o as onDestroy, a as add_attribute, v as validate_component, d as each, b as subscribe } from "../../chunks/index2.js";
import { i as isDarkMode, S as Section } from "../../chunks/Section.js";
import { B as Button } from "../../chunks/Button.js";
const Header_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".header.svelte-bbzavq{max-width:750px;margin:0 auto}.tagline.svelte-bbzavq{color:var(--vague-color)}.jumbotron.svelte-bbzavq{background-color:var(--interactive-color);background-image:var(--primary-gradient);background-size:100%;-webkit-background-clip:text;-moz-background-clip:text;-webkit-text-fill-color:transparent;-moz-text-fill-color:transparent;animation:svelte-bbzavq-blurIn 700ms ease-out;opacity:1;filter:blur(0px)}@keyframes svelte-bbzavq-blurIn{0%{opacity:0;filter:blur(40px)}100%{opacity:1;filter:blur(0px)}}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<div class="header container svelte-bbzavq"><div class="text-center mt-16 md:mt-24"><div class="jumbotron svelte-bbzavq">Hello.</div></div>
    <div class="text-center title mb-2 md:mb-4 mx-4"><h1 class="display">I am a product designer from Aalborg, Denmark</h1></div>
    <div class="tagline text-center title mb-8 mx-4 svelte-bbzavq"><h1 class="subtitle-large">I convert caffeine and user insights to pixels</h1></div>

</div>`;
});
const Card_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".card.svelte-xp3baz{background:var(--card-background-color);border-radius:var(--card-border-radius);padding:var(--card-padding)}.elevation-1.svelte-xp3baz{box-shadow:var(--elevation-1-x) \n            var(--elevation-1-y) \n            var(--elevation-1-blur) \n            var(--elevation-1-color)}.elevation-2.svelte-xp3baz{box-shadow:var(--elevation-2-x) \n            var(--elevation-2-y) \n            var(--elevation-2-blur) \n            var(--elevation-2-color)}.elevation-3.svelte-xp3baz{box-shadow:var(--elevation-3-x) \n            var(--elevation-3-y) \n            var(--elevation-3-blur) \n            var(--elevation-3-color)}.elevation-4.svelte-xp3baz{box-shadow:var(--elevation-4-x) \n            var(--elevation-4-y) \n            var(--elevation-4-blur) \n            var(--elevation-4-color)}",
  map: null
};
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<div class="${"card " + escape($$props.class, true) + " svelte-xp3baz"}">${slots.default ? slots.default({}) : ``}
</div>`;
});
const ___ASSET___0 = "/_app/immutable/assets/profile-blob.656e48cd.png";
const AgeCalc = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let intervalId;
  onDestroy(() => {
    clearInterval(intervalId);
  });
  return `${``}`;
});
const AboutMe_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".card-wrapper.svelte-1camkky{max-width:448px}.profile-blob.svelte-1camkky{max-width:70vw}",
  map: null
};
const AboutMe = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { description } = $$props;
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  $$result.css.add(css$2);
  return `<div class="about-me flex flex-col justify-center items-center md:flex-row "><div class="-mb-16 md:mb-0 profile-blob md:-mr-16 svelte-1camkky"><img${add_attribute("src", ___ASSET___0, 0)} alt="A headshot photograph of me"></div>
    <div class="card-wrapper svelte-1camkky">${validate_component(Card, "Card").$$render($$result, { class: "elevation-3" }, {}, {
    default: () => {
      return `<h2 class="title-small mb-2">Facts about me
            </h2>
            <p class="subtitle-small">I am ${validate_component(AgeCalc, "AgeCalc").$$render($$result, {}, {}, {})} seconds old.</p>
            <p class="mb-8">${escape(description)}</p>
            ${validate_component(Button, "Button").$$render(
        $$result,
        {
          class: "full-width secondary",
          label: "Download full CV",
          link: "Michael Jensen - CV.pdf"
        },
        {},
        {}
      )}`;
    }
  })}</div>
</div>`;
});
const Case_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".case-image.svelte-vjahfn{aspect-ratio:2.09/1;border-radius:var(--card-border-radius);background-size:cover}",
  map: null
};
const Case = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { cases: cases2 = [] } = $$props;
  if ($$props.cases === void 0 && $$bindings.cases && cases2 !== void 0)
    $$bindings.cases(cases2);
  $$result.css.add(css$1);
  return `<div class="grid grid-cols-1 xl:grid-cols-2 gap-x-8 gap-y-16">${each(cases2, (myCase) => {
    return `<div class="case"><div class="case-image mb-2 svelte-vjahfn" style="${"background-image: url('img/cases/thumbnails/" + escape(myCase.image, true) + "')"}"></div>
            
            <h3 class="title-small mb-1">${escape(myCase.title)}</h3>
            <p class="subtitle-small">${escape(myCase.description)}</p>
            ${validate_component(Button, "Button").$$render(
      $$result,
      {
        class: "primary",
        link: myCase.link,
        label: myCase.cta
      },
      {},
      {}
    )}
        </div>`;
  })}
</div>`;
});
const Skills_svelte_svelte_type_style_lang = "";
const css = {
  code: ".skill-content.svelte-1oc9j0{max-width:24rem;margin:0 auto}",
  map: null
};
const Skills = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isDarkMode, $$unsubscribe_isDarkMode;
  $$unsubscribe_isDarkMode = subscribe(isDarkMode, (value) => $isDarkMode = value);
  let { skills: skills2 = [] } = $$props;
  if ($$props.skills === void 0 && $$bindings.skills && skills2 !== void 0)
    $$bindings.skills(skills2);
  $$result.css.add(css);
  $$unsubscribe_isDarkMode();
  return `<div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">${each(skills2, (mySkills) => {
    return `<div class="skill"><div class="skill-content svelte-1oc9j0"><div class="skill-image flex justify-center mb-6">${$isDarkMode ? `<img src="${"/img/skills/dark-" + escape(mySkills.image, true)}"${add_attribute("alt", mySkills.altText, 0)}>` : `<img src="${"/img/skills/light-" + escape(mySkills.image, true)}"${add_attribute("alt", mySkills.altText, 0)}>`}</div>
                
                <h3 class="title-small mb-1 text-center">${escape(mySkills.title)}</h3>
                <p class="text-center vague">${escape(mySkills.description)}</p></div>
        </div>`;
  })}
</div>`;
});
const aboutMe = "Originally from the dark parts of Vendsyssel, I have since moved to Aalborg where I live with my girlfriend and daughter. In my spare time I like hiking very long distances, coding websites in every JS framework under the sun, or building and customising mechanical keyboards.";
const cases = [
  {
    image: "inwido-case.jpg",
    title: "B2B sales platform for carpenters",
    description: "UX and design for complex multi-device webapp",
    link: "/cases/inwido",
    cta: "View case"
  },
  {
    image: "just-go-case.jpg",
    title: "Social cycling app design",
    description: "Wireframing and design as freelance work",
    link: "/cases/justgo",
    cta: "View case"
  },
  {
    image: "outrup-case.jpg",
    title: "Concept work for marketing campagin site",
    description: "Ideation of an interactive sales tool.",
    link: "cases/outrup",
    cta: "View case"
  },
  {
    image: "skanva-case.jpg",
    title: "B2C ecommerce redesign",
    description: "New visual identity and complete overhaul of shop design",
    link: "cases/skanva",
    cta: "View case"
  },
  {
    image: "fold-article.jpg",
    title: "Where is 'above the fold'?",
    description: "A short piece I wrote about one of the pitfalls of landing page design (external link)",
    link: "https://medium.com/@moarpie/where-above-the-fold-really-is-27794a81cbce",
    cta: "Read article"
  },
  {
    image: "portfolio.jpg",
    title: "design system based portfolio",
    description: "Well, you're looking at it. I created a design token based design system to make a component-based site that supports light/dark mode theming.",
    link: "cases/portfolio",
    cta: "View case"
  }
];
const skills = [
  {
    image: "design-systems.svg",
    title: "Design systems",
    description: "Crafting effective and scalable design systems and design tokens is my forte. These systems enable cohesive and scalable designs, streamlining workflows and ensuring consistency.",
    altText: "An icon representing design systems"
  },
  {
    image: "user-research.svg",
    title: "User research",
    description: "User research drives user-centered design. I conduct usability testing, user interviews, and translating feedback into actionable improvements, ensuring user needs are met.",
    altText: "An icon representing user research"
  },
  {
    image: "prototyping.svg",
    title: "Prototyping",
    description: "I specialize in transforming ideas into interactive prototypes, vital for testing and gathering early feedback, ensuring the final product meets user and business goals.",
    altText: "An icon representing prototyping"
  },
  {
    image: "accessibility.svg",
    title: "Accessibility",
    description: "Accessibility isn’t just a checkbox for me, but at the core of my design philosophy.  I am well-versed in accessibility standards (such as WCAG) and implement them rigorously in my designs.",
    altText: "An icon representing accessibility"
  }
];
const content = {
  aboutMe,
  cases,
  skills
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-akcf57_START -->${$$result.title = `<title>Michael Jensen&#39;s portfolio</title>`, ""}<meta name="description" content="Description of your webpage"><!-- HEAD_svelte-akcf57_END -->`, ""}


${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

<div class="container">${validate_component(Section, "Section").$$render($$result, { title: "Who am I?", anchor: "about" }, {}, {
    default: () => {
      return `${validate_component(AboutMe, "AboutMe").$$render($$result, { description: content.aboutMe }, {}, {})}`;
    }
  })}

    ${validate_component(Section, "Section").$$render($$result, { title: "Selected works", anchor: "work" }, {}, {
    default: () => {
      return `${validate_component(Case, "Case").$$render($$result, { cases: content.cases }, {}, {})}`;
    }
  })}

    ${validate_component(Section, "Section").$$render(
    $$result,
    {
      title: "Notable skills",
      anchor: "skills"
    },
    {},
    {
      default: () => {
        return `${validate_component(Skills, "Skills").$$render($$result, { skills: content.skills }, {}, {})}`;
      }
    }
  )}
</div>`;
});
export {
  Page as default
};
