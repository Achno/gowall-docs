"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[989],{7005:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var o=i(4848),t=i(8453);const s={sidebar_position:2},r="Convert Image to Pixel art",c={id:"conversions/imgToPixel",title:"Convert Image to Pixel art",description:"\u27a4  Singe conversion",source:"@site/docs/conversions/imgToPixel.md",sourceDirName:"conversions",slug:"/conversions/imgToPixel",permalink:"/gowall-docs/conversions/imgToPixel",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Convert Wallpaper's Theme",permalink:"/gowall-docs/conversions/convertToTheme"},next:{title:"Convert an Icons's Theme",permalink:"/gowall-docs/conversions/convertIconTheme"}},l={},a=[{value:"\u27a4  <code>Singe conversion</code>",id:"--singe-conversion",level:3},{value:"\u27a4  <code>Batch conversion</code>",id:"--batch-conversion",level:3},{value:"\u27a4  <code>Directory conversion</code>",id:"--directory-conversion",level:3}];function d(e){const n={admonition:"admonition",br:"br",code:"code",h1:"h1",h3:"h3",header:"header",img:"img",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"convert-image-to-pixel-art",children:"Convert Image to Pixel art"})}),"\n",(0,o.jsxs)(n.h3,{id:"--singe-conversion",children:["\u27a4  ",(0,o.jsx)(n.code,{children:"Singe conversion"})]}),"\n",(0,o.jsx)(n.p,{children:"Convert an image to pixel art by applying a pixelation effect."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"gowall pixelate ~/Pictures/img.png -s 15\ngowall pixelate ~/Pictures/img.png -s 15 --output ~/NewFolder/newName.jpg\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"-s"})," is the ",(0,o.jsx)(n.code,{children:"scale"})," flag, an integer from [1-25]. The higher the number the less pixelated (blocky) the image is.\nThe lower you set it the more the pixel effect will become apparent. Start from 25 and decrement it slowly till you get to the desired number."]}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["The higher resolution image you have, the lower the ",(0,o.jsx)(n.code,{children:"scale"})," flag must be set."]})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.img,{alt:"First img to pixel example",src:i(3478).A+"",width:"2761",height:"590"}),"\n",(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.img,{alt:"Second img to pixel example",src:i(4685).A+"",width:"2583",height:"1170"})]}),"\n",(0,o.jsxs)(n.h3,{id:"--batch-conversion",children:["\u27a4  ",(0,o.jsx)(n.code,{children:"Batch conversion"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"gowall pixelate --batch img1.png,img2.png -s 15\ngowall pixelate --batch img1.png,img2.png -s 15 --output ~/NewFolder\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"--directory-conversion",children:["\u27a4  ",(0,o.jsx)(n.code,{children:"Directory conversion"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"gowall pixelate --dir ~/Pictures/Dir1 -s 15\ngowall pixelate --dir ~/Pictures/Dir1 -s 15 --output ~/NewFolder\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},4685:(e,n,i)=>{i.d(n,{A:()=>o});const o=i.p+"assets/images/pixel1-0ec514b15b5e617d015a0894cf4905d4.png"},3478:(e,n,i)=>{i.d(n,{A:()=>o});const o=i.p+"assets/images/pixel2-fbfcdc74ce90f261812b9f99fdb02dac.png"},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>c});var o=i(6540);const t={},s=o.createContext(t);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);