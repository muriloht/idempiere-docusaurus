# Window: Sales Rep Info

**[Created:** 11/12/2003 - **Updated:** 30/06/2021 **]**  
**Description:** Company Agent (Sales Rep) Information  
**Help:** This window allows you to view Company agent related information  
![](/img/docs/manual/SalesRepInfo-Window_iDempiere_v12.0.0.png)

### Tab: Company Agent

**[Created:** 11/12/2003 - **Updated:** 02/01/2000 **]**   
**Description:** Sales Representative Selection  
**Help:**   
**Tab Level:** 0

Table 10: Company Agent - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Business Partner | Identifies a Business Partner | A Business Partner is anyone with whom you transact.  This can include Vendor, Customer, Employee or Salesperson | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).C_BPartner_ID<small> numeric(10) <br/> Search</small> | 
| Partner Location | Identifies the (ship to) address for this Business Partner | The Partner address indicates the location of a Business Partner | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).C_BPartner_Location_ID<small> numeric(10) <br/> Table Direct</small> | 
| EMail Address | Electronic Mail Address | The Email Address is the Electronic Mail ID for this User and should be fully qualified (e.g. joe.smith@company.com). The Email Address is used to access the self service application functionality from the web. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).EMail<small> character varying(60) <br/> String</small> | 
| Title | Name this entity is referred to as | The Title indicates the name that an entity is referred to as. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).Title<small> character varying(40) <br/> String</small> | 
| Birthday | Birthday or Anniversary day | Birthday or Anniversary day | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).Birthday<small> timestamp without time zone <br/> Date</small> | 
| Phone | Identifies a telephone number | The Phone field identifies a telephone number | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).Phone<small> character varying(40) <br/> String</small> | 
| Fax | Facsimile number | The Fax identifies a facsimile number for this Business Partner or  Location | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).Fax<small> character varying(40) <br/> String</small> | 
| Supervisor | Supervisor for this user/organization - used for escalation and approval | The Supervisor indicates who will be used for forwarding and escalating issues for this user - or for approvals. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).Supervisor_ID<small> numeric(10) <br/> Search</small> | 
| Trx Organization | Performing or initiating organization | The organization which performs or initiates this transaction (for another organization).  The owning Organization may not be the transaction organization in a service bureau environment, with centralized services, and inter-organization transactions. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).AD_OrgTrx_ID<small> numeric(10) <br/> Table</small> | 


### Tab: Orders

**[Created:** 11/12/2003 - **Updated:** 02/01/2000 **]**   
**Description:** All Orders where the Agent &quot;owns&quot; the Order, the Business Partner or the Product  
**Help:**   
**Tab Level:** 1

