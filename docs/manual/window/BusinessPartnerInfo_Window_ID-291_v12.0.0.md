# Window: Business Partner Info

**[Created:** 27/07/2003 - **Updated:** 30/06/2021 **]**  
**Description:** Document Information of Business Partners  
**Help:**   
![](/img/docs/manual/BusinessPartnerInfo-Window_iDempiere_v12.0.0.png)

### Tab: Partner Selection

**[Created:** 27/07/2003 - **Updated:** 24/07/2005 **]**   
**Description:** Business Partner Selection  
**Help:**   
**Tab Level:** 0

Table 10: Partner Selection - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Search Key | Search key for the record in the format required - must be unique | A search key allows you a fast method of finding a particular record.If you leave the search key empty, the system automatically creates a numeric number.  The document sequence used for this fallback number is defined in the &quot;Maintain Sequence&quot; window with the name &quot;DocumentNo_&quot;, where TableName is the actual name of the table (e.g. C_Order). | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).Value<small> character varying(40) <br/> String</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).Name<small> character varying(120) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Business Partner Group | Business Partner Group | The Business Partner Group provides a method of defining defaults to be used for individual Business Partners. | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).C_BP_Group_ID<small> numeric(10) <br/> Table Direct</small> | 
| Open Balance | Total Open Balance Amount in primary Accounting Currency | The Total Open Balance Amount is the calculated open item amount for Customer and Vendor activity.  If the Balance is below zero, we owe the Business Partner.  The amount is used for Credit Management.Invoices and Payment Allocations determine the Open Balance (i.e. not Orders or Payments). | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).TotalOpenBalance<small> numeric <br/> Amount</small> | 
| Customer | Indicates if this Business Partner is a Customer | The Customer checkbox indicates if this Business Partner is a customer.  If it is select additional fields will display which further define this customer. | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).IsCustomer<small> character(1) <br/> Yes-No</small> | 
| Vendor | Indicates if this Business Partner is a Vendor | The Vendor checkbox indicates if this Business Partner is a Vendor.  If it is selected, additional fields will display which further identify this vendor. | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).IsVendor<small> character(1) <br/> Yes-No</small> | 
| Sales Representative | Indicates if  the business partner is a sales representative or company agent | The Sales Rep checkbox indicates if this business partner is a sales representative. A sales representative may also be an employee, but does not need to be. | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).IsSalesRep<small> character(1) <br/> Yes-No</small> | 
| Employee | Indicates if  this Business Partner is an employee | The Employee checkbox indicates if this Business Partner is an Employee.  If it is selected, additional fields will display which further identify this employee. | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).IsEmployee<small> character(1) <br/> Yes-No</small> | 


### Tab: Partner Orders

**[Created:** 27/07/2003 - **Updated:** 02/01/2000 **]**   
**Description:** Business Partner Orders  
**Help:**   
**Tab Level:** 1

