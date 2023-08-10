"use strict";(self.webpackChunkribir_website=self.webpackChunkribir_website||[]).push([[7169],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||n;return r?a.createElement(h,i(i({ref:t},u),{},{components:r})):a.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<n;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9296:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var a=r(7462),o=(r(7294),r(3905));r.p;const n={sidebar_position:0},i="Use AI to Track Daily Calorie Intake",l={unversionedId:"ai-101/best-practice/well-being/record-calories",id:"ai-101/best-practice/well-being/record-calories",title:"Use AI to Track Daily Calorie Intake",description:"Author\uff1aJimmyWong",source:"@site/docs/ai-101/best-practice/well-being/record-calories.mdx",sourceDirName:"ai-101/best-practice/well-being",slug:"/ai-101/best-practice/well-being/record-calories",permalink:"/docs/ai-101/best-practice/well-being/record-calories",draft:!1,tags:[],version:"current",lastUpdatedAt:1691677943,formattedLastUpdatedAt:"Aug 10, 2023",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"ai101",previous:{title:"\ud83d\udc8a Health",permalink:"/docs/category/-health"},next:{title:"\ud83d\udcd6 Learning",permalink:"/docs/category/-learning"}},s={},c=[{value:"The Problem",id:"the-problem",level:2},{value:"Basic Solution",id:"basic-solution",level:2},{value:"Advanced Solution",id:"advanced-solution",level:2},{value:"Prompt",id:"prompt",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"use-ai-to-track-daily-calorie-intake"},"Use AI to Track Daily Calorie Intake"),(0,o.kt)("p",null,"Author\uff1aJimmyWong"),(0,o.kt)("p",null,"If you have any great ideas, feel free to join our ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/B7Z7wjuUPg"},"Discord channel")," for sharing purposes \ud83d\ude01"),(0,o.kt)("h2",{id:"the-problem"},"The Problem"),(0,o.kt)("p",null,"Over the past six months, I have been on a weight loss journey, and creating a calorie deficit is a critical aspect of it. Besides the commonly known method of exercising more, controlling one's diet is also essential. However, I have tried numerous calorie tracking apps, but none of them were able to meet my needs."),(0,o.kt)("p",null,"The main reasons for this are:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Most apps have a cumbersome process for recording calorie intake. For example, to record the calorie content of rice, you need to search for rice first and then input the portion you ate. If you had a meal with several different items, it would take at least 3 to 4 minutes to complete the entire process."),(0,o.kt)("li",{parentName:"ol"},"Some of dishes are complex to track. How do you log hotpot for example? Weighing each ingredient isn't practical.")),(0,o.kt)("p",null,"The tedious process and tracking difficulties caused me to eventually abandon them."),(0,o.kt)("h2",{id:"basic-solution"},"Basic Solution"),(0,o.kt)("p",null,"Recently I saw people using AI for calorie tracking with great convenience - it solved my problems above."),(0,o.kt)("p",null,"You simply describe what you ate in text, and the AI tallies it up. For example, here's what I had for lunch today. Traditional apps would take 3-4 minutes just to log this. Don't worry about inaccurate data - I checked against other apps and the AI is pretty close, especially if you use precise quantities which I'll show later:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"record calories 01",src:r(8244).Z,width:"2048",height:"1440"})),(0,o.kt)("p",null,"It also handles tricky cases like hotpot. Just add more or be more specific if you ate a lot:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"record calories 02",src:r(4192).Z,width:"2048",height:"1440"})),(0,o.kt)("p",null,"You can log the data wherever you track things, like Notion for me."),(0,o.kt)("p",null,"Here's how I calculate my deficit: Deficit = Total intake - Total burn = Meals - (RMR + Exercise). I use the ",(0,o.kt)("a",{parentName:"p",href:"https://purecalculators.com/zh-CN/rmr-resting-metabolic-rate-calculator"},"RMR methord"),", but ",(0,o.kt)("a",{parentName:"p",href:"https://purecalculators.com/zh-CN/bmr-calculator"},"BMR")," works too. And don't forget to reward yourself after logging:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"record calories 03",src:r(8191).Z,width:"2048",height:"1440"})),(0,o.kt)("h2",{id:"advanced-solution"},"Advanced Solution"),(0,o.kt)("p",null,"If you find the tracking process intimidating, you can try using AI to generate a Markdown format list of various nutritional components that you need to record. Then, you can manually copy and paste them into your document tool. At the same time, AI can provide suggestions after each meal:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"record calories 04",src:r(1342).Z,width:"2048",height:"1440"})),(0,o.kt)("p",null,"After recording your lunch, you can continue inputting your dinner, and AI will keep track in a table format:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"record calories 05",src:r(2698).Z,width:"2048",height:"1440"})),(0,o.kt)("p",null,"Moreover, if you closely analyze the calorie data, you will notice that there is always a slight discrepancy in the calorie calculations provided by AI."),(0,o.kt)("p",null,'After multiple tests, I found that it was mainly due to the issue of measurements. If you input vague quantities like "half" or "a bowl," the results from AI may vary slightly each time. However, I don\'t think it\'s a major problem as the differences between multiple results are minimal. Unless you\'re preparing for a competition, everyday use should suffice.'),(0,o.kt)("p",null,"If you're still not satisfied with the results, you can try GPT-4. Based on my testing, GPT-4 is the most accurate model currently available."),(0,o.kt)("h2",{id:"prompt"},"Prompt"),(0,o.kt)("p",null,"Here's an example of my prompt:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"As a professional nutritionist, please help me calculate and track my nutritional intake in kcal using Markdown tables based on my meal entries. I will provide each meal separately. Requirements:\n1. Log everything in one table with meal as the first column.\n2. If unsure of exact calories, provide a range.\n3. Only include what I tell you I ate.\nLastly, provide reasonable diet suggestions.\n")),(0,o.kt)("p",null,"Additionally, you can include personal data such as weight and height for more accurate recommendations from AI. If you encounter unsatisfactory results, don't panic. Make gradual adjustments, and eventually, you will achieve the desired outcome."),(0,o.kt)("p",null,"Lastly, feel free to join our ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/B7Z7wjuUPg"},"Discord "),"to share the prompts you create."))}d.isMDXComponent=!0},8244:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/record-calories-01-60b892ecb37ba17e6272e3395c22e6bc.png"},4192:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/record-calories-02-600e56ae37c196bbc745013bf28aaf7c.png"},8191:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/record-calories-03-a8f291949b3e9f4bb75e3a2ed0a80fdd.png"},1342:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/record-calories-04-e34f04a59d3cc35e455a9ace6cbb5398.png"},2698:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/record-calories-05-3acb1da4d89d813c6f7f60e62648682e.png"}}]);