Table 20: Orders - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_order](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_order.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_order](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_order.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Document No | Document sequence number of the document | The document number is usually automatically generated by the system and determined by the document type of the document. If the document is not saved, the preliminary number is displayed in &quot;&quot;.If the document type of your document has no automatic document sequence defined, the field is empty if you create a new document. This is for documents which usually have an external number (like vendor invoice).  If you leave the field empty, the system will generate a document number for you. The document sequence used for this fallback number is defined in the &quot;Maintain Sequence&quot; window with the name &quot;DocumentNo_&quot;, where TableName is the actual name of the table (e.g. C_Order). | [c_order](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_order.html).DocumentNo<small> character varying(30) <br/> String</small> | 
| Order Reference | Transaction Reference Number (Sales Order, Purchase Order) of your Business Partner | The business partner order reference is the order reference for this specific transaction; Often Purchase Order numbers are given to print on Invoices for easier reference.  A standard number can be defined in the Business Partner (Customer) window. | [c_order](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_order.html).POReference<small> character varying(20) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_order](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_order.html).Description<small> character varying(255) <br/> Text</small> | 
| Document Type | Document type or rules | The Document Type determines document sequence and processing rules | [c_order](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_order.html).C_DocType_ID<small> numeric(10) <br/> Table Direct</small> | 
| Document Status | The current status of the document | The Document Status indicates the status of a document at this time.  If you want to change the document status, use the Document Action field | [c_order](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_order.html).DocStatus<small> character(2) <br/> List</small> | 
| Date Ordered | Date of Order | Indicates the Date an item was ordered. | [c_order](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_order.html).DateOrdered<small> timestamp without time zone <br/> Date</small> | 
| Account Date | Accounting Date | The Accounting Date indicates the date to be used on the General Ledger account entries generated from this document. It is also used for any currency conversion. | [c_order](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_order.html).DateAcct<small> timestamp without time zone <br/> Date</small> | 
| Date Promised | Date Order was promised | The Date Promised indicates the date, if any, that an Order was promised for. | [c_order](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_order.html).DatePromised<small> timestamp without time zone <br/> Date</small> | 
| Date Printed | Date the document was printed. | Indicates the Date that a document was printed. | [c_order](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_order.html).DatePrinted<small> timestamp without time zone <br/> Date</small> | 
| Business Partner | Identifies a Business Partner | A Business Partner is anyone with whom you transact.  This can include Vendor, Customer, Employee or Salesperson | [c_order](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_order.html).C_BPartner_ID<small> numeric(10) <br/> Search</small> | 
| Invoice Partner | Business Partner to be invoiced | If empty the shipment business partner will be invoiced | [c_order](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_order.html).Bill_BPartner_ID<small> numeric(10) <br/> Search</small> | 
| Partner Location | Identifies the (ship to) address for this Business Partner | The Partner address indicates the location of a Business Partner | [c_order](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_order.html).C_BPartner_Location_ID<small> numeric(10) <br/> Table Direct</small> | 
| Invoice Location | Business Partner Location for invoicing |  | [c_order](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_order.html).Bill_Location_ID<small> numeric(10) <br/> Table</small> | 
| Delivery Rule | Defines the timing of Delivery | The Delivery Rule indicates when an order should be delivered. For example should the order be delivered when the entire order is complete, when a line is complete or as the products become available. | [c_order](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_order.html).DeliveryRule<small> character(1) <br/> List</small> | 
| Priority | Priority of a document | The Priority indicates the importance (high, medium, low) of this document | [c_order](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_order.html).PriorityRule<small> character(1) <br/> List</small> | 
| Warehouse | Storage Warehouse and Service Point | The Warehouse identifies a unique Warehouse where products are stored or Services are provided. | [c_order](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_order.html).M_Warehouse_ID<small> numeric(10) <br/> Table Direct</small> | 
| Drop Shipment | Drop Shipments are sent directly to the Drop Shipment Location | Drop Shipments are sent directly to the Drop Shipment Location using the Drop Ship Business Partner name and contact. | [c_order](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_order.html).IsDropShip<small> character(1) <br/> Yes-No</small> | 
| Invoice Rule | Frequency and method of invoicing | The Invoice Rule defines how a Business Partner is invoiced and the frequency of invoicing. | [c_order](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_order.html).InvoiceRule<small> character(1) <br/> List</small> | 
| Sales Transaction | This is a Sales Transaction | The Sales Transaction checkbox indicates if this item is a Sales Transaction. | [c_order](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_order.html).IsSOTrx<small> character(1) <br/> Yes-No</small> | 
| Price List | Unique identifier of a Price List | Price Lists are used to determine the pricing, margin and cost of items purchased or sold. | [c_order](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_order.html).M_PriceList_ID<small> numeric(10) <br/> Table Direct</small> | 
| Currency | The Currency for this record | Indicates the Currency to be used when processing or reporting on this record | [c_order](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_order.html).C_Currency_ID<small> numeric(10) <br/> Table Direct</small> | 
| Sales Representative | Sales Representative or Company Agent | The Sales Representative indicates the Sales Rep for this Region.  Any Sales Rep must be a valid internal user. | [c_order](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_order.html).SalesRep_ID<small> numeric(10) <br/> Table</small> | 
| Self-Service | This is a Self-Service entry or this entry can be changed via Self-Service | Self-Service allows users to enter data or update their data.  The flag indicates, that this record was entered or created via Self-Service or that the user can change it via the Self-Service functionality. | [c_order](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_order.html).IsSelfService<small> character(1) <br/> Yes-No</small> | 
| Payment Rule | How you pay the invoice | The Payment Rule indicates the method of invoice payment. | [c_order](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_order.html).PaymentRule<small> character(1) <br/> Payment</small> | 
| Payment Term | The terms of Payment (timing, discount) | Payment Terms identify the method and timing of payment. | [c_order](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_order.html).C_PaymentTerm_ID<small> numeric(10) <br/> Table Direct</small> | 
| Project | Financial Project | A Project allows you to track and control internal or external activities. | [c_order](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_order.html).C_Project_ID<small> numeric(10) <br/> Table Direct</small> | 
| Campaign | Marketing Campaign | The Campaign defines a unique marketing program.  Projects can be associated with a pre defined Marketing Campaign.  You can then report based on a specific Campaign. | [c_order](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_order.html).C_Campaign_ID<small> numeric(10) <br/> Table Direct</small> | 
| Delivered |  |  | [c_order](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_order.html).IsDelivered<small> character(1) <br/> Yes-No</small> | 
| Invoiced | Is this invoiced? | If selected, invoices are created | [c_order](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_order.html).IsInvoiced<small> character(1) <br/> Yes-No</small> | 
| Total Lines | Total of all document lines | The Total amount displays the total of all lines in document currency | [c_order](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_order.html).TotalLines<small> numeric <br/> Amount</small> | 
| Grand Total | Total amount of document | The Grand Total displays the total amount including Tax and Freight in document currency | [c_order](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_order.html).GrandTotal<small> numeric <br/> Amount</small> | 


