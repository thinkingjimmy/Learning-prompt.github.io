"use strict";(self.webpackChunkribir_website=self.webpackChunkribir_website||[]).push([[6906],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),h=a,u=m["".concat(c,".").concat(h)]||m[h]||f[h]||i;return n?r.createElement(u,o(o({ref:t},p),{},{components:n})):r.createElement(u,o({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1981:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:6},o="Scenario 6: Information Explanation",s={unversionedId:"chatGPT/tutorial-basics/basic-scenarios/scenario-6-information-explanation",id:"chatGPT/tutorial-basics/basic-scenarios/scenario-6-information-explanation",title:"Scenario 6: Information Explanation",description:"Scenario",source:"@site/docs/chatGPT/tutorial-basics/basic-scenarios/scenario-6-information-explanation.md",sourceDirName:"chatGPT/tutorial-basics/basic-scenarios",slug:"/chatGPT/tutorial-basics/basic-scenarios/scenario-6-information-explanation",permalink:"/docs/chatGPT/tutorial-basics/basic-scenarios/scenario-6-information-explanation",draft:!1,tags:[],version:"current",lastUpdatedAt:1693896046,formattedLastUpdatedAt:"Sep 5, 2023",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"chatGPT",previous:{title:"Scenario 5: Rewriting Content",permalink:"/docs/chatGPT/tutorial-basics/basic-scenarios/scenario-5-rewriting-content"},next:{title:"Scenario 7: Information Summarization",permalink:"/docs/chatGPT/tutorial-basics/basic-scenarios/scenario-7-information-summarization"}},c={},l=[{value:"Scenario",id:"scenario",level:2}],p={toc:l},m="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"scenario-6-information-explanation"},"Scenario 6: Information Explanation"),(0,a.kt)("head",null,(0,a.kt)("script",{defer:"defer",src:"https://embed.trydyno.com/embedder.js"}),(0,a.kt)("link",{href:"https://embed.trydyno.com/embedder.css",rel:"stylesheet"})),(0,a.kt)("h2",{id:"scenario"},"Scenario"),(0,a.kt)("p",null,'The second major "enhancing existing content" scenario is explaining information. This is similar to rewriting but may provide insights beyond the original text.'),(0,a.kt)("p",null,"Some examples of explaining information:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Explaining code: If you see a Python snippet but don't understand it, you can have the AI explain what it does."),(0,a.kt)("li",{parentName:"ol"},"Explaining academic papers: Have the AI clarify sections or concepts you don't follow.")),(0,a.kt)("p",null,"Let's look at explaining code. Here's a prompt to explain a Python function (example from OpenAI's ",(0,a.kt)("a",{parentName:"p",href:"https://platform.openai.com/examples/default-python-to-natural-language"},"documentation"),")\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-other"},'Explanation of what the code does:\n\nPython 3\ndef remove_common_prefix(x, prefix, ws_prefix):\n    x["completion"] = x["completion"].str[len(prefix) :]\n    if ws_prefix:\n        # keep the single whitespace as prefix\n        x["completion"] = " " + x["completion"]\nreturn x\n')),(0,a.kt)("p",null,"ChatGPT's explanation describes what the code does and each parameter:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-other"},'This is a Python function called remove_common_prefix that takes in three parameters: x, prefix, and ws_prefix.\n\nThe x parameter is assumed to be a Pandas DataFrame or Series object with a column named "completion", which contains strings that may or may not start with the prefix string.\n\nThe prefix parameter is a string that represents the common prefix that needs to be removed from the beginning of each string in the "completion" column of the DataFrame.\n\nThe ws_prefix parameter is a Boolean value that indicates whether or not to keep a single whitespace character as a prefix after the common prefix has been removed.\n\nThe function modifies the "completion" column of the DataFrame by removing the prefix string from the beginning of each string in that column using the Pandas str method and string slicing. The len(prefix) : syntax is used to slice the string starting from the character that follows the prefix.\n\nIf ws_prefix is True, then the function adds a single whitespace character as a prefix to each string in the "completion" column after removing the prefix.\n\nFinally, the modified DataFrame is returned by the function.\n')))}f.isMDXComponent=!0}}]);