"use strict";(self.webpackChunkidempiere_id_github_io=self.webpackChunkidempiere_id_github_io||[]).push([[87318],{96282:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>n,toc:()=>u});const n=JSON.parse('{"id":"basic-installation/manual-install/installing-from-installers","title":"Installing from Installers","description":"Create user","source":"@site/docs/basic-installation/manual-install/installing-from-installers.md","sourceDirName":"basic-installation/manual-install","slug":"/basic-installation/manual-install/installing-from-installers","permalink":"/docs/basic-installation/manual-install/installing-from-installers","draft":false,"unlisted":false,"editUrl":"https://github.com/muriloht/idempiere.github.io/tree/main/docs/basic-installation/manual-install/installing-from-installers.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Downloading Installer","permalink":"/docs/basic-installation/manual-install/downloading-installer"},"next":{"title":"Running iDempiere from Installers","permalink":"/docs/basic-installation/manual-install/running-idempiere-from-installers"}}');var a=s(74848),t=s(28453),l=s(65537),i=s(79329);const o={sidebar_position:3},d="Installing from Installers",c={},u=[{value:"Create user",id:"create-user",level:2},{value:"Install Server",id:"install-server",level:2},{value:"Differences for Oracle",id:"differences-for-oracle",level:3},{value:"Import the Database",id:"import-the-database",level:2},{value:"Update the Database",id:"update-the-database",level:2},{value:"Register version code in database",id:"register-version-code-in-database",level:2}];function h(e){const r={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.header,{children:(0,a.jsx)(r.h1,{id:"installing-from-installers",children:"Installing from Installers"})}),"\n",(0,a.jsx)(r.h2,{id:"create-user",children:"Create user"}),"\n",(0,a.jsx)(r.p,{children:"It is recommended to run the iDempiere server as a user created for such purpose, usually idempiere, instead of running as root."}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-shell",children:"adduser idempiere\n"})}),"\n",(0,a.jsx)(r.admonition,{type:"caution",children:(0,a.jsx)(r.p,{children:"DO NOT install idempiere as root."})}),"\n",(0,a.jsx)(r.h2,{id:"install-server",children:"Install Server"}),"\n",(0,a.jsx)(r.p,{children:"Unzip the server installer you downloaded or created"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-shell",children:"jar xvf idempiereServer10Daily.gtk.linux.x86_64.zip\n"})}),"\n",(0,a.jsx)(r.p,{children:"Move the folder to /opt"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-shell",children:"mv idempiere.gtk.linux.x86_64/idempiere-server /opt\n"})}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-shell",children:"rmdir idempiere.gtk.linux.x86_64\n"})}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-shell",children:"chown -R idempiere:idempiere /opt/idempiere-server\n"})}),"\n",(0,a.jsx)(r.p,{children:"From now on is preferable that you run everything as idempiere user:"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-shell",children:"su - idempiere  # not necessary if you're already as user idempiere\n"})}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-shell",children:"cd /opt/idempiere-server\n"})}),"\n",(0,a.jsxs)(l.A,{children:[(0,a.jsxs)(i.A,{value:"graphical",label:"Graphical",children:[(0,a.jsx)(r.p,{children:"You can run:"}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-shell",children:"sh setup.sh\n"})}),(0,a.jsx)(r.p,{children:"or"}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-shell",children:"sh setup-alt.sh\n"})}),(0,a.jsx)(r.admonition,{type:"note",children:(0,a.jsxs)(r.p,{children:["Optionally you can add a LOG LEVEL parameter (accepted values are: OFF, SEVERE, WARNING, INFO, CONFIG, FINE, FINER, FINEST, ALL). For example ",(0,a.jsx)(r.code,{children:"sh setup-alt.sh FINE"})]})}),(0,a.jsx)(r.p,{children:"You can fill the parameters as shown in the screenshot, or with your own preferred values, specially you must take care of the following:"}),(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{children:[(0,a.jsx)("strong",{children:"iDempiere Home:"})," This is the repository folder"]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("strong",{children:"Web Port / SSL:"})," be careful to not use a port that is already used by another application, in linux ports below 1000 cannot be used by non-root users. For example port 8080 is used by Oracle-XE"]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("strong",{children:"DB Already Exists:"})," in common installation you must leave this flag unchecked as the database will be created later"]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("strong",{children:"Database Name:"})," here we fill with the name of the database you want to create"]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("strong",{children:"DB Admin Password:"})," must be filled with the postgres password you set up in the ",(0,a.jsx)("a",{href:"./install-prerequisites.md#assign-a-password-to-user-postgres",children:"prerequisites"})]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("strong",{children:"Database User:"})," this is a user to be created, it is recommended you keep it as the default adempiere"]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("strong",{children:"Database Password:"})," fill here with the password you want to assign to the database"]})]}),(0,a.jsx)(r.p,{children:(0,a.jsx)(r.img,{alt:"iDempiere Server Setup",src:s(52813).A+"",width:"1004",height:"571"})}),(0,a.jsx)(r.p,{children:"And finally push the Save button, if something fails the Save button will be disabled and the failing option is marked in red, in order to re-enable the Save button you must push the Test button until all errors are gone."}),(0,a.jsxs)(r.p,{children:["The only ",(0,a.jsx)(r.em,{children:"valid error"})," in red is in front of Database Password field when the database is still not created."]}),(0,a.jsx)(r.h3,{id:"differences-for-oracle",children:"Differences for Oracle"}),(0,a.jsx)(r.p,{children:"On oracle some fields must be filled slightly different:"}),(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{children:[(0,a.jsx)("strong",{children:"Database Name:"})," here you must fill the name of the oracle instance (usually xe or orcl)"]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("strong",{children:"DB Admin Password:"})," must be filled with the SYSTEM password you set when installing oracle"]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("strong",{children:"Database User:"})," in oracle you can define your preferred user here"]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("strong",{children:"Database Password:"})," fill here with the password you want to assign to the database"]})]})]}),(0,a.jsxs)(i.A,{value:"console",label:"Console",children:[(0,a.jsx)(r.p,{children:"Run"}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-shell",children:"sh console-setup-alt.sh\n"})}),(0,a.jsx)(r.p,{children:"or"}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-shell",children:"sh console-setup.sh\n"})}),(0,a.jsx)(r.admonition,{type:"note",children:(0,a.jsxs)(r.p,{children:["Optionally you can add a LOG LEVEL parameter (accepted values are: OFF, SEVERE, WARNING, INFO, CONFIG, FINE, FINER, FINEST, ALL). For example ",(0,a.jsx)(r.code,{children:"sh console-setup-alt.sh FINE"})]})}),(0,a.jsx)(r.p,{children:"This is to be used when you don't have a graphical environment, in this case the parameters are shown in screen and you must fill them directly with the keyboard."})]}),(0,a.jsxs)(i.A,{value:"console-silent",label:"Console Silent",children:[(0,a.jsx)(r.p,{children:"There is another non-graphical non-interactive way to run the setup."}),(0,a.jsxs)(r.p,{children:["You need to have a previous ",(0,a.jsx)(r.code,{children:"idempiereEnv.properties"})," file that you copied from another server, or you filled manually copying and replacing from the ",(0,a.jsx)(r.code,{children:"idempiereEnvTemplate.properties"})]}),(0,a.jsx)(r.p,{children:"After you have a valid idempiereEnv.properties you can execute:"}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-shell",children:"sh silentsetup-alt.sh\n"})}),(0,a.jsx)(r.p,{children:"or"}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-shell",children:"sh silent-setup.sh\n"})}),(0,a.jsx)(r.admonition,{type:"note",children:(0,a.jsxs)(r.p,{children:["Optionally you can add a LOG LEVEL parameter (accepted values are: OFF, SEVERE, WARNING, INFO, CONFIG, FINE, FINER, FINEST, ALL). For example ",(0,a.jsx)(r.code,{children:"sh silent-setup-alt.sh FINE"})]})}),(0,a.jsx)(r.p,{children:"This is to be used when you don't have a graphical environment, and is non-interactive, the program read all the values from the file idempiereEnv.properties and configure the system with that."})]})]}),"\n",(0,a.jsx)(r.h2,{id:"import-the-database",children:"Import the Database"}),"\n",(0,a.jsx)(r.p,{children:"This is the default way to import the database for oracle (>=12c) and postgresql (>=10):"}),"\n",(0,a.jsx)(r.p,{children:"After setting up the server (is a prerequisite) you can run:"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-shell",children:"su - idempiere  # not necessary if you're already as user idempiere\n"})}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-shell",children:"cd /opt/idempiere-server/utils\n"})}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-shell",children:"sh RUN_ImportIdempiere.sh\n"})}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.strong,{children:"Note: In order for the above import script to work, you need to make sure that you have the jar and psql or Oracle executables on your path."})}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsxs)(r.strong,{children:["Important Note for Oracle: In order to import the seed database it is required to create a directory object pointing to ",(0,a.jsx)(r.code,{children:"data/seed"}),", for this to work properly the dba group needs access to this folder. The script ",(0,a.jsx)(r.code,{children:"utisl/oracle/ImportIdempiere.sh"})," gives this access using ",(0,a.jsx)(r.code,{children:"chgrp dba"}),", this doesn't work unless the idempiere user is member of the dba group, so this instruction is required as a prerequisite for oracle:\n",(0,a.jsx)(r.code,{children:"usermod -G dba idempiere"}),"\nand the ",(0,a.jsx)(r.code,{children:"IDEMPIERE_HOME"})," folder must be accessible by this group otherwise you'll find errors trying to import"]})}),"\n",(0,a.jsx)(r.h2,{id:"update-the-database",children:"Update the Database"}),"\n",(0,a.jsx)(r.p,{children:"In order to keep the database synchronized with the code it is required to run the following script:"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-shell",children:"su - idempiere  # not necessary if you're already as user idempiere\n"})}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-shell",children:"cd /opt/idempiere-server/utils\n"})}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-shell",children:"sh RUN_SyncDB.sh\n"})}),"\n",(0,a.jsx)(r.h2,{id:"register-version-code-in-database",children:"Register version code in database"}),"\n",(0,a.jsx)(r.p,{children:"In order to sign the database with the version code running on the server it is advised (or required depending on configuration) to run the following script:"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-shell",children:"su - idempiere  # not necessary if you're already as user idempiere\n"})}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-shell",children:"cd /opt/idempiere-server\n"})}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-shell",children:"sh sign-database-build-alt.sh\n"})})]})}function p(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},79329:(e,r,s)=>{s.d(r,{A:()=>l});s(96540);var n=s(18215);const a={tabItem:"tabItem_Ymn6"};var t=s(74848);function l(e){let{children:r,hidden:s,className:l}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,l),hidden:s,children:r})}},65537:(e,r,s)=>{s.d(r,{A:()=>w});var n=s(96540),a=s(18215),t=s(65627),l=s(56347),i=s(50372),o=s(30604),d=s(11861),c=s(78749);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:s}=e;return(0,n.useMemo)((()=>{const e=r??function(e){return u(e).map((e=>{let{props:{value:r,label:s,attributes:n,default:a}}=e;return{value:r,label:s,attributes:n,default:a}}))}(s);return function(e){const r=(0,d.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,s])}function p(e){let{value:r,tabValues:s}=e;return s.some((e=>e.value===r))}function m(e){let{queryString:r=!1,groupId:s}=e;const a=(0,l.W6)(),t=function(e){let{queryString:r=!1,groupId:s}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:r,groupId:s});return[(0,o.aZ)(t),(0,n.useCallback)((e=>{if(!t)return;const r=new URLSearchParams(a.location.search);r.set(t,e),a.replace({...a.location,search:r.toString()})}),[t,a])]}function x(e){const{defaultValue:r,queryString:s=!1,groupId:a}=e,t=h(e),[l,o]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=s.find((e=>e.default))??s[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:t}))),[d,u]=m({queryString:s,groupId:a}),[x,f]=function(e){let{groupId:r}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,t]=(0,c.Dv)(s);return[a,(0,n.useCallback)((e=>{s&&t.set(e)}),[s,t])]}({groupId:a}),g=(()=>{const e=d??x;return p({value:e,tabValues:t})?e:null})();(0,i.A)((()=>{g&&o(g)}),[g]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),f(e)}),[u,f,t]),tabValues:t}}var f=s(9136);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=s(74848);function j(e){let{className:r,block:s,selectedValue:n,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,t.a_)(),c=e=>{const r=e.currentTarget,s=o.indexOf(r),a=i[s].value;a!==n&&(d(r),l(a))},u=e=>{let r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const s=o.indexOf(e.currentTarget)+1;r=o[s]??o[0];break}case"ArrowLeft":{const s=o.indexOf(e.currentTarget)-1;r=o[s]??o[o.length-1];break}}r?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":s},r),children:i.map((e=>{let{value:r,label:s,attributes:t}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>{o.push(e)},onKeyDown:u,onClick:c,...t,className:(0,a.A)("tabs__item",g.tabItem,t?.className,{"tabs__item--active":n===r}),children:s??r},r)}))})}function v(e){let{lazy:r,children:s,selectedValue:t}=e;const l=(Array.isArray(s)?s:[s]).filter(Boolean);if(r){const e=l.find((e=>e.props.value===t));return e?(0,n.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:l.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==t})))})}function y(e){const r=x(e);return(0,b.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,b.jsx)(j,{...r,...e}),(0,b.jsx)(v,{...r,...e})]})}function w(e){const r=(0,f.A)();return(0,b.jsx)(y,{...e,children:u(e.children)},String(r))}},52813:(e,r,s)=>{s.d(r,{A:()=>n});const n=s.p+"assets/images/Screenshot-iDempiere_Server_Setup-7e4d16872c81a1663445d388fa5de2f0.png"},28453:(e,r,s)=>{s.d(r,{R:()=>l,x:()=>i});var n=s(96540);const a={},t=n.createContext(a);function l(e){const r=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);