### Tab: Order Lines

**[Created:** 11/12/2003 - **Updated:** 02/01/2000 **]**   
**Description:** All Order Lines where the Agent &quot;owns&quot; the Order, the Business Partner or the Product  
**Help:**   
**Tab Level:** 2

Table 30: Order Lines - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_orderline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_orderline.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_orderline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_orderline.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Order | Order | The Order is a control document.  The  Order is complete when the quantity ordered is the same as the quantity shipped and invoiced.  When you close an order, unshipped (backordered) quantities are cancelled. | [c_orderline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_orderline.html).C_Order_ID<small> numeric(10) <br/> Search</small> | 
| Line No | Unique line for this document | Indicates the unique line for a document.  It will also control the display order of the lines within a document. | [c_orderline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_orderline.html).Line<small> numeric(10) <br/> Integer</small> | 
| Business Partner | Identifies a Business Partner | A Business Partner is anyone with whom you transact.  This can include Vendor, Customer, Employee or Salesperson | [c_orderline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_orderline.html).C_BPartner_ID<small> numeric(10) <br/> Search</small> | 
| Partner Location | Identifies the (ship to) address for this Business Partner | The Partner address indicates the location of a Business Partner | [c_orderline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_orderline.html).C_BPartner_Location_ID<small> numeric(10) <br/> Table Direct</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_orderline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_orderline.html).Description<small> character varying(255) <br/> Text</small> | 
| Date Ordered | Date of Order | Indicates the Date an item was ordered. | [c_orderline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_orderline.html).DateOrdered<small> timestamp without time zone <br/> Date</small> | 
| Date Promised | Date Order was promised | The Date Promised indicates the date, if any, that an Order was promised for. | [c_orderline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_orderline.html).DatePromised<small> timestamp without time zone <br/> Date</small> | 
| Date Delivered | Date when the product was delivered |  | [c_orderline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_orderline.html).DateDelivered<small> timestamp without time zone <br/> Date</small> | 
| Date Invoiced | Date printed on Invoice | The Date Invoice indicates the date printed on the invoice. | [c_orderline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_orderline.html).DateInvoiced<small> timestamp without time zone <br/> Date</small> | 
| Warehouse | Storage Warehouse and Service Point | The Warehouse identifies a unique Warehouse where products are stored or Services are provided. | [c_orderline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_orderline.html).M_Warehouse_ID<small> numeric(10) <br/> Table</small> | 
| Product | Product, Service, Item | Identifies an item which is either purchased or sold in this organization. | [c_orderline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_orderline.html).M_Product_ID<small> numeric(10) <br/> Search</small> | 
| Description Only | if true, the line is just description and no transaction | If a line is Description Only, e.g. Product Inventory is not corrected. No accounting transactions are created and the amount or totals are not included in the document.  This for including descriptive detail lines, e.g. for an Work Order. | [c_orderline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_orderline.html).IsDescription<small> character(1) <br/> Yes-No</small> | 
| Resource Assignment | Resource Assignment |  | [c_orderline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_orderline.html).S_ResourceAssignment_ID<small> numeric(10) <br/> Assignment</small> | 
| Attribute Set Instance | Product Attribute Set Instance | The values of the actual Product Attribute Instances.  The product level attributes are defined on Product level. | [c_orderline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_orderline.html).M_AttributeSetInstance_ID<small> numeric(10) <br/> Product Attribute</small> | 
| Ordered Quantity | Ordered Quantity | The Ordered Quantity indicates the quantity of a product that was ordered. | [c_orderline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_orderline.html).QtyOrdered<small> numeric <br/> Quantity</small> | 
| Reserved Quantity | Reserved Quantity | The Reserved Quantity indicates the quantity of a product that is currently reserved. | [c_orderline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_orderline.html).QtyReserved<small> numeric <br/> Quantity</small> | 
| Delivered Quantity | Delivered Quantity | The Delivered Quantity indicates the quantity of a product that has been delivered. | [c_orderline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_orderline.html).QtyDelivered<small> numeric <br/> Quantity</small> | 
| Quantity Invoiced | Invoiced Quantity | The Invoiced Quantity indicates the quantity of a product that have been invoiced. | [c_orderline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_orderline.html).QtyInvoiced<small> numeric <br/> Quantity</small> | 
| Currency | The Currency for this record | Indicates the Currency to be used when processing or reporting on this record | [c_orderline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_orderline.html).C_Currency_ID<small> numeric(10) <br/> Table Direct</small> | 
| Tax | Tax identifier | The Tax indicates the type of tax used in document line. | [c_orderline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_orderline.html).C_Tax_ID<small> numeric(10) <br/> Table Direct</small> | 
| List Price | List Price | The List Price is the official List Price in the document currency. | [c_orderline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_orderline.html).PriceList<small> numeric <br/> Costs+Prices</small> | 
| Discount % | Discount in percent | The Discount indicates the discount applied or taken as a percentage. | [c_orderline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_orderline.html).Discount<small> numeric <br/> Number</small> | 
| Unit Price | Actual Price | The Actual or Unit Price indicates the Price for a product in source currency. | [c_orderline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_orderline.html).PriceActual<small> numeric <br/> Costs+Prices</small> | 
| Line Amount | Line Extended Amount (Quantity * Actual Price) without Freight and Charges | Indicates the extended line amount based on the quantity and the actual price.  Any additional charges or freight are not included.  The Amount may or may not include tax.  If the price list is inclusive tax, the line amount is the same as the line total. | [c_orderline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_orderline.html).LineNetAmt<small> numeric <br/> Amount</small> | 


