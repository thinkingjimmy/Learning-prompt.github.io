"use strict";(self.webpackChunkribir_website=self.webpackChunkribir_website||[]).push([[7845],{3905:(t,e,r)=>{r.d(e,{Zo:()=>m,kt:()=>k});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var p=a.createContext({}),s=function(t){var e=a.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},m=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},u="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,p=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),u=s(r),d=n,k=u["".concat(p,".").concat(d)]||u[d]||c[d]||o;return r?a.createElement(k,l(l({ref:e},m),{},{components:r})):a.createElement(k,l({ref:e},m))}));function k(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[u]="string"==typeof t?t:n,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},556:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:1},l=void 0,i={unversionedId:"chatGPT/tutorial-extras/ChatGPT Prompt Framework",id:"chatGPT/tutorial-extras/ChatGPT Prompt Framework",title:"ChatGPT Prompt Framework",description:"\u770b\u5b8c\u57fa\u7840\u7bc7\u7684\u5404\u79cd\u573a\u666f\u4ecb\u7ecd\u540e\uff0c\u4f60\u5e94\u8be5\u5bf9 Prompt \u6709\u8f83\u6df1\u7684\u7406\u89e3\u3002",source:"@site/docs/chatGPT/tutorial-extras/ChatGPT Prompt Framework.md",sourceDirName:"chatGPT/tutorial-extras",slug:"/chatGPT/tutorial-extras/ChatGPT Prompt Framework",permalink:"/docs/chatGPT/tutorial-extras/ChatGPT Prompt Framework",draft:!1,tags:[],version:"current",lastUpdatedAt:1683383031,formattedLastUpdatedAt:"2023\u5e745\u67086\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"chatGPT",previous:{title:"\ud83d\ude80 \u9ad8\u7ea7\u7bc7",permalink:"/docs/category/-\u9ad8\u7ea7\u7bc7"},next:{title:"Zero-Shot Prompts",permalink:"/docs/chatGPT/tutorial-extras/Zero-Shot Prompts"}},p={},s=[{value:"Basic Prompt Framework",id:"basic-prompt-framework",level:2},{value:"CRISPE Prompt Framework",id:"crispe-prompt-framework",level:2}],m={toc:s};function u(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("script",{defer:"defer",src:"https://embed.trydyno.com/embedder.js"}),(0,n.kt)("link",{href:"https://embed.trydyno.com/embedder.css",rel:"stylesheet"})),(0,n.kt)("p",null,"\u770b\u5b8c\u57fa\u7840\u7bc7\u7684\u5404\u79cd\u573a\u666f\u4ecb\u7ecd\u540e\uff0c\u4f60\u5e94\u8be5\u5bf9 Prompt \u6709\u8f83\u6df1\u7684\u7406\u89e3\u3002"),(0,n.kt)("p",null,"\u4e4b\u524d\u7684\u7ae0\u8282\u6211\u4eec\u8bb2\u7684\u90fd\u662f\u6240\u8c13\u7684\u300c\u672f\u300d\uff0c\u66f4\u591a\u5730\u96c6\u4e2d\u8bb2\u5982\u4f55\u7528\uff0c\u4f46\u8bb2\u300c\u9053\u300d\u7684\u90e8\u5206\u4e0d\u591a\u3002\u9ad8\u7ea7\u7bc7\u9664\u4e86\u4f1a\u8bb2\u66f4\u9ad8\u7ea7\u7684\u8fd0\u7528\u5916\uff0c\u8fd8\u4f1a\u8bb2\u66f4\u591a\u300c\u9053\u300d\u7684\u90e8\u5206\u3002"),(0,n.kt)("p",null,"\u9ad8\u7ea7\u7bc7\u7684\u5f00\u7bc7\uff0c\u6211\u4eec\u6765\u8bb2\u4e00\u4e0b\u6784\u6210 prompt \u7684\u6846\u67b6\u3002"),(0,n.kt)("h2",{id:"basic-prompt-framework"},"Basic Prompt Framework"),(0,n.kt)("p",null,"\u67e5\u9605\u4e86\u975e\u5e38\u591a\u5173\u4e8e ChatGPT prompt \u7684\u6846\u67b6\u8d44\u6599\uff0c\u6211\u76ee\u524d\u89c9\u5f97\u5199\u5f97\u6700\u6e05\u6670\u7684\u662f Elavis Saravia ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/dair-ai/Prompt-Engineering-Guide/blob/main/guides/prompts-intro.md"},"\u603b\u7ed3"),"\u7684\u6846\u67b6\uff0c\u4ed6\u8ba4\u4e3a\u4e00\u4e2a prompt \u91cc\u9700\u5305\u542b\u4ee5\u4e0b\u51e0\u4e2a\u5143\u7d20\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Instruction\uff08\u5fc5\u987b\uff09\uff1a")," \u6307\u4ee4\uff0c\u5373\u4f60\u5e0c\u671b\u6a21\u578b\u6267\u884c\u7684\u5177\u4f53\u4efb\u52a1\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Context\uff08\u9009\u586b\uff09\uff1a")," \u80cc\u666f\u4fe1\u606f\uff0c\u6216\u8005\u8bf4\u662f\u4e0a\u4e0b\u6587\u4fe1\u606f\uff0c\u8fd9\u53ef\u4ee5\u5f15\u5bfc\u6a21\u578b\u505a\u51fa\u66f4\u597d\u7684\u53cd\u5e94\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Input Data\uff08\u9009\u586b\uff09\uff1a")," \u8f93\u5165\u6570\u636e\uff0c\u544a\u77e5\u6a21\u578b\u9700\u8981\u5904\u7406\u7684\u6570\u636e\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Output Indicator\uff08\u9009\u586b\uff09\uff1a")," \u8f93\u51fa\u6307\u793a\u5668\uff0c\u544a\u77e5\u6a21\u578b\u6211\u4eec\u8981\u8f93\u51fa\u7684\u7c7b\u578b\u6216\u683c\u5f0f\u3002")),(0,n.kt)("p",null,"\u53ea\u8981\u4f60\u6309\u7167\u8fd9\u4e2a\u6846\u67b6\u5199 prompt \uff0c\u6a21\u578b\u8fd4\u56de\u7684\u7ed3\u679c\u90fd\u4e0d\u4f1a\u5dee\u3002"),(0,n.kt)("p",null,"\u5f53\u7136\uff0c\u4f60\u5728\u5199 prompt \u7684\u65f6\u5019\uff0c\u5e76\u4e0d\u4e00\u5b9a\u8981\u5305\u542b\u6240\u67094\u4e2a\u5143\u7d20\uff0c\u800c\u662f\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u7684\u9700\u6c42\u6392\u5217\u7ec4\u5408\u3002\u6bd4\u5982\u62ff\u524d\u9762\u7684\u51e0\u4e2a\u573a\u666f\u4f5c\u4e3a\u4f8b\u5b50\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u63a8\u7406\uff1aInstruction + Context + Input Data"),(0,n.kt)("li",{parentName:"ul"},"\u4fe1\u606f\u63d0\u53d6\uff1aInstruction + Context + Input Data + Output Indicator")),(0,n.kt)("h2",{id:"crispe-prompt-framework"},"CRISPE Prompt Framework"),(0,n.kt)("p",null,"\u53e6\u4e00\u4e2a\u6211\u89c9\u5f97\u5f88\u4e0d\u9519\u7684 Framework \u662f ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/mattnigh/ChatGPT3-Free-Prompt-List"},"Matt Nigh")," \u7684 CRISPE Framework\uff0c\u8fd9\u4e2a framework \u66f4\u52a0\u590d\u6742\uff0c\u4f46\u5b8c\u5907\u6027\u4f1a\u6bd4\u8f83\u9ad8\uff0c\u6bd4\u8f83\u9002\u5408\u7528\u4e8e\u7f16\u5199 prompt \u6a21\u677f\u3002CRISPE \u5206\u522b\u4ee3\u8868\u4ee5\u4e0b\u542b\u4e49\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"CR\uff1a")," Capacity and Role\uff08\u80fd\u529b\u4e0e\u89d2\u8272\uff09\u3002\u4f60\u5e0c\u671b ChatGPT \u626e\u6f14\u600e\u6837\u7684\u89d2\u8272\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"I\uff1a")," Insight\uff08\u6d1e\u5bdf\u529b\uff09\uff0c\u80cc\u666f\u4fe1\u606f\u548c\u4e0a\u4e0b\u6587\uff08\u5766\u7387\u8bf4\u6765\u6211\u89c9\u5f97\u7528 Context \u66f4\u597d\uff09\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"S\uff1a")," Statement\uff08\u6307\u4ee4\uff09\uff0c\u4f60\u5e0c\u671b ChatGPT \u505a\u4ec0\u4e48\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"P\uff1a")," Personality\uff08\u4e2a\u6027\uff09\uff0c\u4f60\u5e0c\u671b ChatGPT \u4ee5\u4ec0\u4e48\u98ce\u683c\u6216\u65b9\u5f0f\u56de\u7b54\u4f60\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"E\uff1a")," Experiment\uff08\u5c1d\u8bd5\uff09\uff0c\u8981\u6c42 ChatGPT \u4e3a\u4f60\u63d0\u4f9b\u591a\u4e2a\u7b54\u6848\u3002")),(0,n.kt)("p",null,"\u4ee5\u4e0b\u662f\u8fd9\u51e0\u4e2a\u53c2\u6570\u7684\u4f8b\u5b50\uff1a"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Step")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Example")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Capacity and Role"),(0,n.kt)("td",{parentName:"tr",align:null},"Act as an expert on software development on the topic of machine learning frameworks, and an expert blog writer.",(0,n.kt)("br",null),"\u628a\u4f60\u60f3\u8c61\u6210\u673a\u5668\u5b66\u4e60\u6846\u67b6\u4e3b\u9898\u7684\u8f6f\u4ef6\u5f00\u53d1\u4e13\u5bb6\uff0c\u4ee5\u53ca\u4e13\u4e1a\u535a\u5ba2\u4f5c\u8005\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Insight"),(0,n.kt)("td",{parentName:"tr",align:null},"The audience for this blog is technical professionals who are interested in learning about the latest advancements in machine learning.",(0,n.kt)("br",null),"\u8fd9\u4e2a\u535a\u5ba2\u7684\u8bfb\u8005\u4e3b\u8981\u662f\u6709\u5174\u8da3\u4e86\u89e3\u673a\u5668\u5b66\u4e60\u6700\u65b0\u8fdb\u5c55\u6280\u672f\u7684\u4e13\u4e1a\u4eba\u58eb\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Statement"),(0,n.kt)("td",{parentName:"tr",align:null},"Provide a comprehensive overview of the most popular machine learning frameworks, including their strengths and weaknesses. Include real-life examples and case studies to illustrate how these frameworks have been successfully used in various industries.",(0,n.kt)("br",null),"\u63d0\u4f9b\u6700\u6d41\u884c\u7684\u673a\u5668\u5b66\u4e60\u6846\u67b6\u7684\u5168\u9762\u6982\u8ff0\uff0c\u5305\u62ec\u5b83\u4eec\u7684\u4f18\u70b9\u548c\u7f3a\u70b9\u3002\u5305\u62ec\u73b0\u5b9e\u751f\u6d3b\u4e2d\u7684\u4f8b\u5b50\uff0c\u548c\u7814\u7a76\u6848\u4f8b\uff0c\u4ee5\u8bf4\u660e\u8fd9\u4e9b\u6846\u67b6\u5982\u4f55\u5728\u5404\u4e2a\u884c\u4e1a\u4e2d\u6210\u529f\u5730\u88ab\u4f7f\u7528\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Personality"),(0,n.kt)("td",{parentName:"tr",align:null},"When responding, use a mix of the writing styles of Andrej Karpathy, Francois Chollet, Jeremy Howard, and Yann LeCun.",(0,n.kt)("br",null),"\u5728\u56de\u5e94\u65f6\uff0c\u6df7\u5408\u4f7f\u7528 Andrej Karpathy\u3001Francois Chollet\u3001Jeremy Howard \u548c Yann LeCun \u7684\u5199\u4f5c\u98ce\u683c\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Experiment"),(0,n.kt)("td",{parentName:"tr",align:null},"Give me multiple different examples.",(0,n.kt)("br",null),"\u7ed9\u6211\u591a\u4e2a\u4e0d\u540c\u7684\u4f8b\u5b50\u3002")))),(0,n.kt)("p",null,"\u5c06\u6240\u6709\u7684\u5143\u7d20\u90fd\u7ec4\u5408\u5728\u4e00\u8d77\uff0c\u5c31\u53d8\u6210\u4e86\u8fd9\u6837\u7684 prompt\uff0c\u5bf9\u6bd4\u57fa\u7840 prompt \u751f\u6210\u7684\u7ed3\u679c\u4f1a\u975e\u5e38\u4e0d\u4e00\u6837\uff0c\u5404\u4f4d\u53ef\u4ee5\u5728\u4e0b\u65b9\u8bd5\u7528\uff1a"),(0,n.kt)("div",{"trydyno-embed":"","openai-model":"text-davinci-003","initial-prompt":"Act as an expert on software development on the topic of machine learning frameworks, and an expert blog writer.The audience for this blog is technical professionals who are interested in learning about the latest advancements in machine learning.Provide a comprehensive overview of the most popular machine learning frameworks, including their strengths and weaknesses. Include real-life examples and case studies to illustrate how these frameworks have been successfully used in various industries.When responding, use a mix of the writing styles of Andrej Karpathy, Francois Chollet, Jeremy Howard, and Yann LeCun.Give me multiple different examples.","initial-response":"","max-tokens":"256","box-rows":"3","model-temp":"0.7","top-p":"1"},(0,n.kt)("noscript",null,"Failed to load Dyno Embed: JavaScript must be enabled")))}u.isMDXComponent=!0}}]);