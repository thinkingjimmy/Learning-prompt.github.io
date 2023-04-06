"use strict";(self.webpackChunkribir_website=self.webpackChunkribir_website||[]).push([[293],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),c=a,m=d["".concat(i,".").concat(c)]||d[c]||h[c]||o;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:a,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5098:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:3},l=void 0,s={unversionedId:"chatGPT/tutorial-extras/Few-Shot Prompting",id:"chatGPT/tutorial-extras/Few-Shot Prompting",title:"Few-Shot Prompting",description:"\u540c\u6837\u5728\u63a8\u7406\u573a\u666f\uff0c\u6211\u63d0\u5230\u4e86 Few-Shot Prompting \u7684\u6280\u672f\uff0c\u672c\u7ae0\u4ecb\u7ecd\u4e0b\u5b83\u7684\u4f18\u7f3a\u70b9\u548c\u6280\u5de7\u3002",source:"@site/docs/chatGPT/tutorial-extras/Few-Shot Prompting.md",sourceDirName:"chatGPT/tutorial-extras",slug:"/chatGPT/tutorial-extras/Few-Shot Prompting",permalink:"/docs/chatGPT/tutorial-extras/Few-Shot Prompting",draft:!1,tags:[],version:"current",lastUpdatedAt:1680793071,formattedLastUpdatedAt:"2023\u5e744\u67086\u65e5",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"chatGPT",previous:{title:"Zero-Shot Prompts",permalink:"/docs/chatGPT/tutorial-extras/Zero-Shot Prompts"},next:{title:"Self-Consistency",permalink:"/docs/chatGPT/tutorial-extras/Self-Consistency"}},i={},u=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u6280\u5de78\uff1aFew-Shot Chain of Thought",id:"\u6280\u5de78few-shot-chain-of-thought",level:2}],p={toc:u};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("script",{defer:"defer",src:"https://embed.trydyno.com/embedder.js"}),(0,a.kt)("link",{href:"https://embed.trydyno.com/embedder.css",rel:"stylesheet"})),(0,a.kt)("p",null,"\u540c\u6837\u5728\u63a8\u7406\u573a\u666f\uff0c\u6211\u63d0\u5230\u4e86 Few-Shot Prompting \u7684\u6280\u672f\uff0c\u672c\u7ae0\u4ecb\u7ecd\u4e0b\u5b83\u7684\u4f18\u7f3a\u70b9\u548c\u6280\u5de7\u3002"),(0,a.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,a.kt)("p",null,"\u6211\u4eec\u5728\u6280\u5de72 \u4e2d\uff0c\u63d0\u5230\u6211\u4eec\u53ef\u4ee5\u7ed9\u6a21\u578b\u4e00\u4e9b\u793a\u4f8b\uff0c\u4ece\u800c\u8ba9\u6a21\u578b\u8fd4\u56de\u66f4\u7b26\u5408\u6211\u4eec\u9700\u6c42\u7684\u7b54\u6848\u3002\u8fd9\u4e2a\u6280\u5de7\u5176\u5b9e\u4f7f\u7528\u4e86\u4e00\u4e2a\u53eb Few-Shot \u7684\u65b9\u6cd5\u3002"),(0,a.kt)("p",null,"\u8fd9\u4e2a\u65b9\u6cd5\u6700\u65e9\u662f Brown \u7b49\u4eba\u5728 2020 \u5e74",(0,a.kt)("a",{parentName:"p",href:"https://arxiv.org/pdf/2005.14165.pdf"},"\u53d1\u73b0\u7684"),"\uff0c\u8bba\u6587\u91cc\u6709\u4e00\u4e2a\u8fd9\u6837\u7684\u4f8b\u5b50\uff0c\u975e\u5e38\u6709\u610f\u601d\uff0c\u901a\u8fc7\u8fd9\u4e2a\u4f8b\u5b50\u4f60\u5e94\u8be5\u66f4\u80fd\u4f53\u4f1a\uff0c\u50cf ChatGPT \u8fd9\u7c7b\u7edf\u8ba1\u8bed\u8a00\u6a21\u578b\uff0c\u5176\u5b9e\u5e76\u4e0d\u61c2\u610f\u601d\uff0c\u53ea\u662f\u61c2\u6982\u7387 \ud83d\ude01"),(0,a.kt)("p",null,"Brown \u8f93\u5165\u7684\u5185\u5bb9\u662f\u8fd9\u6837\u7684\uff08whatpu \u548c farduddle \u5176\u5b9e\u6839\u672c\u4e0d\u5b58\u5728\uff09\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-other"},'A "whatpu" is a small, furry animal native to Tanzania. An example of a sentence that uses\nthe word whatpu is:\nWe were traveling in Africa and we saw these very cute whatpus.\nTo do a "farduddle" means to jump up and down really fast. An example of a sentence that uses\nthe word farduddle is:\n')),(0,a.kt)("p",null,"Output \u662f\u8fd9\u6837\u7684\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-other"},"When we won the game, we all started to farduddle in celebration.\n")),(0,a.kt)("p",null,"\u4e0d\u8fc7\u8fd9\u5e76\u4e0d\u4ee3\u8868\uff0cFew-Shot \u5c31\u6ca1\u6709\u7f3a\u9677\uff0c\u6211\u4eec\u8bd5\u8bd5\u4e0b\u9762\u8fd9\u4e2a\u4f8b\u5b50\uff1a"),(0,a.kt)("p",null,"Prompt\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-other"},"The odd numbers in this group add up to an even number: 4, 8, 9, 15, 12, 2, 1.\nA: The answer is False.\n\nThe odd numbers in this group add up to an even number: 17,  10, 19, 4, 8, 12, 24.\nA: The answer is True.\n\nThe odd numbers in this group add up to an even number: 16,  11, 14, 4, 8, 13, 24.\nA: The answer is True.\n\nThe odd numbers in this group add up to an even number: 17,  9, 10, 12, 13, 4, 2.\nA: The answer is False.\n\nThe odd numbers in this group add up to an even number: 15, 32, 5, 13, 82, 7, 1. \nA:\n")),(0,a.kt)("p",null,"Output \u662f\u8fd9\u6837\u7684\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-other"},"The answer is True.\n")),(0,a.kt)("p",null,"\u8f93\u51fa\u7684\u7b54\u6848\u5176\u5b9e\u662f\u9519\u8bef\u7684\uff0c\u5b9e\u9645\u4e0a\u7684\u7b54\u6848\u5e94\u8be5\u662f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-other"},"Adding all the odd numbers (15, 5, 13, 7, 1) gives 41. The answer is False.\n")),(0,a.kt)("p",null,"\u90a3\u6211\u4eec\u6709\u6ca1\u6709\u4ec0\u4e48\u65b9\u6cd5\u89e3\u51b3\uff1f"),(0,a.kt)("h2",{id:"\u6280\u5de78few-shot-chain-of-thought"},"\u6280\u5de78\uff1aFew-Shot Chain of Thought"),(0,a.kt)("p",null,"\u8981\u89e3\u51b3\u8fd9\u4e2a\u7f3a\u9677\uff0c\u5c31\u8981\u4f7f\u7528\u5230\u65b0\u7684\u6280\u5de7\uff0cFew-Shot Chain of Thought\u3002"),(0,a.kt)("p",null,"\u6839\u636e Wei \u4ed6\u4eec\u56e2\u961f\u5728 ",(0,a.kt)("a",{parentName:"p",href:"https://arxiv.org/pdf/2201.11903.pdf"},"2022 \u5e74\u7684\u7814\u7a76"),"\u8868\u660e\uff1a"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u901a\u8fc7\u5411\u5927\u8bed\u8a00\u6a21\u578b\u5c55\u793a\u4e00\u4e9b\u5c11\u91cf\u7684\u6837\u4f8b\uff0c\u5e76\u5728\u6837\u4f8b\u4e2d\u89e3\u91ca\u63a8\u7406\u8fc7\u7a0b\uff0c\u5927\u8bed\u8a00\u6a21\u578b\u5728\u56de\u7b54\u63d0\u793a\u65f6\u4e5f\u4f1a\u663e\u793a\u63a8\u7406\u8fc7\u7a0b\u3002\u8fd9\u79cd\u63a8\u7406\u7684\u89e3\u91ca\u5f80\u5f80\u4f1a\u5f15\u5bfc\u51fa\u66f4\u51c6\u786e\u7684\u7ed3\u679c\u3002")),(0,a.kt)("p",null,"\u4e0b\u9762\u662f\u8bba\u6587\u91cc\u7684\u6848\u4f8b\uff0c\u4f7f\u7528\u65b9\u6cd5\u5f88\u7b80\u5355\uff0c\u5728\u6280\u5de72 \u7684\u57fa\u7840\u4e0a\uff0c\u518d\u5c06\u903b\u8f91\u8fc7\u7a0b\u544a\u77e5\u7ed9\u6a21\u578b\u5373\u53ef\u3002\u4ece\u4e0b\u9762\u8fd9\u4e2a\u6848\u4f8b\u91cc\uff0c\u4f60\u53ef\u4ee5\u770b\u5230\u52a0\u5165\u89e3\u91ca\u540e\uff0c\u8f93\u51fa\u7684\u7ed3\u679c\u5c31\u6b63\u786e\u4e86\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"FewShotChainOfThought001.png",src:n(1971).Z,width:"1592",height:"772"})),(0,a.kt)("p",null,"\u90a3\u672c\u7ae0\u5f00\u5934\u63d0\u7684\u4f8b\u5b50\u5c31\u5e94\u8be5\u662f\u8fd9\u6837\u7684\uff08\u6ce8\uff1a\u672c\u4f8b\u5b50\u540c\u6837\u6765\u81ea Wei \u56e2\u961f\u8bba\u6587\uff09\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-other"},"The odd numbers in this group add up to an even number: 4, 8, 9, 15, 12, 2, 1.\nA: Adding all the odd numbers (9, 15, 1) gives 25. The answer is False.\n\nThe odd numbers in this group add up to an even number: 17,  10, 19, 4, 8, 12, 24.\nA: Adding all the odd numbers (17, 19) gives 36. The answer is True.\n\nThe odd numbers in this group add up to an even number: 16,  11, 14, 4, 8, 13, 24.\nA: Adding all the odd numbers (11, 13) gives 24. The answer is True.\n\nThe odd numbers in this group add up to an even number: 17,  9, 10, 12, 13, 4, 2.\nA: Adding all the odd numbers (17, 9, 13) gives 39. The answer is False.\n\nThe odd numbers in this group add up to an even number: 15, 32, 5, 13, 82, 7, 1. \nA:\n")),(0,a.kt)("p",null,"\u804a\u5b8c\u6280\u5de7\uff0c\u6211\u4eec\u518d\u7ed3\u5408\u524d\u9762\u7684 Zero-Shot Chain of Thought\uff0c\u6765\u804a\u804a Chain of Thought \u7684\u5173\u952e\u77e5\u8bc6\u3002\u6839\u636e ",(0,a.kt)("a",{parentName:"p",href:"https://arxiv.org/search/cs?searchtype=author&query=Min%2C+S"},"Sewon Min")," \u7b49\u4eba\u5728 ",(0,a.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2202.12837"},"2022 \u5e74\u7684\u7814\u7a76")," \u8868\u660e\uff0c\u601d\u7ef4\u94fe\u6709\u4ee5\u4e0b\u7279\u70b9\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'"the label space and the distribution of the input text specified by the demonstrations are both key (regardless of whether the labels are correct for individual inputs)" \u6807\u7b7e\u7a7a\u95f4\u548c\u8f93\u5165\u6587\u672c\u7684\u5206\u5e03\u90fd\u662f\u5173\u952e\u56e0\u7d20\uff08\u65e0\u8bba\u8fd9\u4e9b\u6807\u7b7e\u662f\u5426\u6b63\u786e\uff09\u3002'),(0,a.kt)("li",{parentName:"ol"},"the format you use also plays a key role in performance, even if you just use random labels, this is much better than no labels at all. \u5373\u4f7f\u53ea\u662f\u4f7f\u7528\u968f\u673a\u6807\u7b7e\uff0c\u4f7f\u7528\u9002\u5f53\u7684\u683c\u5f0f\u4e5f\u80fd\u63d0\u9ad8\u6027\u80fd\u3002")),(0,a.kt)("p",null,"\u7406\u89e3\u8d77\u6765\u6709\u70b9\u96be\uff0c\u6211\u627e\u4e00\u4e2a prompt \u6848\u4f8b\u7ed9\u5927\u5bb6\u89e3\u91ca\uff08\ud83c\udd98 \u5982\u679c\u4f60\u6709\u66f4\u597d\u7684\u89e3\u91ca\uff0c\u4e0d\u59a8\u53cd\u9988\u7ed9\u6211\uff09\u3002\u6211\u7ed9 ChatGPT \u4e00\u4e9b\u4e0d\u4e00\u5b9a\u51c6\u786e\u7684\u4f8b\u5b50\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-other"},"I loved the new Batman movie!  // Negative\nThis is bad // Positive\nThis is good // Negative\nWhat a good show! //\n")),(0,a.kt)("p",null,"Output \u662f\u8fd9\u6837\u7684\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-other"},"Positive\n")),(0,a.kt)("p",null,"\u5728\u4e0a\u8ff0\u7684\u6848\u4f8b\u91cc\uff0c\u6bcf\u4e00\u884c\uff0c\u6211\u90fd\u5199\u4e86\u4e00\u53e5\u8bdd\u548c\u4e00\u4e2a\u60c5\u611f\u8bcd\uff0c\u5e76\u7528 // \u5206\u5f00\uff0c\u4f46\u6211\u7ed9\u8fd9\u4e9b\u53e5\u5b50\u90fd\u6807\u8bb0\u4e86\u9519\u8bef\u7684\u7b54\u6848\uff0c\u6bd4\u5982\u7b2c\u4e00\u53e5\u5176\u5b9e\u5e94\u8be5\u662f Positive \u624d\u5bf9\u3002\u4f46\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5373\u4f7f\u6211\u7ed9\u5185\u5bb9\u6253\u7684\u6807\u7b7e\u662f\u9519\u8bef\u7684\uff08\u6bd4\u5982\u7b2c\u4e00\u53e5\u8bdd\uff0c\u5176\u5b9e\u5e94\u8be5\u662f Positive\uff09\uff0c\u5bf9\u4e8e\u6a21\u578b\u6765\u8bf4\uff0c\u5b83\u4ecd\u7136\u4f1a\u77e5\u9053\u9700\u8981\u8f93\u51fa\u4ec0\u4e48\u4e1c\u897f\u3002 \u6362\u53e5\u8bdd\u8bf4\uff0c\u6a21\u578b\u77e5\u9053 // \u5212\u7ebf\u540e\u8981\u8f93\u51fa\u4e00\u4e2a\u8861\u91cf\u8be5\u53e5\u5b50\u8868\u8fbe\u4f55\u79cd\u611f\u60c5\u7684\u8bcd\uff08Positive or Negative\uff09\u3002\u8fd9\u5c31\u662f\u524d\u9762\u8bba\u6587\u91cc #1 \u63d0\u5230\u7684\uff0c\u5373\u4f7f\u6211\u7ed9\u7684\u6807\u7b7e\u662f\u9519\u8bef\u7684\uff0c\u6216\u8005\u6362\u53e5\u8bdd\u8bf4\uff0c\u662f\u5426\u57fa\u4e8e\u4e8b\u5b9e\uff0c\u5e76\u4e0d\u91cd\u8981\u3002\u6807\u7b7e\u548c\u8f93\u5165\u7684\u6587\u672c\uff0c\u4ee5\u53ca\u683c\u5f0f\u624d\u662f\u5173\u952e\u56e0\u7d20\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u53ea\u8981\u7ed9\u4e86\u793a\u4f8b\uff0c\u5373\u4f7f\u968f\u673a\u7684\u6807\u7b7e\uff0c\u5bf9\u4e8e\u6a21\u578b\u751f\u6210\u7ed3\u679c\u6765\u8bf4\uff0c\u90fd\u662f\u6709\u5e2e\u52a9\u7684\u3002\u8fd9\u5c31\u662f\u524d\u9762\u8bba\u6587\u91cc #2 \u63d0\u5230\u7684\u5185\u5bb9\u3002")),(0,a.kt)("p",null,"\u6700\u540e\uff0c\u9700\u8981\u8bb0\u4f4f\uff0c\u601d\u7ef4\u94fe\u4ec5\u5728\u4f7f\u7528\u5927\u4e8e\u7b49\u4e8e 100B \u53c2\u6570\u7684\u6a21\u578b\u65f6\uff0c\u624d\u4f1a\u751f\u6548\u3002"),(0,a.kt)("p",null,"BTW\uff0c\u5982\u679c\u4f60\u60f3\u8981\u4e86\u89e3\u66f4\u591a\u76f8\u5173\u4fe1\u606f\uff0c\u53ef\u4ee5\u770b\u770b\u65af\u5766\u798f\u5927\u5b66\u7684\u8bb2\u4e49\uff1a",(0,a.kt)("a",{parentName:"p",href:"http://web.stanford.edu/class/cs224n/slides/cs224n-2023-lecture11-prompting-rlhf.pdf"},"Natural Language Processing with Deep Learning")))}d.isMDXComponent=!0},1971:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/FewShotChainOfThought001-cb0c8729dadd349fa916ca44c1c18404.png"}}]);