### Tab: Invoices

**[Created:** 11/12/2003 - **Updated:** 02/01/2000 **]**   
**Description:** All Invoices where the Agent &quot;owns&quot; the Invoice, the Business Partner or the Product  
**Help:**   
**Tab Level:** 1

Table 40: Invoices - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_invoice](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_invoice.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_invoice](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_invoice.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Document No | Document sequence number of the document | The document number is usually automatically generated by the system and determined by the document type of the document. If the document is not saved, the preliminary number is displayed in &quot;&quot;.If the document type of your document has no automatic document sequence defined, the field is empty if you create a new document. This is for documents which usually have an external number (like vendor invoice).  If you leave the field empty, the system will generate a document number for you. The document sequence used for this fallback number is defined in the &quot;Maintain Sequence&quot; window with the name &quot;DocumentNo_&quot;, where TableName is the actual name of the table (e.g. C_Order). | [c_invoice](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_invoice.html).DocumentNo<small> character varying(30) <br/> String</small> | 
| Order Reference | Transaction Reference Number (Sales Order, Purchase Order) of your Business Partner | The business partner order reference is the order reference for this specific transaction; Often Purchase Order numbers are given to print on Invoices for easier reference.  A standard number can be defined in the Business Partner (Customer) window. | [c_invoice](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_invoice.html).POReference<small> character varying(20) <br/> String</small> | 
| Order | Order | The Order is a control document.  The  Order is complete when the quantity ordered is the same as the quantity shipped and invoiced.  When you close an order, unshipped (backordered) quantities are cancelled. | [c_invoice](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_invoice.html).C_Order_ID<small> numeric(10) <br/> Search</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_invoice](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_invoice.html).Description<small> character varying(255) <br/> Text</small> | 
| Document Type | Document type or rules | The Document Type determines document sequence and processing rules | [c_invoice](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_invoice.html).C_DocType_ID<small> numeric(10) <br/> Table Direct</small> | 
| Document Status | The current status of the document | The Document Status indicates the status of a document at this time.  If you want to change the document status, use the Document Action field | [c_invoice](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_invoice.html).DocStatus<small> character(2) <br/> List</small> | 
| Date Invoiced | Date printed on Invoice | The Date Invoice indicates the date printed on the invoice. | [c_invoice](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_invoice.html).DateInvoiced<small> timestamp without time zone <br/> Date</small> | 
| Account Date | Accounting Date | The Accounting Date indicates the date to be used on the General Ledger account entries generated from this document. It is also used for any currency conversion. | [c_invoice](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_invoice.html).DateAcct<small> timestamp without time zone <br/> Date</small> | 
| Date Ordered | Date of Order | Indicates the Date an item was ordered. | [c_invoice](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_invoice.html).DateOrdered<small> timestamp without time zone <br/> Date</small> | 
| Date Printed | Date the document was printed. | Indicates the Date that a document was printed. | [c_invoice](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_invoice.html).DatePrinted<small> timestamp without time zone <br/> Date</small> | 
| Business Partner | Identifies a Business Partner | A Business Partner is anyone with whom you transact.  This can include Vendor, Customer, Employee or Salesperson | [c_invoice](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_invoice.html).C_BPartner_ID<small> numeric(10) <br/> Search</small> | 
| Partner Location | Identifies the (ship to) address for this Business Partner | The Partner address indicates the location of a Business Partner | [c_invoice](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_invoice.html).C_BPartner_Location_ID<small> numeric(10) <br/> Table Direct</small> | 
| Price List | Unique identifier of a Price List | Price Lists are used to determine the pricing, margin and cost of items purchased or sold. | [c_invoice](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_invoice.html).M_PriceList_ID<small> numeric(10) <br/> Table Direct</small> | 
| Currency | The Currency for this record | Indicates the Currency to be used when processing or reporting on this record | [c_invoice](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_invoice.html).C_Currency_ID<small> numeric(10) <br/> Table Direct</small> | 
| Payment Rule | How you pay the invoice | The Payment Rule indicates the method of invoice payment. | [c_invoice](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_invoice.html).PaymentRule<small> character(1) <br/> Payment</small> | 
| Payment Term | The terms of Payment (timing, discount) | Payment Terms identify the method and timing of payment. | [c_invoice](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_invoice.html).C_PaymentTerm_ID<small> numeric(10) <br/> Table Direct</small> | 
| Sales Representative | Sales Representative or Company Agent | The Sales Representative indicates the Sales Rep for this Region.  Any Sales Rep must be a valid internal user. | [c_invoice](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_invoice.html).SalesRep_ID<small> numeric(10) <br/> Search</small> | 
| Sales Transaction | This is a Sales Transaction | The Sales Transaction checkbox indicates if this item is a Sales Transaction. | [c_invoice](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_invoice.html).IsSOTrx<small> character(1) <br/> Yes-No</small> | 
| Self-Service | This is a Self-Service entry or this entry can be changed via Self-Service | Self-Service allows users to enter data or update their data.  The flag indicates, that this record was entered or created via Self-Service or that the user can change it via the Self-Service functionality. | [c_invoice](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_invoice.html).IsSelfService<small> character(1) <br/> Yes-No</small> | 
| Project | Financial Project | A Project allows you to track and control internal or external activities. | [c_invoice](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_invoice.html).C_Project_ID<small> numeric(10) <br/> Table Direct</small> | 
| Paid | The document is fully paid |  | [c_invoice](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_invoice.html).IsPaid<small> character(1) <br/> Yes-No</small> | 
| In Dispute | Document is in dispute | The document is in dispute. Use Requests to track details. | [c_invoice](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_invoice.html).IsInDispute<small> character(1) <br/> Yes-No</small> | 
| Total Lines | Total of all document lines | The Total amount displays the total of all lines in document currency | [c_invoice](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_invoice.html).TotalLines<small> numeric <br/> Amount</small> | 
| Grand Total | Total amount of document | The Grand Total displays the total amount including Tax and Freight in document currency | [c_invoice](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_invoice.html).GrandTotal<small> numeric <br/> Amount</small> | 


