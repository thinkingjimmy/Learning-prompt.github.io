"use strict";(self.webpackChunkribir_website=self.webpackChunkribir_website||[]).push([[6273],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(r),d=o,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(f,p(p({ref:t},s),{},{components:r})):n.createElement(f,p({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,p[1]=i;for(var c=2;c<a;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5477:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:3},p=void 0,i={unversionedId:"tutorial-basics/\u57fa\u672c\u539f\u5219 & \u5efa\u8bae",id:"tutorial-basics/\u57fa\u672c\u539f\u5219 & \u5efa\u8bae",title:"\u57fa\u672c\u539f\u5219 & \u5efa\u8bae",description:"\u5728\u548c ChatGPT \u5bf9\u8bdd\u65f6\uff0c\u4ea6\u6216\u8005\u5728\u4f7f\u7528\u548c\u8bbe\u8ba1 prompt \u65f6\uff0c\u6709\u4ee5\u4e0b\u51e0\u4e2a\u539f\u5219\u4e0e\u5efa\u8bae\u3002\u8bb0\u4f4f\u8fd9\u51e0\u4e2a\u539f\u5219\uff0c\u80fd\u8ba9\u4f60\u5199\u51fa\u66f4\u597d\u7684 prompt \ud83d\ude01",source:"@site/docs/tutorial-basics/\u57fa\u672c\u539f\u5219 & \u5efa\u8bae.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/\u57fa\u672c\u539f\u5219 & \u5efa\u8bae",permalink:"/docs/tutorial-basics/\u57fa\u672c\u539f\u5219 & \u5efa\u8bae",draft:!1,tags:[],version:"current",lastUpdatedAt:1680690331,formattedLastUpdatedAt:"2023\u5e744\u67085\u65e5",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u57fa\u7840\u7528\u6cd5",permalink:"/docs/tutorial-basics/\u57fa\u7840\u7528\u6cd5"},next:{title:"\u57fa\u672c\u4f7f\u7528\u573a\u666f & \u4f7f\u7528\u6280\u5de7",permalink:"/docs/category/\u57fa\u672c\u4f7f\u7528\u573a\u666f--\u4f7f\u7528\u6280\u5de7"}},l={},c=[{value:"\u5efa\u8bae\u4f7f\u7528\u6700\u65b0\u7684\u6a21\u578b",id:"\u5efa\u8bae\u4f7f\u7528\u6700\u65b0\u7684\u6a21\u578b",level:3},{value:"Prompt \u91cc\u6700\u597d\u5305\u542b\u5b8c\u6574\u7684\u4fe1\u606f",id:"prompt-\u91cc\u6700\u597d\u5305\u542b\u5b8c\u6574\u7684\u4fe1\u606f",level:3},{value:"Prompt \u6700\u597d\u7b80\u6d01\u6613\u61c2\uff0c\u5e76\u51cf\u5c11\u6b67\u4e49",id:"prompt-\u6700\u597d\u7b80\u6d01\u6613\u61c2\u5e76\u51cf\u5c11\u6b67\u4e49",level:3},{value:"Prompt \u8981\u4f7f\u7528\u6b63\u786e\u7684\u8bed\u6cd5\u3001\u62fc\u5199\uff0c\u4ee5\u53ca\u6807\u70b9",id:"prompt-\u8981\u4f7f\u7528\u6b63\u786e\u7684\u8bed\u6cd5\u62fc\u5199\u4ee5\u53ca\u6807\u70b9",level:3},{value:"\u4ece\u7b80\u5355\u7684\u5148\u5f00\u59cb\uff0c\u5e76\u7ed9\u4ea7\u54c1\u591a\u4e00\u70b9\u8010\u5fc3",id:"\u4ece\u7b80\u5355\u7684\u5148\u5f00\u59cb\u5e76\u7ed9\u4ea7\u54c1\u591a\u4e00\u70b9\u8010\u5fc3",level:3}],s={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5728\u548c ChatGPT \u5bf9\u8bdd\u65f6\uff0c\u4ea6\u6216\u8005\u5728\u4f7f\u7528\u548c\u8bbe\u8ba1 prompt \u65f6\uff0c\u6709\u4ee5\u4e0b\u51e0\u4e2a\u539f\u5219\u4e0e\u5efa\u8bae\u3002\u8bb0\u4f4f\u8fd9\u51e0\u4e2a\u539f\u5219\uff0c\u80fd\u8ba9\u4f60\u5199\u51fa\u66f4\u597d\u7684 prompt \ud83d\ude01"),(0,o.kt)("h3",{id:"\u5efa\u8bae\u4f7f\u7528\u6700\u65b0\u7684\u6a21\u578b"},"\u5efa\u8bae\u4f7f\u7528\u6700\u65b0\u7684\u6a21\u578b"),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u662f\u76f4\u63a5\u4f7f\u7528 AI \u4ea7\u54c1\uff0c\u6bd4\u5982 ChatGPT \u6216\u8005 Midjourney\uff0c\u90a3\u65e0\u9700\u5728\u610f\u8fd9\u4e2a\u539f\u5219\u3002\u5982\u679c\u4f60\u662f\u901a\u8fc7 API \u6216\u8005 OpenAI Playground \u7684\u65b9\u5f0f\u4f7f\u7528\uff0c\u5219\u5efa\u8bae\u4f60\u5148\u4f7f\u7528\u6700\u65b0\u7684\u6a21\u578b\u6d4b\u8bd5\u3002"),(0,o.kt)("h3",{id:"prompt-\u91cc\u6700\u597d\u5305\u542b\u5b8c\u6574\u7684\u4fe1\u606f"},"Prompt \u91cc\u6700\u597d\u5305\u542b\u5b8c\u6574\u7684\u4fe1\u606f"),(0,o.kt)("p",null,"\u8fd9\u4e2a\u662f\u5bf9\u7ed3\u679c\u5f71\u54cd\u6700\u5927\u7684\u56e0\u7d20\u3002\u6bd4\u5982\u5982\u679c\u4f60\u60f3\u8ba9 AI \u5199\u4e00\u9996\u5173\u4e8e OpenAI \u7684\u8bd7\u3002"),(0,o.kt)("p",null,"Less effective prompt\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-other"},"Write a poem about OpenAI.\n")),(0,o.kt)("p",null,"\u5b83\u751f\u6210\u7684\u7b54\u6848\u53ef\u80fd\u5c31\u4f1a\u5f88\u5bbd\u6cdb\uff0c\u800c\u66f4\u597d\u7684\u65b9\u5f0f\u662f\u589e\u52a0\u66f4\u591a\u7684\u4fe1\u606f\u3002"),(0,o.kt)("p",null,"Better prompt\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-other"},"Write a short inspiring poem about OpenAI, focusing on the recent DALL-E product launch (DALL-E is a text to image ML model) in the style of a {famous poet}\n")),(0,o.kt)("h3",{id:"prompt-\u6700\u597d\u7b80\u6d01\u6613\u61c2\u5e76\u51cf\u5c11\u6b67\u4e49"},"Prompt \u6700\u597d\u7b80\u6d01\u6613\u61c2\uff0c\u5e76\u51cf\u5c11\u6b67\u4e49"),(0,o.kt)("p",null,"\u8fd9\u4e2a\u6bd4\u8f83\u597d\u7406\u89e3\uff0c\u5373\u4f7f\u4f60\u8ddf\u4eba\u8bf4\u8bdd\uff0c\u8bf4\u4e00\u4e9b\u7b80\u5355\u7684\u77ed\u53e5\uff0c\u5bf9\u65b9\u4e5f\u4f1a\u66f4\u5bb9\u6613\u542c\u61c2\uff0cAI \u4e5f\u662f\u8fd9\u6837\u3002\u53e6\u5916\uff0c\u5728 prompt \u91cc\u4e5f\u9700\u8981\u51cf\u5c11\u4e00\u4e9b\u6b67\u4e49\uff0c\u5c11\u7528\u6a21\u68f1\u4e24\u53ef\u7684\u8bcd\u8bed\u3002"),(0,o.kt)("p",null,"\u6bd4\u5982\u50cf\u8fd9\u4e2a\u5c31\u5f88\u4e0d\u660e\u786e\uff0c\u4ec0\u4e48\u53eb not too much more\uff1f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-other"},"The description for this product should be fairly short, a few sentences only, and not too much more.\n")),(0,o.kt)("p",null,"\u66f4\u597d\u7684 prompt \u662f\u8fd9\u6837\u7684\uff0c\u660e\u786e\u544a\u77e5\u8981\u5199\u591a\u5c11\u53e5\u8bdd\uff0c\u5c31\u6bd4\u8f83\u660e\u786e\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-other"},"Use a 3 to 5 sentence paragraph to describe this product.\n")),(0,o.kt)("h3",{id:"prompt-\u8981\u4f7f\u7528\u6b63\u786e\u7684\u8bed\u6cd5\u62fc\u5199\u4ee5\u53ca\u6807\u70b9"},"Prompt \u8981\u4f7f\u7528\u6b63\u786e\u7684\u8bed\u6cd5\u3001\u62fc\u5199\uff0c\u4ee5\u53ca\u6807\u70b9"),(0,o.kt)("p",null,"\u7279\u522b\u662f\u5728\u4f7f\u7528\u82f1\u8bed\u7684 prompt \u7684\u65f6\u5019\uff0c\u4e00\u5b9a\u8981\u6ce8\u610f\u8bed\u6cd5\u548c\u62fc\u5199\u3002"),(0,o.kt)("admonition",{title:"\ud83d\udea7 ",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u4f8b\u5b50\u5f85\u8865\u5145")),(0,o.kt)("h3",{id:"\u4ece\u7b80\u5355\u7684\u5148\u5f00\u59cb\u5e76\u7ed9\u4ea7\u54c1\u591a\u4e00\u70b9\u8010\u5fc3"},"\u4ece\u7b80\u5355\u7684\u5148\u5f00\u59cb\uff0c\u5e76\u7ed9\u4ea7\u54c1\u591a\u4e00\u70b9\u8010\u5fc3"),(0,o.kt)("p",null,"\u6700\u540e\u4e00\u70b9\u7b97\u662f\u6211\u4e2a\u4eba\u7684\u5efa\u8bae\u3002\u5982\u6211\u5728\u524d\u9762\u63d0\u5230\u7684\u4f8b\u5b50 ",(0,o.kt)("inlineCode",{parentName:"p"},"What is 100*100/40*56\uff1f"),"\u4e00\u6837\uff0c\u5982\u679c\u53d1\u73b0\u673a\u5668\u7406\u89e3\u9519\u8bef\uff0c\u4e0d\u59a8\u8865\u5145\u70b9\u4fe1\u606f\uff0c\u4e0d\u59a8\u591a\u5b9e\u9a8c\u51e0\u6b21\uff0c\u7ed9 AI \u591a\u4e00\u70b9\u8010\u5fc3\u3002"))}u.isMDXComponent=!0}}]);