"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[803],{6845:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>t});var l=i(4848),s=i(8453);const a={sidebar_position:2},o="Installation",r={id:"installation",title:"Installation",description:"MacOS",source:"@site/docs/installation.md",sourceDirName:".",slug:"/installation",permalink:"/gowall-docs/installation",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction (Important)",permalink:"/gowall-docs/"},next:{title:"Themes",permalink:"/gowall-docs/themes"}},c={},t=[{value:"MacOS",id:"macos",level:3},{value:"Arch linux - AUR",id:"arch-linux---aur",level:3},{value:"NixOS - ( Maintainer : Emily Trau )",id:"nixos----maintainer--emily-trau-",level:3},{value:"Fedora - COPR",id:"fedora---copr",level:3},{value:"Void Linux - XBPS-SRC ( Maintainer : elbachir-one  )",id:"void-linux---xbps-src--maintainer--elbachir-one--",level:3},{value:"Build from source",id:"build-from-source",level:3},{value:"Go install",id:"go-install",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"installation",children:"Installation"})}),"\n",(0,l.jsx)(n.h3,{id:"macos",children:"MacOS"}),"\n",(0,l.jsxs)(n.p,{children:["A special thank you to ",(0,l.jsx)(n.code,{children:"chenrui333"})," for making this possible."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"brew install gowall\n"})}),"\n",(0,l.jsx)(n.h3,{id:"arch-linux---aur",children:"Arch linux - AUR"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"yay -S gowall\n"})}),"\n",(0,l.jsxs)(n.h3,{id:"nixos----maintainer--emily-trau-",children:["NixOS - ( Maintainer : ",(0,l.jsx)(n.a,{href:"https://github.com/emilytrau",children:"Emily Trau"})," )"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"  environment.systemPackages = [\n    pkgs.gowall\n  ];\n"})}),"\n",(0,l.jsxs)(n.p,{children:["More installation options : ",(0,l.jsx)(n.a,{href:"https://search.nixos.org/packages?channel=24.05&from=0&size=50&sort=relevance&type=packages&query=gowall",children:"here"})]}),"\n",(0,l.jsx)(n.h3,{id:"fedora---copr",children:"Fedora - COPR"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"sudo dnf copr enable achno/gowall\nsudo dnf install gowall\n"})}),"\n",(0,l.jsxs)(n.h3,{id:"void-linux---xbps-src--maintainer--elbachir-one--",children:["Void Linux - XBPS-SRC ( Maintainer : ",(0,l.jsx)(n.a,{href:"https://github.com/elbachir-one/",children:"elbachir-one"}),"  )"]}),"\n",(0,l.jsxs)(n.p,{children:["Assuming you have ",(0,l.jsx)(n.a,{href:"https://github.com/void-linux/void-packages",children:"void-packages"})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/elbachir-one/void-templates\ncd void-templates/ && cp -r gowall/ void-packages/srcpkgs/\ncd void-packages/\n./xbps-src pkg gowall\nsudo xbps-install -R hostdir/binpkgs gowall\n"})}),"\n",(0,l.jsx)(n.h3,{id:"build-from-source",children:"Build from source"}),"\n",(0,l.jsxs)(n.p,{children:["\ud83d\udd28 Clone the repo, build the project and move it inside your ",(0,l.jsx)(n.code,{children:"$PATH"})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"git clone https://github.com/Achno/gowall\ncd gowall\ngo build\nsudo cp gowall /usr/local/bin/\ngowall\n"})}),"\n",(0,l.jsx)(n.h3,{id:"go-install",children:"Go install"}),"\n",(0,l.jsxs)(n.p,{children:["if you have ",(0,l.jsx)(n.code,{children:"$GOPATH"})," setup correctly Eg. you have the following in your .zshrc / .bashrc"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"export GOPATH=$(go env GOPATH)\nexport GOBIN=$GOPATH/bin\nexport PATH=$PATH:$GOBIN\n"})}),"\n",(0,l.jsxs)(n.p,{children:["And simply use ",(0,l.jsx)(n.code,{children:"go install"})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"go install github.com/Achno/gowall@latest\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>r});var l=i(6540);const s={},a=l.createContext(s);function o(e){const n=l.useContext(a);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);