"use strict";(self.webpackChunkribir_website=self.webpackChunkribir_website||[]).push([[5727],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=m(n),d=i,p=h["".concat(l,".").concat(d)]||h[d]||c[d]||o;return n?a.createElement(p,r(r({ref:t},u),{},{components:n})):a.createElement(p,r({ref:t},u))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:i,r[1]=s;for(var m=2;m<o;m++)r[m]=n[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6729:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var a=n(7462),i=(n(7294),n(3905));const o={sidebar_position:1,title:"AI Summary VS Manual Summary"},r="Will AI Summary replace Manual Summary?",s={unversionedId:"insight/my-insight/will-AI-summary-replace-manual-summary",id:"insight/my-insight/will-AI-summary-replace-manual-summary",title:"AI Summary VS Manual Summary",description:"Recently, AI-related topics have been very hot, and some friends have also commented that with the emergence of AI, our kind of manual summarization will eventually be eliminated. Some have also said that with AI, won't summarizing be faster?",source:"@site/docs/insight/my-insight/will-AI-summary-replace-manual-summary.md",sourceDirName:"insight/my-insight",slug:"/insight/my-insight/will-AI-summary-replace-manual-summary",permalink:"/docs/insight/my-insight/will-AI-summary-replace-manual-summary",draft:!1,tags:[],version:"current",lastUpdatedAt:1691677943,formattedLastUpdatedAt:"Aug 10, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"AI Summary VS Manual Summary"},sidebar:"welcome",previous:{title:"My Insight",permalink:"/docs/category/my-insight"},next:{title:"\ud83d\udcda Recommendations",permalink:"/docs/category/-recommendations"}},l={},m=[{value:"Popularization of Science",id:"popularization-of-science",level:2},{value:"Current disadvantages of AI summarization",id:"current-disadvantages-of-ai-summarization",level:2},{value:"Will AI summarization replace manual summarization?",id:"will-ai-summarization-replace-manual-summarization",level:2},{value:"One More Thing",id:"one-more-thing",level:2}],u={toc:m},h="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(h,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"will-ai-summary-replace-manual-summary"},"Will AI Summary replace Manual Summary?"),(0,i.kt)("p",null,"Recently, AI-related topics have been very hot, and some friends have also commented that with the emergence of AI, our kind of manual summarization will eventually be eliminated. Some have also said that with AI, won't summarizing be faster?"),(0,i.kt)("p",null,"So I wanted to write a bonus article to share my thoughts on the following questions:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"How do current AI summarization tools work? What are their limitations?"),(0,i.kt)("li",{parentName:"ol"},"What are the disadvantages of AI summarization?"),(0,i.kt)("li",{parentName:"ol"},"Will AI summarization replace manual summarization?")),(0,i.kt)("h2",{id:"popularization-of-science"},"Popularization of Science"),(0,i.kt)("p",null,"Before comparing, I want to popularize some knowledge about ChatGPT first. With an understanding of this knowledge, you can better compare AI summarization and manual summarization."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'Token: This refers to the basic unit that OpenAI uses to process text, which can be word fragments or characters. For example, "hamburger" is divided into three tokens "ham", "bur" and "ger", while "pear" is one token. 1 token is approximately equal to 4 characters or 0.75 English words.')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Some limitations:"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"OpenAI models have a fixed token limit, for example, GPT-3's Davinci model can handle up to 2049 tokens, about 1500 English words. The latest Turbo model is about 4096 tokens, about 3000 English words."),(0,i.kt)("li",{parentName:"ol"},"In addition, this limit has one more detail. The token limit count includes both input and output text. In other words, it's not that I can input 3000 English words and OpenAI can return 3000 English words, but rather the total of input + output cannot exceed 3000 English words."),(0,i.kt)("li",{parentName:"ol"},"Text limit. GPT-3 models currently only handle text.")))),(0,i.kt)("p",null,"After understanding these limitations, I will explain how video/podcast summarization on the market works. In fact, you can directly simulate these plugins with ChatGPT."),(0,i.kt)("p",null,"First, because of limitation #3, the audio of the video/podcast needs to be converted to text. For YouTube, many products will directly use the transcript."),(0,i.kt)("p",null,'The second step is to pass the transcript and prompt (usually "please summarize the following content") to OpenAI together. What is passed to OpenAI looks something like this, you can also try it in ChatGPT by replacing the transcript below with a real YouTube transcript:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Please summarize the following sentences.\nText: """\nTranscript\n"""\n')),(0,i.kt)("p",null,"Finally, OpenAI will return the summary result."),(0,i.kt)("p",null,'However, some videos and podcasts can be very long, with tens of thousands of words per episode. Because of limitation #2, it is impossible to pass the full transcript of an episode to OpenAI, so different products will have different handling methods. The most common handling method currently is "split summarization", dividing the transcript into multiple 5-minute transcripts, then passing them to OpenAI to summarize first, then passing these paragraph summaries back to OpenAI to summarize again and generate the final summary content.'),(0,i.kt)("h2",{id:"current-disadvantages-of-ai-summarization"},"Current disadvantages of AI summarization"),(0,i.kt)("p",null,"After understanding the principles of these summary applications, the disadvantages of such products are also relatively easy to understand:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Disadvantage 1: Content relies on transcripts."))),(0,i.kt)("p",null,"Some content without transcripts basically cannot be summarized, such as short videos or vlogs, many of which are just visuals without speech. These cannot be summarized."),(0,i.kt)("p",null,"Of course, no one probably needs short video summaries \ud83d\ude02"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Disadvantage 2: Content quality relies on transcript quality."))),(0,i.kt)("p",null,"If the transcript quality is not good, the summarized content generated by the AI \u200b\u200bwill be very strange. For example, if the transcript contains lyrics from background music, the AI \u200b\u200bwill summarize those lyrics. When people see it, they will find it very strange."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Disadvantage 3: Token limitations lead to missing content."))),(0,i.kt)("p",null,"People can speak about 125-150 English words or 180-200 Chinese characters per minute. Given people's video watching habits, video content is usually not longer than 15 minutes - which works out to around 2200 English words, or 3000 Chinese characters. However, most videos don't have continuous speech, so the word count is lower than this."),(0,i.kt)("p",null,"So a common way many video AI summary tools handle the token limit is to just pass in say 2500 English words, and ask the AI to return a 500 word summary. This is a crude approach (but still workable!), for long videos, it would miss summarizing the later sections. And if there's a twist or reversal in the second half, the summary could be completely wrong."),(0,i.kt)("p",null,"For example, the ",(0,i.kt)("a",{parentName:"p",href:"https://glarity.app/"},"Glarity")," generates for Knowledge Project #141 is:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"In this video, Kunal Shah discusses some of the elements of business success he learned from his family's business. Many of them came from a merchant community, which was more willing to take risks, had lower shame, better understood value, spotted new trends, and helped others in their community succeed. These traits made them more likely to succeed in business.")),(0,i.kt)("p",null,"Compare this to my summary - it seems like only the first 15 minutes of the video was input into the prompt here. (BTW, I'm not saying this design can't work - Glarity is one of my most used AI plugins currently, and it supports custom prompts. Just thought it could be even better! \ud83d\ude01)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Disadvantage 4: Layered summarization leads to missing content."))),(0,i.kt)("p",null,"Of course not everyone does it this way. Splitting the summarization can partially resolve the missing content issue, but the split duration is very important. If it's too long, such as 15 minutes, 3000 English words, the AI \u200b\u200bcan't return a summary."),(0,i.kt)("p",null,"In addition, this layered summarization can also lead to missing information. The first summary is like cutting a photo into blocks, masking each block, and then combining these masked blocks into one photo again and masking it once more - you lose content and it becomes less clear."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Disadvantage 5: AI does not know what is important."))),(0,i.kt)("p",null,"If the first 4 disadvantages can be technically resolved in the future (for example, OpenAI relaxing the limit to 8K tokens), the last disadvantage is relatively speaking, I have not yet thought of a way to resolve it. Let me give a real example."),(0,i.kt)("p",null,"Still using Knowledge Project 141 as an example, the summarization method of Summarize.tech's summary is to divide the video into 5 minute segments, and then summarize the generated content a second time. Let's compare this result:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"00:15:00 The author discusses how he has learned that many concepts in western society are not applicable to Asian societies, such as the value of time. He also discusses how Hinduism is not as scalable as other religions because it is not standardized.")),(0,i.kt)("p",null,'It mentions "such as the value of time", when I was listening to this part, I felt this segment was very insightful. Because in this part Kunal talks about "why many tool products can\'t make money in Asia", and he explains that for many Asian countries, the concept of time as a value has never been taught.'),(0,i.kt)("p",null,"But if you look at the above AI summary, it actually omits a lot of content, and the appeal is not strong enough that I could easily miss it if reading quickly. Let's look at another example:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},'00:35:00 In India, less than six percent of urbanIndian women have financial income of their own, and 94 of them are currently taking care of kids or taking care of the family and not contributing to the labor force. Another interesting thing is 95 of all financial products in India are bought by men. Credit cards, car loans, and home loans are all by men, while investments are only by men. India has now nearly two thousand dollars per capita income yearly, but if you remove the top 30 million families or 30 million individuals, the per capita income would drop to maybe 600. This is why many western markets love to come to India, because its per capita income is never going to beat and grow like China\'s because before China started becoming affluent, 96 of Chinese urban women were working because of the one child policy which forced it to become a general neutral society. However, in India, female participation of labor is going down. The per capita income is not going to grow and therefore a lot of foreign companies love to come to India because India is the "dau farm of the world." All the big internet giants, like Facebook, Twitter, and YouTube, will say "I have 500 million billion users in India, but look at the arpu and peel the ar')),(0,i.kt)("p",null,"First, this summary probably hit the token limit and did not fully output at the end. Comparing this summary with the previous one, you should have the same question as me - why is this summary longer and more detailed?"),(0,i.kt)("p",null,"I also tried writing some prompts myself, and even ChatGPT is not very consistent in this area (in other words, if you ask the same question repeatedly, it will give you different answers), so I don't know what criteria it uses for summarization right now."),(0,i.kt)("p",null,"But I have also tested out some interesting things that I will share with everyone later."),(0,i.kt)("h2",{id:"will-ai-summarization-replace-manual-summarization"},"Will AI summarization replace manual summarization?"),(0,i.kt)("p",null,"My thinking is:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"What is worth summarizing, it still can't do well for now."),(0,i.kt)("li",{parentName:"ol"},"What it can do well, the meaning of the summary also does not seem very big.")),(0,i.kt)("p",null,"From my testing so far, AI is best at summarizing tech product reviews, especially unboxing reviews like those done by Zhongwenze. The summaries are accurate and very complete. But would I only read the text version of these reviews?"),(0,i.kt)("p",null,"I wouldn't."),(0,i.kt)("p",null,"So I'm also very curious what the retention is like for these AI summarization tools."),(0,i.kt)("p",null,"On the contrary, I feel that maybe recombining these results into a new product could be more interesting."),(0,i.kt)("p",null,"For example, summarize all the videos reviewing the iPhone 14 across the web, and then do some statistics on those summary results - I could know how various influencers reviewed the iPhone 14, who gave it praise and for what aspects, who criticized it and what they criticized."),(0,i.kt)("p",null,"Current AI product gameplay still can't break away from text-based interaction and direct interaction with AI. Why not try using AI results to make products? In the past it would have been difficult to create something like What to Buy, requiring lots of manpower, but now wouldn't it be simpler?"),(0,i.kt)("p",null,"Speaking of content it currently can't do well, I may use it as an aid, but using it as an aid also has two concerns:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"I don't know if its summarization is comprehensive."),(0,i.kt)("li",{parentName:"ol"},"Passive learning becomes active learning: this is a bit related to the first one, purely listening, or reading the transcript, I mostly learn passively, I can quickly judge whether this is worth recording, but now it summarizes it for me, I have to actively think about what it summarizes, and whether it's worth listening to in detail.")),(0,i.kt)("p",null,"So far in my testing, written transcripts have provided the most assistance to me. AI summaries come second - they help me more with identifying key points rather than comprehending the full content."),(0,i.kt)("p",null,"However, I believe better solutions will emerge in the future. For example, support for more media types, and less restrictive token limits."),(0,i.kt)("h2",{id:"one-more-thing"},"One More Thing"),(0,i.kt)("p",null,"Earlier I mentioned that during my prompt testing, I discovered some interesting things."),(0,i.kt)("p",null,"Here's what happened:"),(0,i.kt)("p",null,"I said earlier that AI Summary doesn't know what the key points are. But if your prompt contains some examples, it can optimize based on the examples you provide - essentially showing it what the highlights should be."),(0,i.kt)("p",null,"To put it simply, you can do something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"In India, less than six percent of urbanIndian women have financial income of their own, and 94 of them are currently taking care of kids or taking care of the family and not contributing to the labor force. Another interesting thing is 95 of all financial products in India are bought by men. Credit cards, car loans, and home loans are all by men, while investments are only by men. India has now nearly two thousand dollars per capita income yearly, but if you remove the top 30 million families or 30 million individuals, the per capita income would drop to maybe 600.\n\nHighlight: less than six percent of urbanIndian women have financial income of their own.\n")),(0,i.kt)("p",null,"Then in your next section, you can ask like this, and ChatGPT will return the highlights it understood:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'This is why many western markets love to come to India, because its per capita income is never going to beat and grow like China\'s because before China started becoming affluent, 96 of Chinese urban women were working because of the one child policy which forced it to become a general neutral society. However, in India, female participation of labor is going down. The per capita income is not going to grow and therefore a lot of foreign companies love to come to India because India is the "dau farm of the world."\n\nHighlight:\n')),(0,i.kt)("p",null,"It is possible to build a personalized AI recommendation or summary system tuned to an individual in the future. But you would need to provide a significant amount of initial training data to the model."),(0,i.kt)("p",null,"For example, if a person highlights the introductory paragraphs of an article, the AI can learn to automatically highlight similar content that might be highlighted in the rest of the article. Once enough training data has been collected, the AI can automatically highlight new articles."))}c.isMDXComponent=!0}}]);