Table 20: Partner Orders - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_order](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_order.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_order](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_order.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Document No | Document sequence number of the document | The document number is usually automatically generated by the system and determined by the document type of the document. If the document is not saved, the preliminary number is displayed in &quot;&quot;.If the document type of your document has no automatic document sequence defined, the field is empty if you create a new document. This is for documents which usually have an external number (like vendor invoice).  If you leave the field empty, the system will generate a document number for you. The document sequence used for this fallback number is defined in the &quot;Maintain Sequence&quot; window with the name &quot;DocumentNo_&quot;, where TableName is the actual name of the table (e.g. C_Order). | [c_order](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_order.html).DocumentNo<small> character varying(30) <br/> String</small> | 
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
| Total Lines | Total of all document lines | The Total amount displays the total of all lines in document currency | [c_order](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_order.html).TotalLines<small> numeric <br/> Amount</small> | 
| Grand Total | Total amount of document | The Grand Total displays the total amount including Tax and Freight in document currency | [c_order](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_order.html).GrandTotal<small> numeric <br/> Amount</small> | 
| Order | Order | The Order is a control document.  The  Order is complete when the quantity ordered is the same as the quantity shipped and invoiced.  When you close an order, unshipped (backordered) quantities are cancelled. | [c_order](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_order.html).C_Order_ID<small> numeric(10) <br/> ID</small> | 


### Tab: Partner Shipments

**[Created:** 27/07/2003 - **Updated:** 02/01/2000 **]**   
**Description:** Business Partner Shipments  
**Help:**   
**Tab Level:** 1

Table 30: Partner Shipments - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [m_inout](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_inout.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [m_inout](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_inout.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Document Type | Document type or rules | The Document Type determines document sequence and processing rules | [m_inout](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_inout.html).C_DocType_ID<small> numeric(10) <br/> Table</small> | 
| Document No | Document sequence number of the document | The document number is usually automatically generated by the system and determined by the document type of the document. If the document is not saved, the preliminary number is displayed in &quot;&quot;.If the document type of your document has no automatic document sequence defined, the field is empty if you create a new document. This is for documents which usually have an external number (like vendor invoice).  If you leave the field empty, the system will generate a document number for you. The document sequence used for this fallback number is defined in the &quot;Maintain Sequence&quot; window with the name &quot;DocumentNo_&quot;, where TableName is the actual name of the table (e.g. C_Order). | [m_inout](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_inout.html).DocumentNo<small> character varying(30) <br/> String</small> | 
| Document Status | The current status of the document | The Document Status indicates the status of a document at this time.  If you want to change the document status, use the Document Action field | [m_inout](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_inout.html).DocStatus<small> character(2) <br/> List</small> | 
| Movement Type | Method of moving the inventory | The Movement Type indicates the type of movement (in, out, to production, etc) | [m_inout](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_inout.html).MovementType<small> character(2) <br/> List</small> | 
| Movement Date | Date a product was moved in or out of inventory | The Movement Date indicates the date that a product moved in or out of inventory.  This is the result of a shipment, receipt or inventory movement. | [m_inout](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_inout.html).MovementDate<small> timestamp without time zone <br/> Date</small> | 
| Sales Representative | Sales Representative or Company Agent | The Sales Representative indicates the Sales Rep for this Region.  Any Sales Rep must be a valid internal user. | [m_inout](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_inout.html).SalesRep_ID<small> numeric(10) <br/> Table</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [m_inout](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_inout.html).Description<small> character varying(255) <br/> Text</small> | 
| Warehouse | Storage Warehouse and Service Point | The Warehouse identifies a unique Warehouse where products are stored or Services are provided. | [m_inout](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_inout.html).M_Warehouse_ID<small> numeric(10) <br/> Table Direct</small> | 
| In Dispute | Document is in dispute | The document is in dispute. Use Requests to track details. | [m_inout](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_inout.html).IsInDispute<small> character(1) <br/> Yes-No</small> | 
| Order | Order | The Order is a control document.  The  Order is complete when the quantity ordered is the same as the quantity shipped and invoiced.  When you close an order, unshipped (backordered) quantities are cancelled. | [m_inout](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_inout.html).C_Order_ID<small> numeric(10) <br/> Search</small> | 
| Shipment/Receipt | Material Shipment Document | The Material Shipment / Receipt | [m_inout](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_inout.html).M_InOut_ID<small> numeric(10) <br/> ID</small> | 


### Tab: Partner Invoices

**[Created:** 27/07/2003 - **Updated:** 02/01/2000 **]**   
**Description:** Business Partner Invoices  
**Help:**   
**Tab Level:** 1

Table 40: Partner Invoices - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_invoice](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_invoice.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_invoice](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_invoice.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Document Type | Document type or rules | The Document Type determines document sequence and processing rules | [c_invoice](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_invoice.html).C_DocType_ID<small> numeric(10) <br/> Table Direct</small> | 
| Document No | Document sequence number of the document | The document number is usually automatically generated by the system and determined by the document type of the document. If the document is not saved, the preliminary number is displayed in &quot;&quot;.If the document type of your document has no automatic document sequence defined, the field is empty if you create a new document. This is for documents which usually have an external number (like vendor invoice).  If you leave the field empty, the system will generate a document number for you. The document sequence used for this fallback number is defined in the &quot;Maintain Sequence&quot; window with the name &quot;DocumentNo_&quot;, where TableName is the actual name of the table (e.g. C_Order). | [c_invoice](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_invoice.html).DocumentNo<small> character varying(30) <br/> String</small> | 
| Document Status | The current status of the document | The Document Status indicates the status of a document at this time.  If you want to change the document status, use the Document Action field | [c_invoice](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_invoice.html).DocStatus<small> character(2) <br/> List</small> | 
| Self-Service | This is a Self-Service entry or this entry can be changed via Self-Service | Self-Service allows users to enter data or update their data.  The flag indicates, that this record was entered or created via Self-Service or that the user can change it via the Self-Service functionality. | [c_invoice](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_invoice.html).IsSelfService<small> character(1) <br/> Yes-No</small> | 
| Date Invoiced | Date printed on Invoice | The Date Invoice indicates the date printed on the invoice. | [c_invoice](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_invoice.html).DateInvoiced<small> timestamp without time zone <br/> Date</small> | 
| Sales Representative | Sales Representative or Company Agent | The Sales Representative indicates the Sales Rep for this Region.  Any Sales Rep must be a valid internal user. | [c_invoice](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_invoice.html).SalesRep_ID<small> numeric(10) <br/> Search</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_invoice](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_invoice.html).Description<small> character varying(255) <br/> Text</small> | 
| Paid | The document is fully paid |  | [c_invoice](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_invoice.html).IsPaid<small> character(1) <br/> Yes-No</small> | 
| In Dispute | Document is in dispute | The document is in dispute. Use Requests to track details. | [c_invoice](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_invoice.html).IsInDispute<small> character(1) <br/> Yes-No</small> | 
| Currency | The Currency for this record | Indicates the Currency to be used when processing or reporting on this record | [c_invoice](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_invoice.html).C_Currency_ID<small> numeric(10) <br/> Table Direct</small> | 
| Grand Total | Total amount of document | The Grand Total displays the total amount including Tax and Freight in document currency | [c_invoice](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_invoice.html).GrandTotal<small> numeric <br/> Amount</small> | 
| Order | Order | The Order is a control document.  The  Order is complete when the quantity ordered is the same as the quantity shipped and invoiced.  When you close an order, unshipped (backordered) quantities are cancelled. | [c_invoice](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_invoice.html).C_Order_ID<small> numeric(10) <br/> Search</small> | 
| Invoice | Invoice Identifier | The Invoice Document. | [c_invoice](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_invoice.html).C_Invoice_ID<small> numeric(10) <br/> ID</small> | 


### Tab: Partner Payments

**[Created:** 27/07/2003 - **Updated:** 02/01/2000 **]**   
**Description:** Business Partner Payments  
**Help:**   
**Tab Level:** 1

Table 50: Partner Payments - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Prepayment | The Payment/Receipt is a Prepayment | Payments not allocated to an invoice with a charge are posted to Unallocated Payments. When setting this flag, the payment is posted to the Customer or Vendor Prepayment account. | [c_payment](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_payment.html).IsPrepayment<small> character(1) <br/> Yes-No</small> | 
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_payment](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_payment.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_payment](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_payment.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Document Type | Document type or rules | The Document Type determines document sequence and processing rules | [c_payment](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_payment.html).C_DocType_ID<small> numeric(10) <br/> Table Direct</small> | 
| Document No | Document sequence number of the document | The document number is usually automatically generated by the system and determined by the document type of the document. If the document is not saved, the preliminary number is displayed in &quot;&quot;.If the document type of your document has no automatic document sequence defined, the field is empty if you create a new document. This is for documents which usually have an external number (like vendor invoice).  If you leave the field empty, the system will generate a document number for you. The document sequence used for this fallback number is defined in the &quot;Maintain Sequence&quot; window with the name &quot;DocumentNo_&quot;, where TableName is the actual name of the table (e.g. C_Order). | [c_payment](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_payment.html).DocumentNo<small> character varying(30) <br/> String</small> | 
| Document Status | The current status of the document | The Document Status indicates the status of a document at this time.  If you want to change the document status, use the Document Action field | [c_payment](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_payment.html).DocStatus<small> character(2) <br/> List</small> | 
| Self-Service | This is a Self-Service entry or this entry can be changed via Self-Service | Self-Service allows users to enter data or update their data.  The flag indicates, that this record was entered or created via Self-Service or that the user can change it via the Self-Service functionality. | [c_payment](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_payment.html).IsSelfService<small> character(1) <br/> Yes-No</small> | 
| Transaction Date | Transaction Date | The Transaction Date indicates the date of the transaction. | [c_payment](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_payment.html).DateTrx<small> timestamp without time zone <br/> Date</small> | 
| Bank Account | Account at the Bank | The Bank Account identifies an account at this Bank. | [c_payment](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_payment.html).C_BankAccount_ID<small> numeric(10) <br/> Table Direct</small> | 
| Online Access | Can be accessed online | The Online Access check box indicates if the application can be accessed via the web. | [c_payment](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_payment.html).IsOnline<small> character(1) <br/> Yes-No</small> | 
| Currency | The Currency for this record | Indicates the Currency to be used when processing or reporting on this record | [c_payment](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_payment.html).C_Currency_ID<small> numeric(10) <br/> Table Direct</small> | 
| Payment amount | Amount being paid | Indicates the amount this payment is for.  The payment amount can be for single or multiple invoices or a partial payment for an invoice. | [c_payment](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_payment.html).PayAmt<small> numeric <br/> Amount</small> | 
| Discount Amount | Calculated amount of discount | The Discount Amount indicates the discount amount for a document or line. | [c_payment](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_payment.html).DiscountAmt<small> numeric <br/> Amount</small> | 
| Write-off Amount | Amount to write-off | The Write Off Amount indicates the amount to be written off as uncollectible. | [c_payment](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_payment.html).WriteOffAmt<small> numeric <br/> Amount</small> | 
| Delayed Capture | Charge after Shipment | Delayed Capture is required, if you ship products.  The first credit card transaction is the Authorization, the second is the actual transaction after the shipment of the product. | [c_payment](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_payment.html).IsDelayedCapture<small> character(1) <br/> Yes-No</small> | 
| Invoice | Invoice Identifier | The Invoice Document. | [c_payment](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_payment.html).C_Invoice_ID<small> numeric(10) <br/> Search</small> | 
| Payment | Payment identifier | The Payment is a unique identifier of this payment. | [c_payment](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_payment.html).C_Payment_ID<small> numeric(10) <br/> ID</small> | 


### Tab: Partner Assets

**[Created:** 27/07/2003 - **Updated:** 02/01/2000 **]**   
**Description:** Business Partner Assets  
**Help:**   
**Tab Level:** 1

Table 60: Partner Assets - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [a_asset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [a_asset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Search Key | Search key for the record in the format required - must be unique | A search key allows you a fast method of finding a particular record.If you leave the search key empty, the system automatically creates a numeric number.  The document sequence used for this fallback number is defined in the &quot;Maintain Sequence&quot; window with the name &quot;DocumentNo_&quot;, where TableName is the actual name of the table (e.g. C_Order). | [a_asset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset.html).Value<small> character varying(40) <br/> String</small> | 
| Asset Group | Group of Assets | The group of assets determines default accounts.  If an asset group is selected in the product category, assets are created when delivering the asset. | [a_asset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset.html).A_Asset_Group_ID<small> numeric(10) <br/> Search</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [a_asset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [a_asset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset.html).Description<small> character varying(255) <br/> String</small> | 
| Product | Product, Service, Item | Identifies an item which is either purchased or sold in this organization. | [a_asset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset.html).M_Product_ID<small> numeric(10) <br/> Search</small> | 
| Attribute Set Instance | Product Attribute Set Instance | The values of the actual Product Attribute Instances.  The product level attributes are defined on Product level. | [a_asset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset.html).M_AttributeSetInstance_ID<small> numeric(10) <br/> Product Attribute</small> | 
| Lot No | Lot number (alphanumeric) | The Lot Number indicates the specific lot that a product was part of. | [a_asset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset.html).Lot<small> character varying(255) <br/> String</small> | 
| Serial No | Product Serial Number | The Serial Number identifies a tracked, warranted product.  It can only be used when the quantity is 1. | [a_asset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset.html).SerNo<small> character varying(255) <br/> String</small> | 
| Quantity | Quantity | The Quantity indicates the number of a specific product or item for this document. | [a_asset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset.html).Qty<small> numeric <br/> Quantity</small> | 
| In Service Date | Date when Asset was put into service | The date when the asset was put into service - usually used as start date for depreciation. | [a_asset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset.html).AssetServiceDate<small> timestamp without time zone <br/> Date</small> | 
| Guarantee Date | Date when guarantee expires | Date when the normal guarantee or availability expires | [a_asset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset.html).GuaranteeDate<small> timestamp without time zone <br/> Date</small> | 


### Tab: Partner Requests

**[Created:** 27/07/2003 - **Updated:** 02/01/2000 **]**   
**Description:** Business Partner Requests  
**Help:**   
**Tab Level:** 1

Table 70: Partner Requests - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [r_request](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_request.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [r_request](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_request.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Request Type | Type of request (e.g. Inquiry, Complaint, ..) | Request Types are used for processing and categorizing requests. Options are Account Inquiry, Warranty Issue, etc. | [r_request](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_request.html).R_RequestType_ID<small> numeric(10) <br/> Table Direct</small> | 
| Document No | Document sequence number of the document | The document number is usually automatically generated by the system and determined by the document type of the document. If the document is not saved, the preliminary number is displayed in &quot;&quot;.If the document type of your document has no automatic document sequence defined, the field is empty if you create a new document. This is for documents which usually have an external number (like vendor invoice).  If you leave the field empty, the system will generate a document number for you. The document sequence used for this fallback number is defined in the &quot;Maintain Sequence&quot; window with the name &quot;DocumentNo_&quot;, where TableName is the actual name of the table (e.g. C_Order). | [r_request](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_request.html).DocumentNo<small> character varying(30) <br/> String</small> | 
| Group | Request Group | Group of requests (e.g. version numbers, responsibility, ...) | [r_request](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_request.html).R_Group_ID<small> numeric(10) <br/> Table Direct</small> | 
| Category | Request Category | Category or Topic of the Request | [r_request](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_request.html).R_Category_ID<small> numeric(10) <br/> Table Direct</small> | 
| Status | Request Status | Status if the request (open, closed, investigating, ..) | [r_request](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_request.html).R_Status_ID<small> numeric(10) <br/> Table Direct</small> | 
| Resolution | Request Resolution | Resolution status (e.g. Fixed, Rejected, ..) | [r_request](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_request.html).R_Resolution_ID<small> numeric(10) <br/> Table Direct</small> | 
| Priority | Indicates if this request is of a high, medium or low priority. | The Priority indicates the importance of this request. | [r_request](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_request.html).Priority<small> character(1) <br/> List</small> | 
| User Importance | Priority of the issue for the User |  | [r_request](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_request.html).PriorityUser<small> character(1) <br/> List</small> | 
| Sales Representative | Sales Representative or Company Agent | The Sales Representative indicates the Sales Rep for this Region.  Any Sales Rep must be a valid internal user. | [r_request](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_request.html).SalesRep_ID<small> numeric(10) <br/> Table</small> | 
| Summary | Textual summary of this request | The Summary allows free form text entry of a recap of this request. | [r_request](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_request.html).Summary<small> character varying(2000) <br/> Text</small> | 
| Date Last Action | Date this request was last acted on | The Date Last Action indicates that last time that the request was acted on. | [r_request](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_request.html).DateLastAction<small> timestamp without time zone <br/> Date+Time</small> | 
| Last Result | Result of last contact | The Last Result identifies the result of the last contact made. | [r_request](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_request.html).LastResult<small> character varying(2000) <br/> String</small> | 
| Due type | Status of the next action for this Request | The Due Type indicates if this request is Due, Overdue or Scheduled. | [r_request](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_request.html).DueType<small> character(1) <br/> List</small> | 
| Date Next Action | Date that this request should be acted on | The Date Next Action indicates the next scheduled date for an action to occur for this request. | [r_request](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_request.html).DateNextAction<small> timestamp without time zone <br/> Date+Time</small> | 


