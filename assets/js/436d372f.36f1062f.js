"use strict";(self.webpackChunkidempiere_id_github_io=self.webpackChunkidempiere_id_github_io||[]).push([[32572],{89932:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"manual/report/AccountingFactDetails_Report_ID-252_v12.0.0","title":"Report: Accounting Fact Details","description":"[Created 02/01/2000 ]","source":"@site/docs/manual/report/AccountingFactDetails_Report_ID-252_v12.0.0.md","sourceDirName":"manual/report","slug":"/manual/report/AccountingFactDetails_Report_ID-252_v12.0.0","permalink":"/docs/manual/report/AccountingFactDetails_Report_ID-252_v12.0.0","draft":false,"unlisted":false,"editUrl":"https://github.com/muriloht/idempiere.github.io/tree/main/docs/manual/report/AccountingFactDetails_Report_ID-252_v12.0.0.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Report: Accounting Fact Daily","permalink":"/docs/manual/report/AccountingFactDaily_Report_ID-253_v12.0.0"},"next":{"title":"Report: Accounting Fact Period","permalink":"/docs/manual/report/AccountingFactPeriod_Report_ID-254_v12.0.0"}}');var i=n(74848),s=n(28453);const c={},d="Report: Accounting Fact Details",o={},a=[];function l(e){const t={br:"br",h1:"h1",header:"header",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"report-accounting-fact-details",children:"Report: Accounting Fact Details"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"[Created:"})," 09/01/2004 - ",(0,i.jsx)(t.strong,{children:"Updated:"})," 02/01/2000 ",(0,i.jsx)(t.strong,{children:"]"}),(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.strong,{children:"Description:"})," Accounting Fact Details Report",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.strong,{children:"Help:"})," Report with detail accounting details."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(29233).A+"",width:"1920",height:"994"})}),"\n",(0,i.jsx)(t.p,{children:"Table: Report Parameters"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Name"})}),(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Description"})}),(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Help"})}),(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Technical Info"})})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Accounting Schema"}),(0,i.jsx)(t.td,{children:"Rules for accounting"}),(0,i.jsx)(t.td,{children:"An Accounting Schema defines the rules used in accounting such as costing method, currency and calendar"}),(0,i.jsxs)(t.td,{children:["C_AcctSchema_ID",(0,i.jsx)("br",{}),"Table Direct"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Organization"}),(0,i.jsx)(t.td,{children:"Organizational entity within tenant"}),(0,i.jsx)(t.td,{children:"An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations."}),(0,i.jsxs)(t.td,{children:["AD_Org_ID",(0,i.jsx)("br",{}),"Chosen Multiple Selection Table"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Account Date"}),(0,i.jsx)(t.td,{children:"Accounting Date"}),(0,i.jsx)(t.td,{children:"The Accounting Date indicates the date to be used on the General Ledger account entries generated from this document. It is also used for any currency conversion."}),(0,i.jsxs)(t.td,{children:["DateAcct",(0,i.jsx)("br",{}),"Date"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Period"}),(0,i.jsx)(t.td,{children:"Period of the Calendar"}),(0,i.jsx)(t.td,{children:"The Period indicates an exclusive range of dates for a calendar."}),(0,i.jsxs)(t.td,{children:["C_Period_ID",(0,i.jsx)("br",{}),"Chosen Multiple Selection Table"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Account"}),(0,i.jsx)(t.td,{children:"Account used"}),(0,i.jsx)(t.td,{children:"The (natural) account used"}),(0,i.jsxs)(t.td,{children:["Account_ID",(0,i.jsx)("br",{}),"Chosen Multiple Selection Table"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Account Key"}),(0,i.jsx)(t.td,{children:"Key of Account Element"}),(0,i.jsx)(t.td,{}),(0,i.jsxs)(t.td,{children:["AccountValue",(0,i.jsx)("br",{}),"String"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Business Partner"}),(0,i.jsx)(t.td,{children:"Identifies a Business Partner"}),(0,i.jsx)(t.td,{children:"A Business Partner is anyone with whom you transact.  This can include Vendor, Customer, Employee or Salesperson"}),(0,i.jsxs)(t.td,{children:["C_BPartner_ID",(0,i.jsx)("br",{}),"Chosen Multiple Selection Search"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Product"}),(0,i.jsx)(t.td,{children:"Product, Service, Item"}),(0,i.jsx)(t.td,{children:"Identifies an item which is either purchased or sold in this organization."}),(0,i.jsxs)(t.td,{children:["M_Product_ID",(0,i.jsx)("br",{}),"Chosen Multiple Selection Search"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Tax"}),(0,i.jsx)(t.td,{children:"Tax identifier"}),(0,i.jsx)(t.td,{children:"The Tax indicates the type of tax used in document line."}),(0,i.jsxs)(t.td,{children:["C_Tax_ID",(0,i.jsx)("br",{}),"Chosen Multiple Selection Table"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"GL Category"}),(0,i.jsx)(t.td,{children:"General Ledger Category"}),(0,i.jsx)(t.td,{children:"The General Ledger Category is an optional, user defined method of grouping journal lines."}),(0,i.jsxs)(t.td,{children:["GL_Category_ID",(0,i.jsx)("br",{}),"Chosen Multiple Selection Table"]})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},29233:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/AccountingFactDetails-Report_iDempiere_v12.0.0-992948f0327a5f7ea02f0f52a6ac90c7.png"},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>d});var r=n(96540);const i={},s=r.createContext(i);function c(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);