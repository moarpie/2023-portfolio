import { c as create_ssr_component, e as escape, o as onDestroy, a as add_attribute, v as validate_component, d as each, b as subscribe } from "../../chunks/index2.js";
import { i as isDarkMode, S as Section } from "../../chunks/Section.js";
import { B as Button } from "../../chunks/Button.js";
const Header_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".header.svelte-rd9exs{max-width:750px;margin:0 auto}.tagline.svelte-rd9exs{color:var(--vague-color)}.jumbotron.svelte-rd9exs{background-color:var(--interactive-color);background-image:var(--primary-gradient);background-size:100%;-webkit-background-clip:text;-moz-background-clip:text;-webkit-text-fill-color:transparent;-moz-text-fill-color:transparent}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<div class="header container svelte-rd9exs"><div class="text-center mt-16 md:mt-24"><div class="jumbotron svelte-rd9exs">Hello.</div></div>
    <div class="text-center title mb-2 md:mb-4 mx-4"><h1 class="display">I am a product designer from Aalborg, Denmark</h1></div>
    <div class="tagline text-center title mb-8 mx-4 svelte-rd9exs"><h1 class="subtitle-large">I convert caffeine and user insights to pixels</h1></div>
    <div class="text-center"></div>
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
  return `<div class="about-me flex flex-col justify-center items-center md:flex-row "><div class="mb-12 md:mb-0 profile-blob md:-mr-16 svelte-1camkky"><img${add_attribute("src", ___ASSET___0, 0)} alt="A headshot photograph of me"></div>
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
          link: "google.com"
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
  code: ".case-image.svelte-1o0rb2j{aspect-ratio:16/9;border-radius:var(--card-border-radius);background-size:cover}",
  map: null
};
const Case = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { cases: cases2 = [] } = $$props;
  if ($$props.cases === void 0 && $$bindings.cases && cases2 !== void 0)
    $$bindings.cases(cases2);
  $$result.css.add(css$1);
  return `<div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">${each(cases2, (myCase) => {
    return `<div class="case"><div class="case-image mb-2 svelte-1o0rb2j" style="${"background-image: url('src/lib/assets/img/cases/" + escape(myCase.image, true) + "')"}"></div>
            
            <h3 class="title-small mb-1">${escape(myCase.title)}</h3>
            <p class="subtitle-small">${escape(myCase.description)}</p>
            ${validate_component(Button, "Button").$$render(
      $$result,
      {
        class: "primary",
        link: myCase.link,
        label: "View case"
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
    return `<div class="skill"><div class="skill-content svelte-1oc9j0"><div class="skill-image flex justify-center mb-6">${$isDarkMode ? `<img src="${"src/lib/assets/img/skills/dark-" + escape(mySkills.image, true)}"${add_attribute("alt", mySkills.altText, 0)}>` : `<img src="${"src/lib/assets/img/skills/light-" + escape(mySkills.image, true)}"${add_attribute("alt", mySkills.altText, 0)}>`}</div>
                
                <h3 class="title-small mb-1 text-center">${escape(mySkills.title)}</h3>
                <p class="text-center vague">${escape(mySkills.description)}</p></div>
        </div>`;
  })}
</div>`;
});
const aboutMe = "Est occaecat dolor in adipisicing id duis consectetur et reprehenderit ut do in est cupidatat quis. Enim id excepteur dolore proident ullamco culpa commodo. Nostrud et aliquip duis labore fugiat magna fugiat consequat. Anim aliquip labore aliquip nulla anim veniam dolor cillum. Qui non Lorem cillum fugiat culpa cillum ipsum.";
const cases = [
  {
    image: "test.png",
    title: "Social cycling app design",
    description: "Wireframing and design as freelance work.",
    link: "/cases/justgo"
  },
  {
    image: "test.png",
    title: "Portfolio Case 2",
    description: "This is the description for portfolio case 2.",
    link: "https://example.com/portfolio-case-2"
  },
  {
    image: "test.png",
    title: "Portfolio Case 3",
    description: "This is the description for portfolio case 3.",
    link: "https://example.com/portfolio-case-1"
  },
  {
    image: "test.png",
    title: "Portfolio Case 4",
    description: "This is the description for portfolio case 4.",
    link: "https://example.com/portfolio-case-1"
  }
];
const skills = [
  {
    image: "design-systems.svg",
    title: "Design systems",
    description: "Esse reprehenderit aliquip nisi labore id mollit commodo cillum enim nostrud et. Commodo exercitation sit qui est exercitation labore anim incididunt.",
    altText: "An icon describing the skill in question"
  },
  {
    image: "user-research.svg",
    title: "User research",
    description: "Esse reprehenderit aliquip nisi labore id mollit commodo cillum enim nostrud et. Commodo exercitation sit qui est exercitation labore anim incididunt.",
    altText: "An icon describing the skill in question"
  },
  {
    image: "prototyping.svg",
    title: "Prototyping",
    description: "Esse reprehenderit aliquip nisi labore id mollit commodo cillum enim nostrud et. Commodo exercitation sit qui est exercitation labore anim incididunt.",
    altText: "An icon describing the skill in question"
  },
  {
    image: "accessibility.svg",
    title: "Accessibility",
    description: "Esse reprehenderit aliquip nisi labore id mollit commodo cillum enim nostrud et. Commodo exercitation sit qui est exercitation labore anim incididunt.",
    altText: "An icon describing the skill in question"
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

<div class="container">${validate_component(Section, "Section").$$render($$result, { title: "About me", anchor: "about" }, {}, {
    default: () => {
      return `${validate_component(AboutMe, "AboutMe").$$render($$result, { description: content.aboutMe }, {}, {})}`;
    }
  })}

    ${validate_component(Section, "Section").$$render($$result, { title: "My Work", anchor: "work" }, {}, {
    default: () => {
      return `${validate_component(Case, "Case").$$render($$result, { cases: content.cases }, {}, {})}`;
    }
  })}

    ${validate_component(Section, "Section").$$render($$result, { title: "My skills", anchor: "skills" }, {}, {
    default: () => {
      return `${validate_component(Skills, "Skills").$$render($$result, { skills: content.skills }, {}, {})}`;
    }
  })}
</div>`;
});
export {
  Page as default
};
