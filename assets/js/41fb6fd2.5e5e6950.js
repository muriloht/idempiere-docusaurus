"use strict";(self.webpackChunkidempiere_id_github_io=self.webpackChunkidempiere_id_github_io||[]).push([[73824],{30176:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>l,contentTitle:()=>h,default:()=>o,frontMatter:()=>n,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"manual/window/ImportOrder_Window_ID-281_v12.0.0","title":"Window: Import Order","description":"[Created 30/06/2021 ]","source":"@site/docs/manual/window/ImportOrder_Window_ID-281_v12.0.0.md","sourceDirName":"manual/window","slug":"/manual/window/ImportOrder_Window_ID-281_v12.0.0","permalink":"/docs/manual/window/ImportOrder_Window_ID-281_v12.0.0","draft":false,"unlisted":false,"editUrl":"https://github.com/muriloht/idempiere.github.io/tree/main/docs/manual/window/ImportOrder_Window_ID-281_v12.0.0.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Window: Import Loader Format","permalink":"/docs/manual/window/ImportLoaderFormat_Window_ID-189_v12.0.0"},"next":{"title":"Window: Import Payment","permalink":"/docs/manual/window/ImportPayment_Window_ID-280_v12.0.0"}}');var t=i(74848),d=i(28453);const n={},h="Window: Import Order",l={},a=[{value:"Tab: Order",id:"tab-order",level:3}];function c(e){const r={a:"a",br:"br",h1:"h1",h3:"h3",header:"header",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"window-import-order",children:"Window: Import Order"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"[Created:"})," 07/06/2003 - ",(0,t.jsx)(r.strong,{children:"Updated:"})," 30/06/2021 ",(0,t.jsx)(r.strong,{children:"]"}),(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.strong,{children:"Description:"})," Import Orders",(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.strong,{children:"Help:"}),' Please set Y/N selections in the import loader format explicitly (e.g. as constants) and no not leave them NULL. A NULL value stands for "don\'t know".In general, selection boxes are not selected if the value is not "Y" (i.e. could be null or any other value). All tests are made on "Y" or "not Y" - i.e. NULL values are not "not Y", but NULL (don\'t know) - see SQL Language introductions.',(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.img,{src:i(58863).A+"",width:"1920",height:"994"})]}),"\n",(0,t.jsx)(r.h3,{id:"tab-order",children:"Tab: Order"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"[Created:"})," 07/06/2003 - ",(0,t.jsx)(r.strong,{children:"Updated:"})," 02/01/2000 ",(0,t.jsx)(r.strong,{children:"]"}),(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.strong,{children:"Description:"})," Import Orders",(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.strong,{children:"Help:"})," You should supply the Document Type Name (or ID). The Document Type is on purpose not fully derived as it has too many consequences if it's wrong.  The best way is to set the Document Type Name as a Constant in your Import File Format or as an imported field in the file.",(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.strong,{children:"Tab Level:"})," 0"]}),"\n",(0,t.jsx)(r.p,{children:"Table 10: Order - Fields"}),"\n",(0,t.jsx)(r.p,{children:"Table: Report Parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:(0,t.jsx)(r.strong,{children:"Name"})}),(0,t.jsx)(r.th,{children:(0,t.jsx)(r.strong,{children:"Description"})}),(0,t.jsx)(r.th,{children:(0,t.jsx)(r.strong,{children:"Help"})}),(0,t.jsx)(r.th,{children:(0,t.jsx)(r.strong,{children:"Technical Info"})})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Import Order"}),(0,t.jsx)(r.td,{children:"Import Orders"}),(0,t.jsx)(r.td,{}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_order.html",children:"i_order"}),".I_Order_ID",(0,t.jsxs)("small",{children:[" numeric(10) ",(0,t.jsx)("br",{})," ID"]})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Imported"}),(0,t.jsx)(r.td,{children:"Has this import been processed"}),(0,t.jsx)(r.td,{children:"The Imported check box indicates if this import has been processed."}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_order.html",children:"i_order"}),".I_IsImported",(0,t.jsxs)("small",{children:[" character(1) ",(0,t.jsx)("br",{})," Yes-No"]})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Order"}),(0,t.jsx)(r.td,{children:"Order"}),(0,t.jsx)(r.td,{children:"The Order is a control document.  The  Order is complete when the quantity ordered is the same as the quantity shipped and invoiced.  When you close an order, unshipped (backordered) quantities are cancelled."}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_order.html",children:"i_order"}),".C_Order_ID",(0,t.jsxs)("small",{children:[" numeric(10) ",(0,t.jsx)("br",{})," Search"]})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Sales Order Line"}),(0,t.jsx)(r.td,{children:"Sales Order Line"}),(0,t.jsx)(r.td,{children:"The Sales Order Line is a unique identifier for a line in an order."}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_order.html",children:"i_order"}),".C_OrderLine_ID",(0,t.jsxs)("small",{children:[" numeric(10) ",(0,t.jsx)("br",{})," Search"]})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Import Error Message"}),(0,t.jsx)(r.td,{children:"Messages generated from import process"}),(0,t.jsx)(r.td,{children:"The Import Error Message displays any error messages generated during the import process."}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_order.html",children:"i_order"}),".I_ErrorMsg",(0,t.jsxs)("small",{children:[" character varying(2000) ",(0,t.jsx)("br",{})," String"]})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Tenant"}),(0,t.jsx)(r.td,{children:"Tenant for this installation."}),(0,t.jsx)(r.td,{children:"A Tenant is a company or a legal entity. You cannot share data between Tenants."}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_order.html",children:"i_order"}),".AD_Client_ID",(0,t.jsxs)("small",{children:[" numeric(10) ",(0,t.jsx)("br",{})," Table Direct"]})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Organization"}),(0,t.jsx)(r.td,{children:"Organizational entity within tenant"}),(0,t.jsx)(r.td,{children:"An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations."}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_order.html",children:"i_order"}),".AD_Org_ID",(0,t.jsxs)("small",{children:[" numeric(10) ",(0,t.jsx)("br",{})," Table Direct"]})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Document Type Name"}),(0,t.jsx)(r.td,{children:"Name of the Document Type"}),(0,t.jsx)(r.td,{}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_order.html",children:"i_order"}),".DocTypeName",(0,t.jsxs)("small",{children:[" character varying(60) ",(0,t.jsx)("br",{})," String"]})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Document Type"}),(0,t.jsx)(r.td,{children:"Document type or rules"}),(0,t.jsx)(r.td,{children:"The Document Type determines document sequence and processing rules"}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_order.html",children:"i_order"}),".C_DocType_ID",(0,t.jsxs)("small",{children:[" numeric(10) ",(0,t.jsx)("br",{})," Table Direct"]})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Document No"}),(0,t.jsx)(r.td,{children:"Document sequence number of the document"}),(0,t.jsx)(r.td,{children:'The document number is usually automatically generated by the system and determined by the document type of the document. If the document is not saved, the preliminary number is displayed in "".If the document type of your document has no automatic document sequence defined, the field is empty if you create a new document. This is for documents which usually have an external number (like vendor invoice).  If you leave the field empty, the system will generate a document number for you. The document sequence used for this fallback number is defined in the "Maintain Sequence" window with the name "DocumentNo_", where TableName is the actual name of the table (e.g. C_Order).'}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_order.html",children:"i_order"}),".DocumentNo",(0,t.jsxs)("small",{children:[" character varying(30) ",(0,t.jsx)("br",{})," String"]})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Sales Transaction"}),(0,t.jsx)(r.td,{children:"This is a Sales Transaction"}),(0,t.jsx)(r.td,{children:"The Sales Transaction checkbox indicates if this item is a Sales Transaction."}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_order.html",children:"i_order"}),".IsSOTrx",(0,t.jsxs)("small",{children:[" character(1) ",(0,t.jsx)("br",{})," Yes-No"]})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Description"}),(0,t.jsx)(r.td,{children:"Optional short description of the record"}),(0,t.jsx)(r.td,{children:"A description is limited to 255 characters."}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_order.html",children:"i_order"}),".Description",(0,t.jsxs)("small",{children:[" character varying(255) ",(0,t.jsx)("br",{})," String"]})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Sales Representative"}),(0,t.jsx)(r.td,{children:"Sales Representative or Company Agent"}),(0,t.jsx)(r.td,{children:"The Sales Representative indicates the Sales Rep for this Region.  Any Sales Rep must be a valid internal user."}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_order.html",children:"i_order"}),".SalesRep_ID",(0,t.jsxs)("small",{children:[" numeric(10) ",(0,t.jsx)("br",{})," Table"]})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Delivery Rule"}),(0,t.jsx)(r.td,{children:"Defines the timing of Delivery"}),(0,t.jsx)(r.td,{children:"The Delivery Rule indicates when an order should be delivered. For example should the order be delivered when the entire order is complete, when a line is complete or as the products become available."}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_order.html",children:"i_order"}),".DeliveryRule",(0,t.jsxs)("small",{children:[" character(1) ",(0,t.jsx)("br",{})," List"]})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Currency"}),(0,t.jsx)(r.td,{children:"The Currency for this record"}),(0,t.jsx)(r.td,{children:"Indicates the Currency to be used when processing or reporting on this record"}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_order.html",children:"i_order"}),".C_Currency_ID",(0,t.jsxs)("small",{children:[" numeric(10) ",(0,t.jsx)("br",{})," Table Direct"]})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Price List"}),(0,t.jsx)(r.td,{children:"Unique identifier of a Price List"}),(0,t.jsx)(r.td,{children:"Price Lists are used to determine the pricing, margin and cost of items purchased or sold."}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_order.html",children:"i_order"}),".M_PriceList_ID",(0,t.jsxs)("small",{children:[" numeric(10) ",(0,t.jsx)("br",{})," Table Direct"]})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Payment Term Key"}),(0,t.jsx)(r.td,{children:"Key of the Payment Term"}),(0,t.jsx)(r.td,{}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_order.html",children:"i_order"}),".PaymentTermValue",(0,t.jsxs)("small",{children:[" character varying(40) ",(0,t.jsx)("br",{})," String"]})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Payment Term"}),(0,t.jsx)(r.td,{children:"The terms of Payment (timing, discount)"}),(0,t.jsx)(r.td,{children:"Payment Terms identify the method and timing of payment."}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_order.html",children:"i_order"}),".C_PaymentTerm_ID",(0,t.jsxs)("small",{children:[" numeric(10) ",(0,t.jsx)("br",{})," Table Direct"]})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Warehouse"}),(0,t.jsx)(r.td,{children:"Storage Warehouse and Service Point"}),(0,t.jsx)(r.td,{children:"The Warehouse identifies a unique Warehouse where products are stored or Services are provided."}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_order.html",children:"i_order"}),".M_Warehouse_ID",(0,t.jsxs)("small",{children:[" numeric(10) ",(0,t.jsx)("br",{})," Table Direct"]})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Shipper"}),(0,t.jsx)(r.td,{children:"Method or manner of product delivery"}),(0,t.jsx)(r.td,{children:"The Shipper indicates the method of delivering product"}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_order.html",children:"i_order"}),".M_Shipper_ID",(0,t.jsxs)("small",{children:[" numeric(10) ",(0,t.jsx)("br",{})," Table"]})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Business Partner"}),(0,t.jsx)(r.td,{children:"Identifies a Business Partner"}),(0,t.jsx)(r.td,{children:"A Business Partner is anyone with whom you transact.  This can include Vendor, Customer, Employee or Salesperson"}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_order.html",children:"i_order"}),".C_BPartner_ID",(0,t.jsxs)("small",{children:[" numeric(10) ",(0,t.jsx)("br",{})," Search"]})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Business Partner Key"}),(0,t.jsx)(r.td,{children:"Key of the Business Partner"}),(0,t.jsx)(r.td,{}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_order.html",children:"i_order"}),".BPartnerValue",(0,t.jsxs)("small",{children:[" character varying(40) ",(0,t.jsx)("br",{})," String"]})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Name"}),(0,t.jsx)(r.td,{children:"Alphanumeric identifier of the entity"}),(0,t.jsx)(r.td,{children:"The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length."}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_order.html",children:"i_order"}),".Name",(0,t.jsxs)("small",{children:[" character varying(60) ",(0,t.jsx)("br",{})," String"]})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Invoice To"}),(0,t.jsx)(r.td,{children:"Bill to Address"}),(0,t.jsx)(r.td,{children:"The Bill/Invoice To indicates the address to use when remitting bills"}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_order.html",children:"i_order"}),".BillTo_ID",(0,t.jsxs)("small",{children:[" numeric(10) ",(0,t.jsx)("br",{})," Table"]})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Partner Location"}),(0,t.jsx)(r.td,{children:"Identifies the (ship to) address for this Business Partner"}),(0,t.jsx)(r.td,{children:"The Partner address indicates the location of a Business Partner"}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_order.html",children:"i_order"}),".C_BPartner_Location_ID",(0,t.jsxs)("small",{children:[" numeric(10) ",(0,t.jsx)("br",{})," Table Direct"]})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Address"}),(0,t.jsx)(r.td,{children:"Location or Address"}),(0,t.jsx)(r.td,{children:"The Location / Address field defines the location of an entity."}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_order.html",children:"i_order"}),".C_Location_ID",(0,t.jsxs)("small",{children:[" numeric(10) ",(0,t.jsx)("br",{})," Search"]})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Address 1"}),(0,t.jsx)(r.td,{children:"Address line 1 for this location"}),(0,t.jsx)(r.td,{children:"The Address 1 identifies the address for an entity's location"}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_order.html",children:"i_order"}),".Address1",(0,t.jsxs)("small",{children:[" character varying(60) ",(0,t.jsx)("br",{})," String"]})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Address 2"}),(0,t.jsx)(r.td,{children:"Address line 2 for this location"}),(0,t.jsx)(r.td,{children:"The Address 2 provides additional address information for an entity.  It can be used for building location, apartment number or similar information."}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_order.html",children:"i_order"}),".Address2",(0,t.jsxs)("small",{children:[" character varying(60) ",(0,t.jsx)("br",{})," String"]})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"City"}),(0,t.jsx)(r.td,{children:"Identifies a City"}),(0,t.jsx)(r.td,{children:"The City identifies a unique City for this Country or Region."}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_order.html",children:"i_order"}),".City",(0,t.jsxs)("small",{children:[" character varying(60) ",(0,t.jsx)("br",{})," String"]})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ZIP"}),(0,t.jsx)(r.td,{children:"Postal code"}),(0,t.jsx)(r.td,{children:"The Postal Code or ZIP identifies the postal code for this entity's address."}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_order.html",children:"i_order"}),".Postal",(0,t.jsxs)("small",{children:[" character varying(10) ",(0,t.jsx)("br",{})," String"]})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Region"}),(0,t.jsx)(r.td,{children:"Name of the Region"}),(0,t.jsx)(r.td,{children:"The Region Name defines the name that will print when this region is used in a document."}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_order.html",children:"i_order"}),".RegionName",(0,t.jsxs)("small",{children:[" character varying(60) ",(0,t.jsx)("br",{})," String"]})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Region"}),(0,t.jsx)(r.td,{children:"Identifies a geographical Region"}),(0,t.jsx)(r.td,{children:"The Region identifies a unique Region for this Country."}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_order.html",children:"i_order"}),".C_Region_ID",(0,t.jsxs)("small",{children:[" numeric(10) ",(0,t.jsx)("br",{})," Table Direct"]})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ISO Country Code"}),(0,t.jsx)(r.td,{children:"Upper-case two-letter alphanumeric ISO Country code according to ISO 3166-1"}),(0,t.jsxs)(r.td,{children:["The official list can be found at ",(0,t.jsx)(r.a,{href:"https://www.iso.org/obp/ui/#search",children:"https://www.iso.org/obp/ui/#search"})]}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_order.html",children:"i_order"}),".CountryCode",(0,t.jsxs)("small",{children:[" character(2) ",(0,t.jsx)("br",{})," String"]})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Country"}),(0,t.jsx)(r.td,{children:"Country"}),(0,t.jsx)(r.td,{children:"The Country defines a Country.  Each Country must be defined before it can be used in any document."}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_order.html",children:"i_order"}),".C_Country_ID",(0,t.jsxs)("small",{children:[" numeric(10) ",(0,t.jsx)("br",{})," Table Direct"]})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"User/Contact"}),(0,t.jsx)(r.td,{children:"User within the system - Internal or Business Partner Contact"}),(0,t.jsx)(r.td,{children:"The User identifies a unique user in the system. This could be an internal user or a business partner contact"}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_order.html",children:"i_order"}),".AD_User_ID",(0,t.jsxs)("small",{children:[" numeric(10) ",(0,t.jsx)("br",{})," Table Direct"]})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Contact Name"}),(0,t.jsx)(r.td,{children:"Business Partner Contact Name"}),(0,t.jsx)(r.td,{}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_order.html",children:"i_order"}),".ContactName",(0,t.jsxs)("small",{children:[" character varying(60) ",(0,t.jsx)("br",{})," String"]})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Phone"}),(0,t.jsx)(r.td,{children:"Identifies a telephone number"}),(0,t.jsx)(r.td,{children:"The Phone field identifies a telephone number"}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_order.html",children:"i_order"}),".Phone",(0,t.jsxs)("small",{children:[" character varying(40) ",(0,t.jsx)("br",{})," String"]})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"EMail Address"}),(0,t.jsx)(r.td,{children:"Electronic Mail Address"}),(0,t.jsxs)(r.td,{children:["The Email Address is the Electronic Mail ID for this User and should be fully qualified (e.g. ",(0,t.jsx)(r.a,{href:"mailto:joe.smith@company.com",children:"joe.smith@company.com"}),"). The Email Address is used to access the self service application functionality from the web."]}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_order.html",children:"i_order"}),".EMail",(0,t.jsxs)("small",{children:[" character varying(60) ",(0,t.jsx)("br",{})," String"]})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Date Ordered"}),(0,t.jsx)(r.td,{children:"Date of Order"}),(0,t.jsx)(r.td,{children:"Indicates the Date an item was ordered."}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_order.html",children:"i_order"}),".DateOrdered",(0,t.jsxs)("small",{children:[" timestamp without time zone ",(0,t.jsx)("br",{})," Date"]})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Account Date"}),(0,t.jsx)(r.td,{children:"Accounting Date"}),(0,t.jsx)(r.td,{children:"The Accounting Date indicates the date to be used on the General Ledger account entries generated from this document. It is also used for any currency conversion."}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_order.html",children:"i_order"}),".DateAcct",(0,t.jsxs)("small",{children:[" timestamp without time zone ",(0,t.jsx)("br",{})," Date"]})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Product"}),(0,t.jsx)(r.td,{children:"Product, Service, Item"}),(0,t.jsx)(r.td,{children:"Identifies an item which is either purchased or sold in this organization."}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_order.html",children:"i_order"}),".M_Product_ID",(0,t.jsxs)("small",{children:[" numeric(10) ",(0,t.jsx)("br",{})," Search"]})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Product Key"}),(0,t.jsx)(r.td,{children:"Key of the Product"}),(0,t.jsx)(r.td,{}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_order.html",children:"i_order"}),".ProductValue",(0,t.jsxs)("small",{children:[" character varying(40) ",(0,t.jsx)("br",{})," String"]})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Charge"}),(0,t.jsx)(r.td,{children:"Additional document charges"}),(0,t.jsx)(r.td,{children:"The Charge indicates a type of Charge (Handling, Shipping, Restocking)"}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_order.html",children:"i_order"}),".C_Charge_ID",(0,t.jsxs)("small",{children:[" numeric(10) ",(0,t.jsx)("br",{})," Table Direct"]})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Charge Name"}),(0,t.jsx)(r.td,{children:"Name of the Charge"}),(0,t.jsx)(r.td,{}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_order.html",children:"i_order"}),".ChargeName",(0,t.jsxs)("small",{children:[" character varying(60) ",(0,t.jsx)("br",{})," String"]})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"SKU"}),(0,t.jsx)(r.td,{children:"Stock Keeping Unit"}),(0,t.jsx)(r.td,{children:"The SKU indicates a user defined stock keeping unit.  It may be used for an additional bar code symbols or your own schema."}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_order.html",children:"i_order"}),".SKU",(0,t.jsxs)("small",{children:[" character varying(30) ",(0,t.jsx)("br",{})," String"]})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"UPC/EAN"}),(0,t.jsx)(r.td,{children:"Bar Code (Universal Product Code or its superset European Article Number)"}),(0,t.jsx)(r.td,{children:"Use this field to enter the bar code for the product in any of the bar code symbologies (Codabar, Code 25, Code 39, Code 93, Code 128, UPC (A), UPC (E), EAN-13, EAN-8, ITF, ITF-14, ISBN, ISSN, JAN-13, JAN-8, POSTNET and FIM, MSI/Plessey, and Pharmacode)"}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_order.html",children:"i_order"}),".UPC",(0,t.jsxs)("small",{children:[" character varying(30) ",(0,t.jsx)("br",{})," String"]})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"UOM"}),(0,t.jsx)(r.td,{children:"Unit of Measure"}),(0,t.jsx)(r.td,{children:"The UOM defines a unique non monetary Unit of Measure"}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_order.html",children:"i_order"}),".C_UOM_ID",(0,t.jsxs)("small",{children:[" numeric(10) ",(0,t.jsx)("br",{})," Table Direct"]})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Ordered Quantity"}),(0,t.jsx)(r.td,{children:"Ordered Quantity"}),(0,t.jsx)(r.td,{children:"The Ordered Quantity indicates the quantity of a product that was ordered."}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_order.html",children:"i_order"}),".QtyOrdered",(0,t.jsxs)("small",{children:[" numeric ",(0,t.jsx)("br",{})," Quantity"]})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Unit Price"}),(0,t.jsx)(r.td,{children:"Actual Price"}),(0,t.jsx)(r.td,{children:"The Actual or Unit Price indicates the Price for a product in source currency."}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_order.html",children:"i_order"}),".PriceActual",(0,t.jsxs)("small",{children:[" numeric ",(0,t.jsx)("br",{})," Costs+Prices"]})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Line Description"}),(0,t.jsx)(r.td,{children:"Description of the Line"}),(0,t.jsx)(r.td,{}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_order.html",children:"i_order"}),".LineDescription",(0,t.jsxs)("small",{children:[" character varying(255) ",(0,t.jsx)("br",{})," String"]})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Tax Indicator"}),(0,t.jsx)(r.td,{children:"Short form for Tax to be printed on documents"}),(0,t.jsx)(r.td,{children:"The Tax Indicator identifies the short name that will print on documents referencing this tax."}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_order.html",children:"i_order"}),".TaxIndicator",(0,t.jsxs)("small",{children:[" character varying(10) ",(0,t.jsx)("br",{})," String"]})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Tax"}),(0,t.jsx)(r.td,{children:"Tax identifier"}),(0,t.jsx)(r.td,{children:"The Tax indicates the type of tax used in document line."}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_order.html",children:"i_order"}),".C_Tax_ID",(0,t.jsxs)("small",{children:[" numeric(10) ",(0,t.jsx)("br",{})," Table Direct"]})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Tax Amount"}),(0,t.jsx)(r.td,{children:"Tax Amount for a document"}),(0,t.jsx)(r.td,{children:"The Tax Amount displays the total tax amount for a document."}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_order.html",children:"i_order"}),".TaxAmt",(0,t.jsxs)("small",{children:[" numeric ",(0,t.jsx)("br",{})," Amount"]})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Project"}),(0,t.jsx)(r.td,{children:"Financial Project"}),(0,t.jsx)(r.td,{children:"A Project allows you to track and control internal or external activities."}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_order.html",children:"i_order"}),".C_Project_ID",(0,t.jsxs)("small",{children:[" numeric(10) ",(0,t.jsx)("br",{})," Search"]})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Campaign"}),(0,t.jsx)(r.td,{children:"Marketing Campaign"}),(0,t.jsx)(r.td,{children:"The Campaign defines a unique marketing program.  Projects can be associated with a pre defined Marketing Campaign.  You can then report based on a specific Campaign."}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_order.html",children:"i_order"}),".C_Campaign_ID",(0,t.jsxs)("small",{children:[" numeric(10) ",(0,t.jsx)("br",{})," Table Direct"]})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Activity"}),(0,t.jsx)(r.td,{children:"Business Activity"}),(0,t.jsx)(r.td,{children:"Activities indicate tasks that are performed and used to utilize Activity based Costing"}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_order.html",children:"i_order"}),".C_Activity_ID",(0,t.jsxs)("small",{children:[" numeric(10) ",(0,t.jsx)("br",{})," Table Direct"]})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Trx Organization"}),(0,t.jsx)(r.td,{children:"Performing or initiating organization"}),(0,t.jsx)(r.td,{children:"The organization which performs or initiates this transaction (for another organization).  The owning Organization may not be the transaction organization in a service bureau environment, with centralized services, and inter-organization transactions."}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_order.html",children:"i_order"}),".AD_OrgTrx_ID",(0,t.jsxs)("small",{children:[" numeric(10) ",(0,t.jsx)("br",{})," Table"]})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Order Source Key"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_order.html",children:"i_order"}),".C_OrderSourceValue",(0,t.jsxs)("small",{children:[" character varying(40) ",(0,t.jsx)("br",{})," String"]})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Order Source"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_order.html",children:"i_order"}),".C_OrderSource_ID",(0,t.jsxs)("small",{children:[" numeric(10) ",(0,t.jsx)("br",{})," Table Direct"]})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Import Orders"}),(0,t.jsx)(r.td,{children:"Import Orders"}),(0,t.jsx)(r.td,{children:"The Parameters are default values for null import record values, they do not overwrite any data.Note that only Prepare and Complete are valid document actions."}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_order.html",children:"i_order"}),".Processing",(0,t.jsxs)("small",{children:[" character(1) ",(0,t.jsx)("br",{})," Button"]})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Processed"}),(0,t.jsx)(r.td,{children:"The document has been processed"}),(0,t.jsx)(r.td,{children:"The Processed checkbox indicates that a document has been processed."}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_order.html",children:"i_order"}),".Processed",(0,t.jsxs)("small",{children:[" character(1) ",(0,t.jsx)("br",{})," Yes-No"]})]})]})]})]})]})}function o(e={}){const{wrapper:r}={...(0,d.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},58863:(e,r,i)=>{i.d(r,{A:()=>s});const s=i.p+"assets/images/ImportOrder-Window_iDempiere_v12.0.0-0ee9041b99b0e01f3d80ef14390195e5.png"},28453:(e,r,i)=>{i.d(r,{R:()=>n,x:()=>h});var s=i(96540);const t={},d=s.createContext(t);function n(e){const r=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function h(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:n(e.components),s.createElement(d.Provider,{value:r},e.children)}}}]);