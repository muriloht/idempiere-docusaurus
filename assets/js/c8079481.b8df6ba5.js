"use strict";(self.webpackChunkidempiere_id_github_io=self.webpackChunkidempiere_id_github_io||[]).push([[9231],{52903:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>l,frontMatter:()=>c,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"manual/window/PaymentsintoBatch_Window_ID-200031_v12.0.0","title":"Window: Payments into Batch","description":"[Created 11/04/2013 ]","source":"@site/docs/manual/window/PaymentsintoBatch_Window_ID-200031_v12.0.0.md","sourceDirName":"manual/window","slug":"/manual/window/PaymentsintoBatch_Window_ID-200031_v12.0.0","permalink":"/docs/manual/window/PaymentsintoBatch_Window_ID-200031_v12.0.0","draft":false,"unlisted":false,"editUrl":"https://github.com/muriloht/idempiere.github.io/tree/main/docs/manual/window/PaymentsintoBatch_Window_ID-200031_v12.0.0.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Window: Payment and Receipt","permalink":"/docs/manual/window/PaymentandReceipt_Window_ID-195_v12.0.0"},"next":{"title":"Window: Performance Benchmark","permalink":"/docs/manual/window/PerformanceBenchmark_Window_ID-365_v12.0.0"}}');var r=s(74848),n=s(28453);const c={},d="Window: Payments into Batch",a={},h=[{value:"Tab: Batch",id:"tab-batch",level:3},{value:"Tab: Lines",id:"tab-lines",level:3}];function o(e){const t={a:"a",br:"br",h1:"h1",h3:"h3",header:"header",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"window-payments-into-batch",children:"Window: Payments into Batch"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"[Created:"})," 23/01/2013 - ",(0,r.jsx)(t.strong,{children:"Updated:"})," 11/04/2013 ",(0,r.jsx)(t.strong,{children:"]"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.strong,{children:"Description:"})," Process Payments",(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.strong,{children:"Help:"})," The Process Payments Window allows you to enter payments for invoices.  If the payment is for a single invoice then it can be processed here.",(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.img,{src:s(81979).A+"",width:"1920",height:"994"})]}),"\n",(0,r.jsx)(t.h3,{id:"tab-batch",children:"Tab: Batch"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"[Created:"})," 23/01/2013 - ",(0,r.jsx)(t.strong,{children:"Updated:"})," 23/01/2013 ",(0,r.jsx)(t.strong,{children:"]"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.strong,{children:"Description:"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.strong,{children:"Help:"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.strong,{children:"Tab Level:"})," 0"]}),"\n",(0,r.jsx)(t.p,{children:"Table 10: Batch - Fields"}),"\n",(0,r.jsx)(t.p,{children:"Table: Report Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"Name"})}),(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"Description"})}),(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"Help"})}),(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"Technical Info"})})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Tenant"}),(0,r.jsx)(t.td,{children:"Tenant for this installation."}),(0,r.jsx)(t.td,{children:"A Tenant is a company or a legal entity. You cannot share data between Tenants."}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_depositbatch.html",children:"c_depositbatch"}),".AD_Client_ID",(0,r.jsxs)("small",{children:[" numeric(10) ",(0,r.jsx)("br",{})," Table Direct"]})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Organization"}),(0,r.jsx)(t.td,{children:"Organizational entity within tenant"}),(0,r.jsx)(t.td,{children:"An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations."}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_depositbatch.html",children:"c_depositbatch"}),".AD_Org_ID",(0,r.jsxs)("small",{children:[" numeric(10) ",(0,r.jsx)("br",{})," Table Direct"]})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Bank Account"}),(0,r.jsx)(t.td,{children:"Account at the Bank"}),(0,r.jsx)(t.td,{children:"The Bank Account identifies an account at this Bank."}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_depositbatch.html",children:"c_depositbatch"}),".C_BankAccount_ID",(0,r.jsxs)("small",{children:[" numeric(10) ",(0,r.jsx)("br",{})," Table Direct"]})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Deposit Date"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_depositbatch.html",children:"c_depositbatch"}),".DateDeposit",(0,r.jsxs)("small",{children:[" timestamp without time zone ",(0,r.jsx)("br",{})," Date"]})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Document Type"}),(0,r.jsx)(t.td,{children:"Document type or rules"}),(0,r.jsx)(t.td,{children:"The Document Type determines document sequence and processing rules"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_depositbatch.html",children:"c_depositbatch"}),".C_DocType_ID",(0,r.jsxs)("small",{children:[" numeric(10) ",(0,r.jsx)("br",{})," Table Direct"]})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Document No"}),(0,r.jsx)(t.td,{children:"Document sequence number of the document"}),(0,r.jsx)(t.td,{children:'The document number is usually automatically generated by the system and determined by the document type of the document. If the document is not saved, the preliminary number is displayed in "".If the document type of your document has no automatic document sequence defined, the field is empty if you create a new document. This is for documents which usually have an external number (like vendor invoice).  If you leave the field empty, the system will generate a document number for you. The document sequence used for this fallback number is defined in the "Maintain Sequence" window with the name "DocumentNo_", where TableName is the actual name of the table (e.g. C_Order).'}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_depositbatch.html",children:"c_depositbatch"}),".DocumentNo",(0,r.jsxs)("small",{children:[" character varying(30) ",(0,r.jsx)("br",{})," String"]})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Document Date"}),(0,r.jsx)(t.td,{children:"Date of the Document"}),(0,r.jsx)(t.td,{children:"The Document Date indicates the date the document was generated.  It may or may not be the same as the accounting date."}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_depositbatch.html",children:"c_depositbatch"}),".DateDoc",(0,r.jsxs)("small",{children:[" timestamp without time zone ",(0,r.jsx)("br",{})," Date"]})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Currency"}),(0,r.jsx)(t.td,{children:"The Currency for this record"}),(0,r.jsx)(t.td,{children:"Indicates the Currency to be used when processing or reporting on this record"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_depositbatch.html",children:"c_depositbatch"}),".C_Currency_ID",(0,r.jsxs)("small",{children:[" numeric(10) ",(0,r.jsx)("br",{})," Table Direct"]})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Description"}),(0,r.jsx)(t.td,{children:"Optional short description of the record"}),(0,r.jsx)(t.td,{children:"A description is limited to 255 characters."}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_depositbatch.html",children:"c_depositbatch"}),".Description",(0,r.jsxs)("small",{children:[" character varying(255) ",(0,r.jsx)("br",{})," String"]})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Deposit Amount"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_depositbatch.html",children:"c_depositbatch"}),".DepositAmt",(0,r.jsxs)("small",{children:[" numeric ",(0,r.jsx)("br",{})," Amount"]})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Create lines from"}),(0,r.jsx)(t.td,{children:"Process which will generate a new document lines based on an existing document"}),(0,r.jsx)(t.td,{children:"The Create From process will create a new document based on information in an existing document selected by the user."}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_depositbatch.html",children:"c_depositbatch"}),".CreateFrom",(0,r.jsxs)("small",{children:[" character(1) ",(0,r.jsx)("br",{})," Button"]})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Document Status"}),(0,r.jsx)(t.td,{children:"The current status of the document"}),(0,r.jsx)(t.td,{children:"The Document Status indicates the status of a document at this time.  If you want to change the document status, use the Document Action field"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_depositbatch.html",children:"c_depositbatch"}),".DocStatus",(0,r.jsxs)("small",{children:[" character varying(2) ",(0,r.jsx)("br",{})," List"]})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Active"}),(0,r.jsx)(t.td,{children:"The record is active in the system"}),(0,r.jsx)(t.td,{children:"There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries."}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_depositbatch.html",children:"c_depositbatch"}),".IsActive",(0,r.jsxs)("small",{children:[" character(1) ",(0,r.jsx)("br",{})," Yes-No"]})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Process Deposit Batch"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_depositbatch.html",children:"c_depositbatch"}),".DocAction",(0,r.jsxs)("small",{children:[" character(2) ",(0,r.jsx)("br",{})," Button"]})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Processed"}),(0,r.jsx)(t.td,{children:"The document has been processed"}),(0,r.jsx)(t.td,{children:"The Processed checkbox indicates that a document has been processed."}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_depositbatch.html",children:"c_depositbatch"}),".Processed",(0,r.jsxs)("small",{children:[" character(1) ",(0,r.jsx)("br",{})," Yes-No"]})]})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"tab-lines",children:"Tab: Lines"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"[Created:"})," 23/01/2013 - ",(0,r.jsx)(t.strong,{children:"Updated:"})," 16/03/2021 ",(0,r.jsx)(t.strong,{children:"]"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.strong,{children:"Description:"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.strong,{children:"Help:"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.strong,{children:"Tab Level:"})," 1"]}),"\n",(0,r.jsx)(t.p,{children:"Table 20: Lines - Fields"}),"\n",(0,r.jsx)(t.p,{children:"Table: Report Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"Name"})}),(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"Description"})}),(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"Help"})}),(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"Technical Info"})})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Tenant"}),(0,r.jsx)(t.td,{children:"Tenant for this installation."}),(0,r.jsx)(t.td,{children:"A Tenant is a company or a legal entity. You cannot share data between Tenants."}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_depositbatchline.html",children:"c_depositbatchline"}),".AD_Client_ID",(0,r.jsxs)("small",{children:[" numeric(10) ",(0,r.jsx)("br",{})," Table Direct"]})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Organization"}),(0,r.jsx)(t.td,{children:"Organizational entity within tenant"}),(0,r.jsx)(t.td,{children:"An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations."}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_depositbatchline.html",children:"c_depositbatchline"}),".AD_Org_ID",(0,r.jsxs)("small",{children:[" numeric(10) ",(0,r.jsx)("br",{})," Table Direct"]})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Deposit Batch"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_depositbatchline.html",children:"c_depositbatchline"}),".C_DepositBatch_ID",(0,r.jsxs)("small",{children:[" numeric(10) ",(0,r.jsx)("br",{})," Search"]})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Line No"}),(0,r.jsx)(t.td,{children:"Unique line for this document"}),(0,r.jsx)(t.td,{children:"Indicates the unique line for a document.  It will also control the display order of the lines within a document."}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_depositbatchline.html",children:"c_depositbatchline"}),".Line",(0,r.jsxs)("small",{children:[" numeric(10) ",(0,r.jsx)("br",{})," Integer"]})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Payment"}),(0,r.jsx)(t.td,{children:"Payment identifier"}),(0,r.jsx)(t.td,{children:"The Payment is a unique identifier of this payment."}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_depositbatchline.html",children:"c_depositbatchline"}),".C_Payment_ID",(0,r.jsxs)("small",{children:[" numeric(10) ",(0,r.jsx)("br",{})," Search"]})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Payment amount"}),(0,r.jsx)(t.td,{children:"Amount being paid"}),(0,r.jsx)(t.td,{children:"Indicates the amount this payment is for.  The payment amount can be for single or multiple invoices or a partial payment for an invoice."}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_depositbatchline.html",children:"c_depositbatchline"}),".PayAmt",(0,r.jsxs)("small",{children:[" numeric ",(0,r.jsx)("br",{})," Amount"]})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Active"}),(0,r.jsx)(t.td,{children:"The record is active in the system"}),(0,r.jsx)(t.td,{children:"There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries."}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_depositbatchline.html",children:"c_depositbatchline"}),".IsActive",(0,r.jsxs)("small",{children:[" character(1) ",(0,r.jsx)("br",{})," Yes-No"]})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Processed"}),(0,r.jsx)(t.td,{children:"The document has been processed"}),(0,r.jsx)(t.td,{children:"The Processed checkbox indicates that a document has been processed."}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_depositbatchline.html",children:"c_depositbatchline"}),".Processed",(0,r.jsxs)("small",{children:[" character(1) ",(0,r.jsx)("br",{})," Yes-No"]})]})]})]})]})]})}function l(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},81979:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/PaymentsintoBatch-Window_iDempiere_v12.0.0-95a33ee02f95ba1c4e0aa8da7065052e.png"},28453:(e,t,s)=>{s.d(t,{R:()=>c,x:()=>d});var i=s(96540);const r={},n=i.createContext(r);function c(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);