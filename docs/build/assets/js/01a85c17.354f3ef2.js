"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4013],{1460:(e,s,t)=>{t.d(s,{Z:()=>v});var a=t(7294),i=t(512),r=t(6040),l=t(7524),n=t(3692),c=t(5999),o=t(6550),m=t(8596);function d(e){const{pathname:s}=(0,o.TH)();return(0,a.useMemo)((()=>e.filter((e=>function(e,s){return!(e.unlisted&&!(0,m.Mg)(e.permalink,s))}(e,s)))),[e,s])}const u={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};var g=t(5893);function h(e){let{sidebar:s}=e;const t=d(s.items);return(0,g.jsx)("aside",{className:"col col--3",children:(0,g.jsxs)("nav",{className:(0,i.Z)(u.sidebar,"thin-scrollbar"),"aria-label":(0,c.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,g.jsx)("div",{className:(0,i.Z)(u.sidebarItemTitle,"margin-bottom--md"),children:s.title}),(0,g.jsx)("ul",{className:(0,i.Z)(u.sidebarItemList,"clean-list"),children:t.map((e=>(0,g.jsx)("li",{className:u.sidebarItem,children:(0,g.jsx)(n.Z,{isNavLink:!0,to:e.permalink,className:u.sidebarItemLink,activeClassName:u.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var b=t(3102);function p(e){let{sidebar:s}=e;const t=d(s.items);return(0,g.jsx)("ul",{className:"menu__list",children:t.map((e=>(0,g.jsx)("li",{className:"menu__list-item",children:(0,g.jsx)(n.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function j(e){return(0,g.jsx)(b.Zo,{component:p,props:e})}function x(e){let{sidebar:s}=e;const t=(0,l.i)();return s?.items.length?"mobile"===t?(0,g.jsx)(j,{sidebar:s}):(0,g.jsx)(h,{sidebar:s}):null}function v(e){const{sidebar:s,toc:t,children:a,...l}=e,n=s&&s.items.length>0;return(0,g.jsx)(r.Z,{...l,children:(0,g.jsx)("div",{className:"container margin-vert--lg",children:(0,g.jsxs)("div",{className:"row",children:[(0,g.jsx)(x,{sidebar:s}),(0,g.jsx)("main",{className:(0,i.Z)("col",{"col--7":n,"col--9 col--offset-1":!n}),itemScope:!0,itemType:"https://schema.org/Blog",children:a}),t&&(0,g.jsx)("div",{className:"col col--2",children:t})]})})})}},1223:(e,s,t)=>{t.r(s),t.d(s,{default:()=>p});t(7294);var a=t(512),i=t(5999);const r=()=>(0,i.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});var l=t(1944),n=t(5281),c=t(1460),o=t(3008),m=t(2503);const d={tag:"tag_Nnez"};var u=t(5893);function g(e){let{letterEntry:s}=e;return(0,u.jsxs)("article",{children:[(0,u.jsx)(m.Z,{as:"h2",id:s.letter,children:s.letter}),(0,u.jsx)("ul",{className:"padding--none",children:s.tags.map((e=>(0,u.jsx)("li",{className:d.tag,children:(0,u.jsx)(o.Z,{...e})},e.permalink)))}),(0,u.jsx)("hr",{})]})}function h(e){let{tags:s}=e;const t=function(e){const s={};return Object.values(e).forEach((e=>{const t=function(e){return e[0].toUpperCase()}(e.label);s[t]??=[],s[t].push(e)})),Object.entries(s).sort(((e,s)=>{let[t]=e,[a]=s;return t.localeCompare(a)})).map((e=>{let[s,t]=e;return{letter:s,tags:t.sort(((e,s)=>e.label.localeCompare(s.label)))}}))}(s);return(0,u.jsx)("section",{className:"margin-vert--lg",children:t.map((e=>(0,u.jsx)(g,{letterEntry:e},e.letter)))})}var b=t(197);function p(e){let{tags:s,sidebar:t}=e;const i=r();return(0,u.jsxs)(l.FG,{className:(0,a.Z)(n.k.wrapper.blogPages,n.k.page.blogTagsListPage),children:[(0,u.jsx)(l.d,{title:i}),(0,u.jsx)(b.Z,{tag:"blog_tags_list"}),(0,u.jsxs)(c.Z,{sidebar:t,children:[(0,u.jsx)(m.Z,{as:"h1",children:i}),(0,u.jsx)(h,{tags:s})]})]})}},3008:(e,s,t)=>{t.d(s,{Z:()=>n});t(7294);var a=t(512),i=t(3692);const r={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var l=t(5893);function n(e){let{permalink:s,label:t,count:n}=e;return(0,l.jsxs)(i.Z,{href:s,className:(0,a.Z)(r.tag,n?r.tagWithCount:r.tagRegular),children:[t,n&&(0,l.jsx)("span",{children:n})]})}}}]);