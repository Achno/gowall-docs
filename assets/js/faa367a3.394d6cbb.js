"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[233],{6933:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>t,metadata:()=>i,toc:()=>l});var r=o(4848),a=o(8453);const t={},s="Remove Background of an Image",i={id:"more_Image_processing/removeBackground",title:"Remove Background of an Image",description:"Remove the background of an image",source:"@site/docs/more_Image_processing/removeBackground.md",sourceDirName:"more_Image_processing",slug:"/more_Image_processing/removeBackground",permalink:"/gowall-docs/more_Image_processing/removeBackground",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create a Gif from Images",permalink:"/gowall-docs/more_Image_processing/gif"},next:{title:"Effects",permalink:"/gowall-docs/category/effects"}},c={},l=[{value:"Examples",id:"examples",level:2},{value:"More control",id:"more-control",level:2}];function d(e){const n={admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"remove-background-of-an-image",children:"Remove Background of an Image"})}),"\n",(0,r.jsx)(n.p,{children:"Remove the background of an image"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"gowall bg ~/Pictures/img.png\n"})}),"\n",(0,r.jsx)(n.p,{children:"You also have a bunch of options to play around with for more control."}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"This algorithm will be refined over time to give better results as i implemented it from scratch."})}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"remove background",src:o(3119).A+"",width:"1751",height:"576"})}),"\n",(0,r.jsx)(n.h2,{id:"more-control",children:"More control"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"-c"})," is the convergance flag (default 0.001).",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.code,{children:"-i"})," is the iterations flag (default 100). Increasing this value will make the removal take longer but might rarely do a better bg removal.",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.code,{children:"-r"})," is the goroutines flag (default 4). Increasing it will increase speed and utilize your CPU more.",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.code,{children:"-s"})," is the sample rate flag (default 0.5). By inc/decr this value you can influence the speed and quality background removal."]}),"\n",(0,r.jsx)(n.p,{children:"You can combine them together to control the parameters of the background removal."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"gowall bg ~/Pictures/img.png -r 10 -s 0.8\n"})})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},3119:(e,n,o)=>{o.d(n,{A:()=>r});const r=o.p+"assets/images/bg-ff9b5261b9f0a29ed41bc2963deda0e0.png"},8453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>i});var r=o(6540);const a={},t=r.createContext(a);function s(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);