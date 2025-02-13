"use strict";(self.webpackChunkidempiere_id_github_io=self.webpackChunkidempiere_id_github_io||[]).push([[55725],{30122:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>o,frontMatter:()=>c,metadata:()=>n,toc:()=>a});const n=JSON.parse('{"id":"manual/window/MatchedInvoices_Window_ID-107_v12.0.0","title":"Window: Matched Invoices","description":"[Created 25/11/2005 ]","source":"@site/docs/manual/window/MatchedInvoices_Window_ID-107_v12.0.0.md","sourceDirName":"manual/window","slug":"/manual/window/MatchedInvoices_Window_ID-107_v12.0.0","permalink":"/docs/manual/window/MatchedInvoices_Window_ID-107_v12.0.0","draft":false,"unlisted":false,"editUrl":"https://github.com/muriloht/idempiere.github.io/tree/main/docs/manual/window/MatchedInvoices_Window_ID-107_v12.0.0.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Window: Marketing Channel","permalink":"/docs/manual/window/MarketingChannel_Window_ID-150_v12.0.0"},"next":{"title":"Window: Matched Purchase Orders","permalink":"/docs/manual/window/MatchedPurchaseOrders_Window_ID-228_v12.0.0"}}');var s=i(74848),r=i(28453);const c={},d="Window: Matched Invoices",h={},a=[{value:"Tab: Match Invoice",id:"tab-match-invoice",level:3}];function l(e){const t={a:"a",br:"br",h1:"h1",h3:"h3",header:"header",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"window-matched-invoices",children:"Window: Matched Invoices"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"[Created:"})," 21/05/1999 - ",(0,s.jsx)(t.strong,{children:"Updated:"})," 25/11/2005 ",(0,s.jsx)(t.strong,{children:"]"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.strong,{children:"Description:"})," View Matched Invoices",(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.strong,{children:"Help:"})," View detals of matched invoice lines to material receipt lines",(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.img,{src:i(83468).A+"",width:"1920",height:"994"})]}),"\n",(0,s.jsx)(t.h3,{id:"tab-match-invoice",children:"Tab: Match Invoice"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"[Created:"})," 23/02/2002 - ",(0,s.jsx)(t.strong,{children:"Updated:"})," 25/11/2005 ",(0,s.jsx)(t.strong,{children:"]"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.strong,{children:"Description:"})," View matched Invoices",(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.strong,{children:"Help:"})," View detals of matched invoice lines to material receipt lines",(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.strong,{children:"Tab Level:"})," 0"]}),"\n",(0,s.jsx)(t.p,{children:"Table 10: Match Invoice - Fields"}),"\n",(0,s.jsx)(t.p,{children:"Table: Report Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Name"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Description"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Help"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Technical Info"})})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Tenant"}),(0,s.jsx)(t.td,{children:"Tenant for this installation."}),(0,s.jsx)(t.td,{children:"A Tenant is a company or a legal entity. You cannot share data between Tenants."}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_matchinv.html",children:"m_matchinv"}),".AD_Client_ID",(0,s.jsxs)("small",{children:[" numeric(10) ",(0,s.jsx)("br",{})," Table Direct"]})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Organization"}),(0,s.jsx)(t.td,{children:"Organizational entity within tenant"}),(0,s.jsx)(t.td,{children:"An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations."}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_matchinv.html",children:"m_matchinv"}),".AD_Org_ID",(0,s.jsxs)("small",{children:[" numeric(10) ",(0,s.jsx)("br",{})," Table Direct"]})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Document No"}),(0,s.jsx)(t.td,{children:"Document sequence number of the document"}),(0,s.jsx)(t.td,{children:'The document number is usually automatically generated by the system and determined by the document type of the document. If the document is not saved, the preliminary number is displayed in "".If the document type of your document has no automatic document sequence defined, the field is empty if you create a new document. This is for documents which usually have an external number (like vendor invoice).  If you leave the field empty, the system will generate a document number for you. The document sequence used for this fallback number is defined in the "Maintain Sequence" window with the name "DocumentNo_", where TableName is the actual name of the table (e.g. C_Order).'}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_matchinv.html",children:"m_matchinv"}),".DocumentNo",(0,s.jsxs)("small",{children:[" character varying(30) ",(0,s.jsx)("br",{})," String"]})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Transaction Date"}),(0,s.jsx)(t.td,{children:"Transaction Date"}),(0,s.jsx)(t.td,{children:"The Transaction Date indicates the date of the transaction."}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_matchinv.html",children:"m_matchinv"}),".DateTrx",(0,s.jsxs)("small",{children:[" timestamp without time zone ",(0,s.jsx)("br",{})," Date"]})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Description"}),(0,s.jsx)(t.td,{children:"Optional short description of the record"}),(0,s.jsx)(t.td,{children:"A description is limited to 255 characters."}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_matchinv.html",children:"m_matchinv"}),".Description",(0,s.jsxs)("small",{children:[" character varying(255) ",(0,s.jsx)("br",{})," String"]})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Invoice Line"}),(0,s.jsx)(t.td,{children:"Invoice Detail Line"}),(0,s.jsx)(t.td,{children:"The Invoice Line uniquely identifies a single line of an Invoice."}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_matchinv.html",children:"m_matchinv"}),".C_InvoiceLine_ID",(0,s.jsxs)("small",{children:[" numeric(10) ",(0,s.jsx)("br",{})," Search"]})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Referenced Match Invoice"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_matchinv.html",children:"m_matchinv"}),".Ref_MatchInv_ID",(0,s.jsxs)("small",{children:[" numeric(10) ",(0,s.jsx)("br",{})," Search"]})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Receipt Line"}),(0,s.jsx)(t.td,{children:"Line on Receipt document"}),(0,s.jsx)(t.td,{}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_matchinv.html",children:"m_matchinv"}),".M_InOutLine_ID",(0,s.jsxs)("small",{children:[" numeric(10) ",(0,s.jsx)("br",{})," Search"]})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Product"}),(0,s.jsx)(t.td,{children:"Product, Service, Item"}),(0,s.jsx)(t.td,{children:"Identifies an item which is either purchased or sold in this organization."}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_matchinv.html",children:"m_matchinv"}),".M_Product_ID",(0,s.jsxs)("small",{children:[" numeric(10) ",(0,s.jsx)("br",{})," Search"]})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Attribute Set Instance"}),(0,s.jsx)(t.td,{children:"Product Attribute Set Instance"}),(0,s.jsx)(t.td,{children:"The values of the actual Product Attribute Instances.  The product level attributes are defined on Product level."}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_matchinv.html",children:"m_matchinv"}),".M_AttributeSetInstance_ID",(0,s.jsxs)("small",{children:[" numeric(10) ",(0,s.jsx)("br",{})," Product Attribute"]})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Quantity"}),(0,s.jsx)(t.td,{children:"Quantity"}),(0,s.jsx)(t.td,{children:"The Quantity indicates the number of a specific product or item for this document."}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_matchinv.html",children:"m_matchinv"}),".Qty",(0,s.jsxs)("small",{children:[" numeric ",(0,s.jsx)("br",{})," Quantity"]})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Account Date"}),(0,s.jsx)(t.td,{children:"Accounting Date"}),(0,s.jsx)(t.td,{children:"The Accounting Date indicates the date to be used on the General Ledger account entries generated from this document. It is also used for any currency conversion."}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_matchinv.html",children:"m_matchinv"}),".DateAcct",(0,s.jsxs)("small",{children:[" timestamp without time zone ",(0,s.jsx)("br",{})," Date"]})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Processed"}),(0,s.jsx)(t.td,{children:"The document has been processed"}),(0,s.jsx)(t.td,{children:"The Processed checkbox indicates that a document has been processed."}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_matchinv.html",children:"m_matchinv"}),".Processed",(0,s.jsxs)("small",{children:[" character(1) ",(0,s.jsx)("br",{})," Yes-No"]})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Posted"}),(0,s.jsx)(t.td,{children:"Posting status"}),(0,s.jsx)(t.td,{children:"The Posted field indicates the status of the Generation of General Ledger Accounting Lines"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_matchinv.html",children:"m_matchinv"}),".Posted",(0,s.jsxs)("small",{children:[" character(1) ",(0,s.jsx)("br",{})," Button"]})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Delete"}),(0,s.jsx)(t.td,{children:"Delete Invoice Matching Record"}),(0,s.jsx)(t.td,{}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_matchinv.html",children:"m_matchinv"}),".Processing",(0,s.jsxs)("small",{children:[" character(1) ",(0,s.jsx)("br",{})," Button"]})]})]})]})]})]})}function o(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},83468:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/MatchedInvoices-Window_iDempiere_v12.0.0-1bec9ec878b3112a7c90dff07561431d.png"},28453:(e,t,i)=>{i.d(t,{R:()=>c,x:()=>d});var n=i(96540);const s={},r=n.createContext(s);function c(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);