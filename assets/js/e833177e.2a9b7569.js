"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[734],{2365:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=t(4848),i=t(8453);const o={},l="Use gowall in Scripts",a={id:"scripts",title:"Use gowall in Scripts",description:"Preview all of the 25 built in Themes",source:"@site/docs/scripts.md",sourceDirName:".",slug:"/scripts",permalink:"/gowall-docs/scripts",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Daily Wallpapers",permalink:"/gowall-docs/dailyWallpaper"}},r={},c=[{value:"Preview all of the 25 built in Themes",id:"preview-all-of-the-25-built-in-themes",level:3},{value:"Load a Theme dynamically in the runtime via .json file",id:"load-a-theme-dynamically-in-the-runtime-via-json-file",level:3}];function h(e){const n={code:"code",h1:"h1",h3:"h3",header:"header",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"use-gowall-in-scripts",children:"Use gowall in Scripts"})}),"\n",(0,s.jsx)(n.h3,{id:"preview-all-of-the-25-built-in-themes",children:"Preview all of the 25 built in Themes"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.p,{children:"Lets say you want to see how the all of the colorschemes of the 25 built in themes look like on an image.\nWe can easily do that with a small bash script."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'\n#!/bin/bash\n\nthemes=$(gowall list)\n\ninput_path="/home/<name>/Pictures/NOBORDER.png"\n\nwhile IFS= read -r theme; do\n  gowall convert "$input_path" -t "$theme" --output "/home/<name>/Pictures/gowall/Themetest/$theme"\ndone <<< "$themes"\n'})}),"\n",(0,s.jsx)(n.p,{children:"The output of the above script will be the following, with the names of the images being the themes that your image got recolored to:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"1. catppuccin.png\n2. nord.png\n3. rose-pine.png \n4. everforest.png\n....\n\n"})}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.h3,{id:"load-a-theme-dynamically-in-the-runtime-via-json-file",children:"Load a Theme dynamically in the runtime via .json file"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.p,{children:["Lets say you have a way to generate a ",(0,s.jsx)(n.code,{children:".json"})," with hex colors (probably via another script) and dont want to define them in ",(0,s.jsx)(n.code,{children:"~/.config/gowall/config.yml"}),". Now you can pass ",(0,s.jsx)(n.code,{children:".json"})," with a certain interface into gowall."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"gowall convert ~/Pictures/img.png -t test.json\n\ngowall convert ~/Pictures/img.png -t ~/clr/test.json # relative path\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The test.json ",(0,s.jsx)(n.strong,{children:"must"})," have the following interface :"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "name": "MyTheme",\n    "colors": [\n        "#F5E0DC",\n        "#F2CDCD",\n        "#F5C2E7",\n        "#11111B"\n    ]\n}\n'})})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>a});var s=t(6540);const i={},o=s.createContext(i);function l(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);