"use strict";(self.webpackChunkidempiere_id_github_io=self.webpackChunkidempiere_id_github_io||[]).push([[17648],{25384:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"manual/process/DeliverAssets_Process_ID-201_v12.0.0","title":"Process: Deliver Assets","description":"[Created 17/02/2022 ]","source":"@site/docs/manual/process/DeliverAssets_Process_ID-201_v12.0.0.md","sourceDirName":"manual/process","slug":"/manual/process/DeliverAssets_Process_ID-201_v12.0.0","permalink":"/docs/manual/process/DeliverAssets_Process_ID-201_v12.0.0","draft":false,"unlisted":false,"editUrl":"https://github.com/muriloht/idempiere.github.io/tree/main/docs/manual/process/DeliverAssets_Process_ID-201_v12.0.0.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Process: Delete Trace Logs","permalink":"/docs/manual/process/DeleteTraceLogs_Process_ID-200156_v12.0.0"},"next":{"title":"Process: Enable Native Sequence","permalink":"/docs/manual/process/EnableNativeSequence_Process_ID-53156_v12.0.0"}}');var n=r(74848),i=r(28453);const c={},d="Process: Deliver Assets",a={},o=[];function l(e){const s={a:"a",br:"br",h1:"h1",header:"header",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"process-deliver-assets",children:"Process: Deliver Assets"})}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"[Created:"})," 29/01/2003 - ",(0,n.jsx)(s.strong,{children:"Updated:"})," 17/02/2022 ",(0,n.jsx)(s.strong,{children:"]"}),(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.strong,{children:"Description:"})," Deliver Customer Assets electronically",(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.strong,{children:"Help:"})," Send Mail to customers and attach new delivery (optional).",(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.strong,{children:"Class:"})," ",(0,n.jsx)(s.a,{href:"https://jenkins.idempiere.org/job/iDempiere12Daily/ws/org.idempiere.javadoc/API/org/compiere/process/AssetDelivery.html",children:"org.compiere.process.AssetDelivery"})]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:r(43891).A+"",width:"1920",height:"994"})}),"\n",(0,n.jsx)(s.p,{children:"Table: Process Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Name"})}),(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Description"})}),(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Help"})}),(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Technical Info"})})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Asset Group"}),(0,n.jsx)(s.td,{children:"Group of Assets"}),(0,n.jsx)(s.td,{children:"The group of assets determines default accounts.  If an asset group is selected in the product category, assets are created when delivering the asset."}),(0,n.jsxs)(s.td,{children:["A_Asset_Group_ID",(0,n.jsx)("br",{}),"Table Direct"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Product"}),(0,n.jsx)(s.td,{children:"Product, Service, Item"}),(0,n.jsx)(s.td,{children:"Identifies an item which is either purchased or sold in this organization."}),(0,n.jsxs)(s.td,{children:["M_Product_ID",(0,n.jsx)("br",{}),"Search"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Business Partner"}),(0,n.jsx)(s.td,{children:"Identifies a Business Partner"}),(0,n.jsx)(s.td,{children:"A Business Partner is anyone with whom you transact.  This can include Vendor, Customer, Employee or Salesperson"}),(0,n.jsxs)(s.td,{children:["C_BPartner_ID",(0,n.jsx)("br",{}),"Search"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Asset"}),(0,n.jsx)(s.td,{children:"Asset used internally or by customers"}),(0,n.jsx)(s.td,{children:"An asset is either created by purchasing or by delivering a product.  An asset can be used internally or be a customer asset."}),(0,n.jsxs)(s.td,{children:["A_Asset_ID",(0,n.jsx)("br",{}),"Search"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Guarantee Date"}),(0,n.jsx)(s.td,{children:"Date when guarantee expires"}),(0,n.jsx)(s.td,{children:"Date when the normal guarantee or availability expires"}),(0,n.jsxs)(s.td,{children:["GuaranteeDate",(0,n.jsx)("br",{}),"Date"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Expired Guarantee Mail"}),(0,n.jsx)(s.td,{children:"Send email to partners with expired guarantee"}),(0,n.jsx)(s.td,{}),(0,n.jsxs)(s.td,{children:["NoGuarantee_MailText_ID",(0,n.jsx)("br",{}),"Table"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Attach Asset"}),(0,n.jsx)(s.td,{children:"Attach Asset to be delivered per email"}),(0,n.jsx)(s.td,{}),(0,n.jsxs)(s.td,{children:["AttachAsset",(0,n.jsx)("br",{}),"Yes-No"]})]})]})]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},43891:(e,s,r)=>{r.d(s,{A:()=>t});const t=r.p+"assets/images/DeliverAssets-Process_iDempiere_v12.0.0-672cf7281a20d7c94fc8e74a3d685d4b.png"},28453:(e,s,r)=>{r.d(s,{R:()=>c,x:()=>d});var t=r(96540);const n={},i=t.createContext(n);function c(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);