### Tab: Invoice Line

**[Created:** 11/12/2003 - **Updated:** 02/01/2000 **]**   
**Description:** All Invoice Liness where the Agent &quot;owns&quot; the Invoice, the Business Partner or the Product  
**Help:**   
**Tab Level:** 2

Table 50: Invoice Line - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_invoiceline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_invoiceline.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_invoiceline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_invoiceline.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Invoice | Invoice Identifier | The Invoice Document. | [c_invoiceline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_invoiceline.html).C_Invoice_ID<small> numeric(10) <br/> Search</small> | 
| Line No | Unique line for this document | Indicates the unique line for a document.  It will also control the display order of the lines within a document. | [c_invoiceline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_invoiceline.html).Line<small> numeric(10) <br/> Integer</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_invoiceline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_invoiceline.html).Description<small> character varying(255) <br/> Text</small> | 
| Charge | Additional document charges | The Charge indicates a type of Charge (Handling, Shipping, Restocking) | [c_invoiceline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_invoiceline.html).C_Charge_ID<small> numeric(10) <br/> Table Direct</small> | 
| Product | Product, Service, Item | Identifies an item which is either purchased or sold in this organization. | [c_invoiceline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_invoiceline.html).M_Product_ID<small> numeric(10) <br/> Search</small> | 
| Description Only | if true, the line is just description and no transaction | If a line is Description Only, e.g. Product Inventory is not corrected. No accounting transactions are created and the amount or totals are not included in the document.  This for including descriptive detail lines, e.g. for an Work Order. | [c_invoiceline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_invoiceline.html).IsDescription<small> character(1) <br/> Yes-No</small> | 
| Resource Assignment | Resource Assignment |  | [c_invoiceline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_invoiceline.html).S_ResourceAssignment_ID<small> numeric(10) <br/> Assignment</small> | 
| Attribute Set Instance | Product Attribute Set Instance | The values of the actual Product Attribute Instances.  The product level attributes are defined on Product level. | [c_invoiceline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_invoiceline.html).M_AttributeSetInstance_ID<small> numeric(10) <br/> Product Attribute</small> | 
| Quantity Invoiced | Invoiced Quantity | The Invoiced Quantity indicates the quantity of a product that have been invoiced. | [c_invoiceline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_invoiceline.html).QtyInvoiced<small> numeric <br/> Quantity</small> | 
| Unit Price | Actual Price | The Actual or Unit Price indicates the Price for a product in source currency. | [c_invoiceline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_invoiceline.html).PriceActual<small> numeric <br/> Costs+Prices</small> | 
| List Price | List Price | The List Price is the official List Price in the document currency. | [c_invoiceline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_invoiceline.html).PriceList<small> numeric <br/> Costs+Prices</small> | 
| Line Amount | Line Extended Amount (Quantity * Actual Price) without Freight and Charges | Indicates the extended line amount based on the quantity and the actual price.  Any additional charges or freight are not included.  The Amount may or may not include tax.  If the price list is inclusive tax, the line amount is the same as the line total. | [c_invoiceline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_invoiceline.html).LineNetAmt<small> numeric <br/> Amount</small> | 
| Tax Amount | Tax Amount for a document | The Tax Amount displays the total tax amount for a document. | [c_invoiceline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_invoiceline.html).TaxAmt<small> numeric <br/> Amount</small> | 
| Tax | Tax identifier | The Tax indicates the type of tax used in document line. | [c_invoiceline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_invoiceline.html).C_Tax_ID<small> numeric(10) <br/> Table Direct</small> | 
| Line Total | Total line amount incl. Tax | Total line amount | [c_invoiceline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_invoiceline.html).LineTotalAmt<small> numeric <br/> Amount</small> | 


