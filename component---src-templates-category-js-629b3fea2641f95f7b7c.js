(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{Mdw5:function(t,e,a){"use strict";a.r(e);var n=a("t8Zj"),r=a("wTIg"),c=a("q1tI"),i=a("vrFN"),s=a("4Fbo"),o=a("CZVI"),l=a("7oih"),f=a("Wbzz"),g=a("cr+I"),u=a.n(g),b=a("TepU"),d=a("TWQg"),m=a("H2bQ"),j=a("dar/"),O=a("qKvR");var p=Object(r.a)("div",{target:"e5hkq810"})({name:"1bdwg0l",styles:"width:100%;max-width:768px;margin-left:auto;margin-right:auto;"}),h={name:"1y7rtor",styles:"margin-top:1rem;padding-left:1rem;padding-right:1rem;font-size:2.25rem;font-weight:700;"},v={name:"b7ldc7",styles:"margin-left:1rem;margin-right:1rem;font-size:1.25rem;"};e.default=function(t){var e=t.data,a=t.location,r=e.allMarkdownRemark.edges,g=e.site.siteMetadata.configs.countOfInitialPost,w=String(a.pathname).split("/").join(" ").trim(),k=Object(m.a)(w),y=k[0],P=k[1],I=k[2],q=Object(c.useRef)(),z=Object(c.useState)({tag:"ALL",filteredPosts:r}),L=z[0],M=z[1],T=Object(c.useMemo)((function(){var t=[];r.map((function(e){var a=e.node;return t=[].concat(Object(n.a)(t),Object(n.a)(a.frontmatter.tags))}));for(var e=0;e<t.length;++e)for(var a=e+1;a<t.length;++a)t[e]===t[a]&&t.splice(a--,1);return t}),[r]),C=Object(c.useCallback)((function(t){void 0===t&&(t=L.tag),M("ALL"===t?{tag:t,filteredPosts:r}:{tag:t,filteredPosts:r.filter((function(e){return e.node.frontmatter.tags.includes(t)}))})}),[r,L.tag]);Object(d.a)((function(){r.length>P.current*g&&(I(),C())}),q);return Object(c.useEffect)((function(){if(a.href){var t=u.a.parseUrl(a.href).query.tag;t&&C(t)}}),[a.href,C]),Object(O.c)(l.a,null,Object(O.c)(i.a,{title:w}),Object(O.c)(p,null,Object(O.c)(s.a,null),Object(O.c)("h1",{className:"category-title",css:h},"#",w)),Object(O.c)(j.a,{path:a.pathname}),Object(O.c)(p,null,Object(O.c)(b.a,{tags:T,onTagClick:function(t){Object(f.navigate)("?tag="+t),C(t)},state:L}),0===L.filteredPosts.length&&Object(O.c)("div",{css:v},"no post.."),L.filteredPosts.slice(0,y*g).map((function(t,e){return Object(O.c)(o.a,{post:t,key:"post_"+e})}))),Object(O.c)("div",{ref:q}))}}}]);
//# sourceMappingURL=component---src-templates-category-js-629b3fea2641f95f7b7c.js.map