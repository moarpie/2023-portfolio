import{S as H,i as B,s as L,k as b,q as A,a as x,l as k,m as E,r as M,h as m,c as y,n as g,b as I,D as _,F as j,J as re,K as ne,L as oe,M as ce,g as q,d as w,O as U,P as W,e as K,o as ue,Q as fe,u as O,y as C,z as T,C as N,A as S,B as P,v as me,f as de,R as le,p as X,N as he,T as pe}from"../chunks/index.de179b2c.js";import{i as _e,S as J}from"../chunks/Section.8c56c06d.js";import{B as ie}from"../chunks/Button.f10f9c2e.js";function ge(r){let e,s,t,l,a,i,n,c,h,p,$,u,v,o;return{c(){e=b("div"),s=b("div"),t=b("div"),l=A("Hello."),a=x(),i=b("div"),n=b("h1"),c=A("I am a product designer from Aalborg, Denmark"),h=x(),p=b("div"),$=b("h1"),u=A("I convert caffeine and user insights to pixels"),v=x(),o=b("div"),this.h()},l(d){e=k(d,"DIV",{class:!0});var f=E(e);s=k(f,"DIV",{class:!0});var D=E(s);t=k(D,"DIV",{class:!0});var V=E(t);l=M(V,"Hello."),V.forEach(m),D.forEach(m),a=y(f),i=k(f,"DIV",{class:!0});var z=E(i);n=k(z,"H1",{class:!0});var F=E(n);c=M(F,"I am a product designer from Aalborg, Denmark"),F.forEach(m),z.forEach(m),h=y(f),p=k(f,"DIV",{class:!0});var G=E(p);$=k(G,"H1",{class:!0});var R=E($);u=M(R,"I convert caffeine and user insights to pixels"),R.forEach(m),G.forEach(m),v=y(f),o=k(f,"DIV",{class:!0});var ae=E(o);ae.forEach(m),f.forEach(m),this.h()},h(){g(t,"class","jumbotron svelte-rd9exs"),g(s,"class","text-center mt-16 md:mt-24"),g(n,"class","display"),g(i,"class","text-center title mb-2 md:mb-4 mx-4"),g($,"class","subtitle-large"),g(p,"class","tagline text-center title mb-8 mx-4 svelte-rd9exs"),g(o,"class","text-center"),g(e,"class","header container svelte-rd9exs")},m(d,f){I(d,e,f),_(e,s),_(s,t),_(t,l),_(e,a),_(e,i),_(i,n),_(n,c),_(e,h),_(e,p),_(p,$),_($,u),_(e,v),_(e,o)},p:j,i:j,o:j,d(d){d&&m(e)}}}class $e extends H{constructor(e){super(),B(this,e,null,ge,L,{})}}function ve(r){let e,s,t;const l=r[2].default,a=re(l,r,r[1],null);return{c(){e=b("div"),a&&a.c(),this.h()},l(i){e=k(i,"DIV",{class:!0});var n=E(e);a&&a.l(n),n.forEach(m),this.h()},h(){g(e,"class",s="card "+r[0].class+" svelte-xp3baz")},m(i,n){I(i,e,n),a&&a.m(e,null),t=!0},p(i,[n]){a&&a.p&&(!t||n&2)&&ne(a,l,i,i[1],t?ce(l,i[1],n,null):oe(i[1]),null),(!t||n&1&&s!==(s="card "+i[0].class+" svelte-xp3baz"))&&g(e,"class",s)},i(i){t||(q(a,i),t=!0)},o(i){w(a,i),t=!1},d(i){i&&m(e),a&&a.d(i)}}}function be(r,e,s){let{$$slots:t={},$$scope:l}=e;return r.$$set=a=>{s(0,e=U(U({},e),W(a))),"$$scope"in a&&s(1,l=a.$$scope)},e=W(e),[e,l,t]}class ke extends H{constructor(e){super(),B(this,e,be,ve,L,{})}}const Ee=""+new URL("../assets/profile-blob.656e48cd.png",import.meta.url).href;function Y(r){let e;return{c(){e=A(r[1])},l(s){e=M(s,r[1])},m(s,t){I(s,e,t)},p(s,t){t&2&&O(e,s[1])},d(s){s&&m(e)}}}function De(r){let e,s=r[0]>0&&Y(r);return{c(){s&&s.c(),e=K()},l(t){s&&s.l(t),e=K()},m(t,l){s&&s.m(t,l),I(t,e,l)},p(t,[l]){t[0]>0?s?s.p(t,l):(s=Y(t),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null)},i:j,o:j,d(t){s&&s.d(t),t&&m(e)}}}let Ie="1988-11-09";function xe(r,e,s){let t=0,l="",a;function i(){const n=new Date(Ie),h=new Date-n,p=Math.floor(h/1e3);s(0,t=p),s(1,l=t.toLocaleString())}return ue(()=>{i(),a=setInterval(i,1e3)}),fe(()=>{clearInterval(a)}),[t,l]}class ye extends H{constructor(e){super(),B(this,e,xe,De,L,{})}}function qe(r){let e,s,t,l,a,i,n,c,h,p,$,u,v;return i=new ye({}),u=new ie({props:{class:"full-width secondary",label:"Download full CV",link:"google.com"}}),{c(){e=b("h2"),s=A("Facts about me"),t=x(),l=b("p"),a=A("I am "),C(i.$$.fragment),n=A(" seconds old."),c=x(),h=b("p"),p=A(r[0]),$=x(),C(u.$$.fragment),this.h()},l(o){e=k(o,"H2",{class:!0});var d=E(e);s=M(d,"Facts about me"),d.forEach(m),t=y(o),l=k(o,"P",{class:!0});var f=E(l);a=M(f,"I am "),T(i.$$.fragment,f),n=M(f," seconds old."),f.forEach(m),c=y(o),h=k(o,"P",{class:!0});var D=E(h);p=M(D,r[0]),D.forEach(m),$=y(o),T(u.$$.fragment,o),this.h()},h(){g(e,"class","title-small mb-2"),g(l,"class","subtitle-small"),g(h,"class","mb-8")},m(o,d){I(o,e,d),_(e,s),I(o,t,d),I(o,l,d),_(l,a),S(i,l,null),_(l,n),I(o,c,d),I(o,h,d),_(h,p),I(o,$,d),S(u,o,d),v=!0},p(o,d){(!v||d&1)&&O(p,o[0])},i(o){v||(q(i.$$.fragment,o),q(u.$$.fragment,o),v=!0)},o(o){w(i.$$.fragment,o),w(u.$$.fragment,o),v=!1},d(o){o&&m(e),o&&m(t),o&&m(l),P(i),o&&m(c),o&&m(h),o&&m($),P(u,o)}}}function we(r){let e,s,t,l,a,i,n,c;return n=new ke({props:{class:"elevation-3",$$slots:{default:[qe]},$$scope:{ctx:r}}}),{c(){e=b("div"),s=b("div"),t=b("img"),a=x(),i=b("div"),C(n.$$.fragment),this.h()},l(h){e=k(h,"DIV",{class:!0});var p=E(e);s=k(p,"DIV",{class:!0});var $=E(s);t=k($,"IMG",{src:!0,alt:!0}),$.forEach(m),a=y(p),i=k(p,"DIV",{class:!0});var u=E(i);T(n.$$.fragment,u),u.forEach(m),p.forEach(m),this.h()},h(){N(t.src,l=Ee)||g(t,"src",l),g(t,"alt","A headshot photograph of me"),g(s,"class","mb-12 md:mb-0 profile-blob md:-mr-16 svelte-1camkky"),g(i,"class","card-wrapper svelte-1camkky"),g(e,"class","about-me flex flex-col justify-center items-center md:flex-row ")},m(h,p){I(h,e,p),_(e,s),_(s,t),_(e,a),_(e,i),S(n,i,null),c=!0},p(h,[p]){const $={};p&3&&($.$$scope={dirty:p,ctx:h}),n.$set($)},i(h){c||(q(n.$$.fragment,h),c=!0)},o(h){w(n.$$.fragment,h),c=!1},d(h){h&&m(e),P(n)}}}function Ve(r,e,s){let{description:t}=e;return r.$$set=l=>{"description"in l&&s(0,t=l.description)},[t]}class Ae extends H{constructor(e){super(),B(this,e,Ve,we,L,{description:0})}}function Z(r,e,s){const t=r.slice();return t[1]=e[s],t}function ee(r){let e,s,t,l,a=r[1].title+"",i,n,c,h=r[1].description+"",p,$,u,v,o;return u=new ie({props:{class:"primary",link:r[1].link,label:"View case"}}),{c(){e=b("div"),s=b("div"),t=x(),l=b("h3"),i=A(a),n=x(),c=b("p"),p=A(h),$=x(),C(u.$$.fragment),v=x(),this.h()},l(d){e=k(d,"DIV",{class:!0});var f=E(e);s=k(f,"DIV",{class:!0,style:!0}),E(s).forEach(m),t=y(f),l=k(f,"H3",{class:!0});var D=E(l);i=M(D,a),D.forEach(m),n=y(f),c=k(f,"P",{class:!0});var V=E(c);p=M(V,h),V.forEach(m),$=y(f),T(u.$$.fragment,f),v=y(f),f.forEach(m),this.h()},h(){g(s,"class","case-image mb-2 svelte-1o0rb2j"),X(s,"background-image","url('src/lib/assets/img/cases/"+r[1].image+"')"),g(l,"class","title-small mb-1"),g(c,"class","subtitle-small"),g(e,"class","case")},m(d,f){I(d,e,f),_(e,s),_(e,t),_(e,l),_(l,i),_(e,n),_(e,c),_(c,p),_(e,$),S(u,e,null),_(e,v),o=!0},p(d,f){(!o||f&1)&&X(s,"background-image","url('src/lib/assets/img/cases/"+d[1].image+"')"),(!o||f&1)&&a!==(a=d[1].title+"")&&O(i,a),(!o||f&1)&&h!==(h=d[1].description+"")&&O(p,h);const D={};f&1&&(D.link=d[1].link),u.$set(D)},i(d){o||(q(u.$$.fragment,d),o=!0)},o(d){w(u.$$.fragment,d),o=!1},d(d){d&&m(e),P(u)}}}function Me(r){let e,s,t=r[0],l=[];for(let i=0;i<t.length;i+=1)l[i]=ee(Z(r,t,i));const a=i=>w(l[i],1,1,()=>{l[i]=null});return{c(){e=b("div");for(let i=0;i<l.length;i+=1)l[i].c();this.h()},l(i){e=k(i,"DIV",{class:!0});var n=E(e);for(let c=0;c<l.length;c+=1)l[c].l(n);n.forEach(m),this.h()},h(){g(e,"class","grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16")},m(i,n){I(i,e,n);for(let c=0;c<l.length;c+=1)l[c]&&l[c].m(e,null);s=!0},p(i,[n]){if(n&1){t=i[0];let c;for(c=0;c<t.length;c+=1){const h=Z(i,t,c);l[c]?(l[c].p(h,n),q(l[c],1)):(l[c]=ee(h),l[c].c(),q(l[c],1),l[c].m(e,null))}for(me(),c=t.length;c<l.length;c+=1)a(c);de()}},i(i){if(!s){for(let n=0;n<t.length;n+=1)q(l[n]);s=!0}},o(i){l=l.filter(Boolean);for(let n=0;n<l.length;n+=1)w(l[n]);s=!1},d(i){i&&m(e),le(l,i)}}}function Ce(r,e,s){let{cases:t=[]}=e;return r.$$set=l=>{"cases"in l&&s(0,t=l.cases)},[t]}class Te extends H{constructor(e){super(),B(this,e,Ce,Me,L,{cases:0})}}function te(r,e,s){const t=r.slice();return t[2]=e[s],t}function Se(r){let e,s,t;return{c(){e=b("img"),this.h()},l(l){e=k(l,"IMG",{src:!0,alt:!0}),this.h()},h(){N(e.src,s="src/lib/assets/img/skills/light-"+r[2].image)||g(e,"src",s),g(e,"alt",t=r[2].altText)},m(l,a){I(l,e,a)},p(l,a){a&1&&!N(e.src,s="src/lib/assets/img/skills/light-"+l[2].image)&&g(e,"src",s),a&1&&t!==(t=l[2].altText)&&g(e,"alt",t)},d(l){l&&m(e)}}}function Pe(r){let e,s,t;return{c(){e=b("img"),this.h()},l(l){e=k(l,"IMG",{src:!0,alt:!0}),this.h()},h(){N(e.src,s="src/lib/assets/img/skills/dark-"+r[2].image)||g(e,"src",s),g(e,"alt",t=r[2].altText)},m(l,a){I(l,e,a)},p(l,a){a&1&&!N(e.src,s="src/lib/assets/img/skills/dark-"+l[2].image)&&g(e,"src",s),a&1&&t!==(t=l[2].altText)&&g(e,"alt",t)},d(l){l&&m(e)}}}function se(r){let e,s,t,l,a,i=r[2].title+"",n,c,h,p=r[2].description+"",$,u;function v(f,D){return f[1]?Pe:Se}let o=v(r),d=o(r);return{c(){e=b("div"),s=b("div"),t=b("div"),d.c(),l=x(),a=b("h3"),n=A(i),c=x(),h=b("p"),$=A(p),u=x(),this.h()},l(f){e=k(f,"DIV",{class:!0});var D=E(e);s=k(D,"DIV",{class:!0});var V=E(s);t=k(V,"DIV",{class:!0});var z=E(t);d.l(z),z.forEach(m),l=y(V),a=k(V,"H3",{class:!0});var F=E(a);n=M(F,i),F.forEach(m),c=y(V),h=k(V,"P",{class:!0});var G=E(h);$=M(G,p),G.forEach(m),V.forEach(m),u=y(D),D.forEach(m),this.h()},h(){g(t,"class","skill-image flex justify-center mb-6"),g(a,"class","title-small mb-1 text-center"),g(h,"class","text-center vague"),g(s,"class","skill-content svelte-1oc9j0"),g(e,"class","skill")},m(f,D){I(f,e,D),_(e,s),_(s,t),d.m(t,null),_(s,l),_(s,a),_(a,n),_(s,c),_(s,h),_(h,$),_(e,u)},p(f,D){o===(o=v(f))&&d?d.p(f,D):(d.d(1),d=o(f),d&&(d.c(),d.m(t,null))),D&1&&i!==(i=f[2].title+"")&&O(n,i),D&1&&p!==(p=f[2].description+"")&&O($,p)},d(f){f&&m(e),d.d()}}}function je(r){let e,s=r[0],t=[];for(let l=0;l<s.length;l+=1)t[l]=se(te(r,s,l));return{c(){e=b("div");for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l(l){e=k(l,"DIV",{class:!0});var a=E(e);for(let i=0;i<t.length;i+=1)t[i].l(a);a.forEach(m),this.h()},h(){g(e,"class","grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16")},m(l,a){I(l,e,a);for(let i=0;i<t.length;i+=1)t[i]&&t[i].m(e,null)},p(l,[a]){if(a&3){s=l[0];let i;for(i=0;i<s.length;i+=1){const n=te(l,s,i);t[i]?t[i].p(n,a):(t[i]=se(n),t[i].c(),t[i].m(e,null))}for(;i<t.length;i+=1)t[i].d(1);t.length=s.length}},i:j,o:j,d(l){l&&m(e),le(t,l)}}}function He(r,e,s){let t;he(r,_e,a=>s(1,t=a));let{skills:l=[]}=e;return r.$$set=a=>{"skills"in a&&s(0,l=a.skills)},[l,t]}class Be extends H{constructor(e){super(),B(this,e,He,je,L,{skills:0})}}const Le="Est occaecat dolor in adipisicing id duis consectetur et reprehenderit ut do in est cupidatat quis. Enim id excepteur dolore proident ullamco culpa commodo. Nostrud et aliquip duis labore fugiat magna fugiat consequat. Anim aliquip labore aliquip nulla anim veniam dolor cillum. Qui non Lorem cillum fugiat culpa cillum ipsum.",Oe=[{image:"test.png",title:"Social cycling app design",description:"Wireframing and design as freelance work.",link:"/cases/justgo"},{image:"test.png",title:"Portfolio Case 2",description:"This is the description for portfolio case 2.",link:"https://example.com/portfolio-case-2"},{image:"test.png",title:"Portfolio Case 3",description:"This is the description for portfolio case 3.",link:"https://example.com/portfolio-case-1"},{image:"test.png",title:"Portfolio Case 4",description:"This is the description for portfolio case 4.",link:"https://example.com/portfolio-case-1"}],ze=[{image:"design-systems.svg",title:"Design systems",description:"Esse reprehenderit aliquip nisi labore id mollit commodo cillum enim nostrud et. Commodo exercitation sit qui est exercitation labore anim incididunt.",altText:"An icon describing the skill in question"},{image:"user-research.svg",title:"User research",description:"Esse reprehenderit aliquip nisi labore id mollit commodo cillum enim nostrud et. Commodo exercitation sit qui est exercitation labore anim incididunt.",altText:"An icon describing the skill in question"},{image:"prototyping.svg",title:"Prototyping",description:"Esse reprehenderit aliquip nisi labore id mollit commodo cillum enim nostrud et. Commodo exercitation sit qui est exercitation labore anim incididunt.",altText:"An icon describing the skill in question"},{image:"accessibility.svg",title:"Accessibility",description:"Esse reprehenderit aliquip nisi labore id mollit commodo cillum enim nostrud et. Commodo exercitation sit qui est exercitation labore anim incididunt.",altText:"An icon describing the skill in question"}],Q={aboutMe:Le,cases:Oe,skills:ze};function Fe(r){let e,s;return e=new Ae({props:{description:Q.aboutMe}}),{c(){C(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,l){S(e,t,l),s=!0},p:j,i(t){s||(q(e.$$.fragment,t),s=!0)},o(t){w(e.$$.fragment,t),s=!1},d(t){P(e,t)}}}function Ge(r){let e,s;return e=new Te({props:{cases:Q.cases}}),{c(){C(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,l){S(e,t,l),s=!0},p:j,i(t){s||(q(e.$$.fragment,t),s=!0)},o(t){w(e.$$.fragment,t),s=!1},d(t){P(e,t)}}}function Ne(r){let e,s;return e=new Be({props:{skills:Q.skills}}),{c(){C(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,l){S(e,t,l),s=!0},p:j,i(t){s||(q(e.$$.fragment,t),s=!0)},o(t){w(e.$$.fragment,t),s=!1},d(t){P(e,t)}}}function Je(r){let e,s,t,l,a,i,n,c,h,p,$;return t=new $e({}),i=new J({props:{title:"About me",anchor:"about",$$slots:{default:[Fe]},$$scope:{ctx:r}}}),c=new J({props:{title:"My Work",anchor:"work",$$slots:{default:[Ge]},$$scope:{ctx:r}}}),p=new J({props:{title:"My skills",anchor:"skills",$$slots:{default:[Ne]},$$scope:{ctx:r}}}),{c(){e=b("meta"),s=x(),C(t.$$.fragment),l=x(),a=b("div"),C(i.$$.fragment),n=x(),C(c.$$.fragment),h=x(),C(p.$$.fragment),this.h()},l(u){const v=pe("svelte-akcf57",document.head);e=k(v,"META",{name:!0,content:!0}),v.forEach(m),s=y(u),T(t.$$.fragment,u),l=y(u),a=k(u,"DIV",{class:!0});var o=E(a);T(i.$$.fragment,o),n=y(o),T(c.$$.fragment,o),h=y(o),T(p.$$.fragment,o),o.forEach(m),this.h()},h(){document.title="Michael Jensen's portfolio",g(e,"name","description"),g(e,"content","Description of your webpage"),g(a,"class","container")},m(u,v){_(document.head,e),I(u,s,v),S(t,u,v),I(u,l,v),I(u,a,v),S(i,a,null),_(a,n),S(c,a,null),_(a,h),S(p,a,null),$=!0},p(u,[v]){const o={};v&1&&(o.$$scope={dirty:v,ctx:u}),i.$set(o);const d={};v&1&&(d.$$scope={dirty:v,ctx:u}),c.$set(d);const f={};v&1&&(f.$$scope={dirty:v,ctx:u}),p.$set(f)},i(u){$||(q(t.$$.fragment,u),q(i.$$.fragment,u),q(c.$$.fragment,u),q(p.$$.fragment,u),$=!0)},o(u){w(t.$$.fragment,u),w(i.$$.fragment,u),w(c.$$.fragment,u),w(p.$$.fragment,u),$=!1},d(u){m(e),u&&m(s),P(t,u),u&&m(l),u&&m(a),P(i),P(c),P(p)}}}class We extends H{constructor(e){super(),B(this,e,null,Je,L,{})}}export{We as component};
