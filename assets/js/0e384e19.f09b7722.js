"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[976],{619:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var t=l(4848),o=l(8453);const s={slug:"/",sidebar_position:1},a="Introduction (Important)",i={id:"intro",title:"Introduction (Important)",description:"What is gowall?",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/gowall-docs/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Installation",permalink:"/gowall-docs/installation"}},r={},c=[{value:"What is gowall?",id:"what-is-gowall",level:2},{value:"Gowall&#39;s Features explained quickly",id:"gowalls-features-explained-quickly",level:2},{value:"Image preview",id:"image-preview",level:2},{value:"Shell completions",id:"shell-completions",level:2},{value:"What are completions?",id:"what-are-completions",level:3},{value:"How do i add shell completions?",id:"how-do-i-add-shell-completions",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"introduction-important",children:"Introduction (Important)"})}),"\n",(0,t.jsx)(n.h2,{id:"what-is-gowall",children:"What is gowall?"}),"\n",(0,t.jsx)(n.p,{children:"Gowall is a CLI and started as a way to convert images ( specifically wallpapers ) to your favourite color scheme ex. catppuccin,everforest,solarized ..."}),"\n",(0,t.jsx)(n.p,{children:"From then gowall has come a long way and i have transformed it to a tool that has a lot more cool image processing capabilities."}),"\n",(0,t.jsx)(n.h2,{id:"gowalls-features-explained-quickly",children:"Gowall's Features explained quickly"}),"\n",(0,t.jsxs)(n.p,{children:["\u2757 Gowall although a CLI has an ",(0,t.jsx)(n.code,{children:"Image preview"})," feature, you can see the next section for more information."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Feature"}),(0,t.jsx)(n.th,{children:"Explanation"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Convert a Wallpaper's theme"}),(0,t.jsx)(n.td,{children:"Transforms the color scheme of the image to your favorite theme (catppuccin, everforest, tokyo...) to match your system's theme"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Convert an image to pixel art"}),(0,t.jsx)(n.td,{children:"Transforms your image to the typical blocky appearance of pixel art"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Change Image format"}),(0,t.jsxs)(n.td,{children:["Change format from ",(0,t.jsx)(n.code,{children:".webp"})," to ",(0,t.jsx)(n.code,{children:".png"}),", for example"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Invert image colors"}),(0,t.jsx)(n.td,{children:"Flips the colors of an image (a very underrated feature)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Replace a specific color in an image"}),(0,t.jsx)(n.td,{children:"Changes a specific color in the image to another"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Extract the color palette"}),(0,t.jsx)(n.td,{children:"Finds the dominant or all colors in an image (similar to pywal)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Draw on the Image"}),(0,t.jsx)(n.td,{children:"Draw borders, shapes, and effects"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Remove the background of the image"}),(0,t.jsx)(n.td,{children:"Removes the background from an image"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Daily wallpapers"}),(0,t.jsx)(n.td,{children:"Explore community-voted wallpapers that reset daily"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"image-preview",children:"Image preview"}),"\n",(0,t.jsxs)(n.p,{children:["Gowall  supports  ",(0,t.jsx)(n.code,{children:"image preview"}),"  by printing the image on the terminal on ",(0,t.jsx)(n.code,{children:"kitty"}),". If you are running on an terminal emulator other than kitty it will just open your default image viewing application no matter the operating system."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Image preview"})," is ",(0,t.jsx)(n.code,{children:"ON"})," by default. You can disable it by adding the following inside your ",(0,t.jsx)(n.code,{children:"~/.config/gowall/config.yml"})," :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title="~/.config/gowall/config.yml"',children:"EnableImagePreviewing: false\n"})}),"\n",(0,t.jsx)(n.h2,{id:"shell-completions",children:"Shell completions"}),"\n",(0,t.jsx)(n.h3,{id:"what-are-completions",children:"What are completions?"}),"\n",(0,t.jsxs)(n.p,{children:["in cli's completions help you finish typing commands and their options (flags,subcommands) quickly by pressing ",(0,t.jsx)(n.code,{children:"[TAB]"}),",for example"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"gowall [TAB] \n"})}),"\n",(0,t.jsx)(n.p,{children:"would show you the options below"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Available Commands:\n  bg          Removes the background of the image\n  completion  Generate the autocompletion script for the specified shell\n  convert     Convert an img's color scheme\n  draw        draw a border with a color and thickness (currently)\n  extract     Returns the color pallete of the image you specificed (like pywal)\n  help        Help about any command\n  invert      Inverts the color's of an image\n  list        Lists available themes\n  pixelate    Turns an image to pixel art depending on the scale flag\n\nFlags:\n  -h, --help      help for gowall\n  -t, --toggle    Help message for toggle\n  -v, --version   show gowall version\n  -w, --wall      fetches the wallpaper of the day!\n"})}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.h3,{id:"how-do-i-add-shell-completions",children:"How do i add shell completions?"}),"\n",(0,t.jsxs)(n.p,{children:["Shell completions are available for ",(0,t.jsx)(n.code,{children:"zsh"})," ",(0,t.jsx)(n.code,{children:"bash"})," ",(0,t.jsx)(n.code,{children:"fish"})," ",(0,t.jsx)(n.code,{children:"powershell"}),". Lets see how to add ",(0,t.jsx)(n.code,{children:"zsh"})," shell completions, all the other can be added the same way."]}),"\n",(0,t.jsxs)(n.p,{children:["Generate the completion and save it as ",(0,t.jsx)(n.code,{children:"_gowall"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"gowall completion zsh > ~/_gowall\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Add the following  to your ",(0,t.jsx)(n.code,{children:".zshrc"})," to make sure zsh can use shell completions"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:'title=".zshrc"',children:"fpath=(~/ $fpath)\n\nautoload -Uz compinit\ncompinit\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Lastly source your ",(0,t.jsx)(n.code,{children:".zshrc"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"source ~/.zshrc\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,l)=>{l.d(n,{R:()=>a,x:()=>i});var t=l(6540);const o={},s=t.createContext(o);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);