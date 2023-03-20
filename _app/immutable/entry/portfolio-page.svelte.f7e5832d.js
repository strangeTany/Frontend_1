import{S as x,i as P,s as q,k as u,l as d,m as v,h as f,n as m,b as _,D as w,K as z,q as H,a as $,r as K,c as I,p as M,C as j,u as Q,J as k,y as S,L as V,z as C,A as T,g as Y,d as B,B as F}from"../chunks/index.73dbc8e7.js";function y(r,e,l){const t=r.slice();return t[1]=e[l],t}function A(r,e,l){const t=r.slice();return t[4]=e[l],t}function N(r){let e,l,t;return{c(){e=u("img"),this.h()},l(s){e=d(s,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){m(e,"class","work svelte-1fc67z8"),k(e.src,l=r[4][0])||m(e,"src",l),m(e,"alt",t=r[4][1])},m(s,o){_(s,e,o)},p(s,o){o&1&&!k(e.src,l=s[4][0])&&m(e,"src",l),o&1&&t!==(t=s[4][1])&&m(e,"alt",t)},d(s){s&&f(e)}}}function E(r){let e,l=r[1].jobName+"",t,s,o,i,h,g=r[1].images,c=[];for(let a=0;a<g.length;a+=1)c[a]=N(A(r,g,a));return{c(){e=u("h3"),t=H(l),s=$(),o=u("div"),i=u("div");for(let a=0;a<c.length;a+=1)c[a].c();h=$(),this.h()},l(a){e=d(a,"H3",{});var p=v(e);t=K(p,l),p.forEach(f),s=I(a),o=d(a,"DIV",{class:!0});var n=v(o);i=d(n,"DIV",{class:!0,style:!0});var b=v(i);for(let D=0;D<c.length;D+=1)c[D].l(b);b.forEach(f),h=I(n),n.forEach(f),this.h()},h(){m(i,"class","imagegroup svelte-1fc67z8"),M(i,"animation-delay","1s"),m(o,"class","row small svelte-1fc67z8")},m(a,p){_(a,e,p),j(e,t),_(a,s,p),_(a,o,p),j(o,i);for(let n=0;n<c.length;n+=1)c[n]&&c[n].m(i,null);j(o,h)},p(a,p){if(p&1&&l!==(l=a[1].jobName+"")&&Q(t,l),p&1){g=a[1].images;let n;for(n=0;n<g.length;n+=1){const b=A(a,g,n);c[n]?c[n].p(b,p):(c[n]=N(b),c[n].c(),c[n].m(i,null))}for(;n<c.length;n+=1)c[n].d(1);c.length=g.length}},d(a){a&&f(e),a&&f(s),a&&f(o),z(c,a)}}}function G(r){let e,l=r[0],t=[];for(let s=0;s<l.length;s+=1)t[s]=E(y(r,l,s));return{c(){e=u("div");for(let s=0;s<t.length;s+=1)t[s].c();this.h()},l(s){e=d(s,"DIV",{id:!0,class:!0});var o=v(e);for(let i=0;i<t.length;i+=1)t[i].l(o);o.forEach(f),this.h()},h(){m(e,"id","Portfolio"),m(e,"class","tabcontent")},m(s,o){_(s,e,o);for(let i=0;i<t.length;i+=1)t[i]&&t[i].m(e,null)},p(s,[o]){if(o&1){l=s[0];let i;for(i=0;i<l.length;i+=1){const h=y(s,l,i);t[i]?t[i].p(h,o):(t[i]=E(h),t[i].c(),t[i].m(e,null))}for(;i<t.length;i+=1)t[i].d(1);t.length=l.length}},i:w,o:w,d(s){s&&f(e),z(t,s)}}}function R(r,e,l){let{jobs:t}=e;return r.$$set=s=>{"jobs"in s&&l(0,t=s.jobs)},[t]}class J extends x{constructor(e){super(),P(this,e,R,G,q,{jobs:0})}}function L(r){let e,l,t,s,o;return s=new J({props:{jobs:r[0]}}),{c(){e=u("meta"),l=$(),t=u("div"),S(s.$$.fragment),this.h()},l(i){const h=V("svelte-1ipyxwn",document.head);e=d(h,"META",{name:!0,content:!0}),h.forEach(f),l=I(i),t=d(i,"DIV",{});var g=v(t);C(s.$$.fragment,g),g.forEach(f),this.h()},h(){document.title="Portfolio",m(e,"name","description"),m(e,"content","My portfolio")},m(i,h){j(document.head,e),_(i,l,h),_(i,t,h),T(s,t,null),o=!0},p:w,i(i){o||(Y(s.$$.fragment,i),o=!0)},o(i){B(s.$$.fragment,i),o=!1},d(i){f(e),i&&f(l),i&&f(t),F(s)}}}function Z(r){return[[{jobName:"Graphical Designer",images:[["https://i.ibb.co/xHsKfHm/poster1.png","stand up poster 1"],["https://i.ibb.co/FwNRNjS/poster2.png","stand up poster 2"],["https://i.ibb.co/hMY6dpC/poster3.png","stand up poster 3"],["https://i.ibb.co/Qjgghx1/stickers.jpg","stand up stickers"]]},{jobName:"3D Artist",images:[["https://i.ibb.co/DgR2T7K/steve.png","steve 3d model"],["https://i.ibb.co/qpwf14w/craft.png","3d craft models"],["https://i.ibb.co/k08DK8g/monsters.png","3d monsteers models"]]},{jobName:"2D Artist",images:[["https://i.ibb.co/QYj13YP/coffee-set.png","drawing of coffee set"],["https://i.ibb.co/zmFw2bj/girl-in-cafe.png","drawing of girl in cafe"],["https://i.ibb.co/THS5QBZ/dead-fish.jpg","drawing of fish in aquarium"],["https://i.ibb.co/9t5NQn3/me.png","drawing of dog in bed"]]}]]}class U extends x{constructor(e){super(),P(this,e,Z,L,q,{})}}export{U as default};
