# Window: Project (Lines/Issues)

**[Created:** 10/07/2003 - **Updated:** 15/01/2024 **]**  
**Description:** Maintain Sales Order and Work Order Details  
**Help:** The Project Window is used to maintain details of Projects Lines and Issues across Phases/Tasks  
![](/img/docs/manual/ProjectLinesIssues-Window_iDempiere_v12.0.0.png)

### Tab: Project

**[Created:** 10/07/2003 - **Updated:** 26/03/2006 **]**   
**Description:** Maintain Sales Order Projects and Work Orders  
**Help:** The Project Tab is used to define the Value, Name and Description for each project.  It also is defines the tracks the amounts assigned to, committed to and used for this project.  
**Tab Level:** 0

Table 10: Project - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_project](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_project.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_project](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_project.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Search Key | Search key for the record in the format required - must be unique | A search key allows you a fast method of finding a particular record.If you leave the search key empty, the system automatically creates a numeric number.  The document sequence used for this fallback number is defined in the &quot;Maintain Sequence&quot; window with the name &quot;DocumentNo_&quot;, where TableName is the actual name of the table (e.g. C_Order). | [c_project](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_project.html).Value<small> character varying(40) <br/> String</small> | 
| Sales Representative | Sales Representative or Company Agent | The Sales Representative indicates the Sales Rep for this Region.  Any Sales Rep must be a valid internal user. | [c_project](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_project.html).SalesRep_ID<small> numeric(10) <br/> Table</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [c_project](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_project.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_project](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_project.html).Description<small> character varying(255) <br/> Text</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_project](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_project.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Summary Level | This is a summary entity | A summary entity represents a branch in a tree rather than an end-node. Summary entities are used for reporting and do not have own values. | [c_project](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_project.html).IsSummary<small> character(1) <br/> Yes-No</small> | 
| Note | Optional additional user defined information | The Note field allows for optional entry of user defined information regarding this record | [c_project](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_project.html).Note<small> character varying(2000) <br/> Text</small> | 
| Set Project Type | Set Project Type and for Service Projects copy Phases and Tasks of Project Type into Project |  | [c_project](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_project.html).C_ProjectType_ID<small> numeric(10) <br/> Button</small> | 
| Standard Phase | Standard Phase of the Project Type | Phase of the project with standard performance information with standard work | [c_project](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_project.html).C_Phase_ID<small> numeric(10) <br/> Table Direct</small> | 
| Contract Date | The (planned) effective date of this document. | The contract date is used to determine when the document becomes effective. This is usually the contract date.  The contract date is used in reports and report parameters. | [c_project](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_project.html).DateContract<small> timestamp without time zone <br/> Date</small> | 
| Finish Date | Finish or (planned) completion date | The finish date is used to indicate when the project is expected to be completed or has been completed. | [c_project](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_project.html).DateFinish<small> timestamp without time zone <br/> Date</small> | 
| Business Partner | Identifies a Business Partner | A Business Partner is anyone with whom you transact.  This can include Vendor, Customer, Employee or Salesperson | [c_project](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_project.html).C_BPartner_ID<small> numeric(10) <br/> Search</small> | 
| BPartner (Agent) | Business Partner (Agent or Sales Rep) |  | [c_project](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_project.html).C_BPartnerSR_ID<small> numeric(10) <br/> Search</small> | 
| Partner Location | Identifies the (ship to) address for this Business Partner | The Partner address indicates the location of a Business Partner | [c_project](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_project.html).C_BPartner_Location_ID<small> numeric(10) <br/> Table Direct</small> | 
| User/Contact | User within the system - Internal or Business Partner Contact | The User identifies a unique user in the system. This could be an internal user or a business partner contact | [c_project](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_project.html).AD_User_ID<small> numeric(10) <br/> Table Direct</small> | 
| Payment Term | The terms of Payment (timing, discount) | Payment Terms identify the method and timing of payment. | [c_project](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_project.html).C_PaymentTerm_ID<small> numeric(10) <br/> Table Direct</small> | 
| Order Reference | Transaction Reference Number (Sales Order, Purchase Order) of your Business Partner | The business partner order reference is the order reference for this specific transaction; Often Purchase Order numbers are given to print on Invoices for easier reference.  A standard number can be defined in the Business Partner (Customer) window. | [c_project](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_project.html).POReference<small> character varying(20) <br/> String</small> | 
| Warehouse | Storage Warehouse and Service Point | The Warehouse identifies a unique Warehouse where products are stored or Services are provided. | [c_project](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_project.html).M_Warehouse_ID<small> numeric(10) <br/> Table Direct</small> | 
| Campaign | Marketing Campaign | The Campaign defines a unique marketing program.  Projects can be associated with a pre defined Marketing Campaign.  You can then report based on a specific Campaign. | [c_project](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_project.html).C_Campaign_ID<small> numeric(10) <br/> Table Direct</small> | 
| Price List Version | Identifies a unique instance of a Price List | Each Price List can have multiple versions.  The most common use is to indicate the dates that a Price List is valid for. | [c_project](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_project.html).M_PriceList_Version_ID<small> numeric(10) <br/> Table Direct</small> | 
| Currency | The Currency for this record | Indicates the Currency to be used when processing or reporting on this record | [c_project](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_project.html).C_Currency_ID<small> numeric(10) <br/> Table Direct</small> | 
| Planned Amount | Planned amount for this project | The Planned Amount indicates the anticipated amount for this project or project line. | [c_project](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_project.html).PlannedAmt<small> numeric <br/> Amount</small> | 
| Planned Quantity | Planned quantity for this project | The Planned Quantity indicates the anticipated quantity for this project or project line | [c_project](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_project.html).PlannedQty<small> numeric <br/> Quantity</small> | 
| Planned Margin | Project&#x27;s planned margin amount | The Planned Margin Amount indicates the anticipated margin amount for this project or project line. | [c_project](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_project.html).PlannedMarginAmt<small> numeric <br/> Amount</small> | 
| Invoice Rule | Invoice Rule for the project | The Invoice Rule for the project determines how orders (and consequently invoices) are created.  The selection on project level can be overwritten on Phase or Task | [c_project](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_project.html).ProjInvoiceRule<small> character(1) <br/> List</small> | 
| Committed Amount | The (legal) commitment amount | The commitment amount is independent from the planned amount. You would use the planned amount for your realistic estimation, which might be higher or lower than the commitment amount. | [c_project](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_project.html).CommittedAmt<small> numeric <br/> Amount</small> | 
| Committed Quantity | The (legal) commitment Quantity | The commitment amount is independent from the planned amount. You would use the planned amount for your realistic estimation, which might be higher or lower than the commitment amount. | [c_project](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_project.html).CommittedQty<small> numeric <br/> Quantity</small> | 
| Invoiced Amount | The amount invoiced | The amount invoiced | [c_project](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_project.html).InvoicedAmt<small> numeric <br/> Amount</small> | 
| Quantity Invoiced | The quantity invoiced |  | [c_project](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_project.html).InvoicedQty<small> numeric <br/> Quantity</small> | 
| Project Balance | Total Project Balance | The project balance is the sum of all invoices and payments | [c_project](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_project.html).ProjectBalanceAmt<small> numeric <br/> Amount</small> | 
| Copy Details | Copy Lines/Phases/Tasks from other Project |  | [c_project](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_project.html).CopyFrom<small> character(1) <br/> Button</small> | 
| Generate Order | Generate Order from Project | The Generate Order process will generate a new Order document based on the project phase. A price list and warehouse/service point must be defined on the project. | [c_project](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_project.html).GenerateTo<small> character(1) <br/> Button</small> | 
| Close Project |  |  | [c_project](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_project.html).Processing<small> character(1) <br/> Button</small> | 


### Tab: Line

**[Created:** 11/03/2001 - **Updated:** 02/09/2005 **]**   
**Description:** Define Project Lines  
**Help:** The Project Lines Tab is used to define the lines (products and/or services) associated with this Project. This is an alternative to Project Phases. You would use lines, if you do not want to use a Project Type template with phases.  
**Tab Level:** 1

Table 20: Line - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_projectline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projectline.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_projectline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projectline.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Project | Financial Project | A Project allows you to track and control internal or external activities. | [c_projectline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projectline.html).C_Project_ID<small> numeric(10) <br/> Table Direct</small> | 
| Project Phase | Phase of a Project |  | [c_projectline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projectline.html).C_ProjectPhase_ID<small> numeric(10) <br/> Table Direct</small> | 
| Project Task | Actual Project Task in a Phase | A Project Task in a Project Phase represents the actual work. | [c_projectline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projectline.html).C_ProjectTask_ID<small> numeric(10) <br/> Table Direct</small> | 
| Line No | Unique line for this document | Indicates the unique line for a document.  It will also control the display order of the lines within a document. | [c_projectline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projectline.html).Line<small> numeric(10) <br/> Integer</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_projectline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projectline.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_projectline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projectline.html).Description<small> character varying(255) <br/> Text</small> | 
| Product | Product, Service, Item | Identifies an item which is either purchased or sold in this organization. | [c_projectline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projectline.html).M_Product_ID<small> numeric(10) <br/> Search</small> | 
| Product Category | Category of a Product | Identifies the category which this product belongs to.  Product categories are used for pricing and selection. | [c_projectline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projectline.html).M_Product_Category_ID<small> numeric(10) <br/> Table Direct</small> | 
| Planned Price | Planned price for this project line | The Planned Price indicates the anticipated price for this project line. | [c_projectline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projectline.html).PlannedPrice<small> numeric <br/> Costs+Prices</small> | 
| Planned Quantity | Planned quantity for this project | The Planned Quantity indicates the anticipated quantity for this project or project line | [c_projectline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projectline.html).PlannedQty<small> numeric <br/> Quantity</small> | 
| Get Price | Get Price for Project Line based on Project Price List |  | [c_projectline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projectline.html).DoPricing<small> character(1) <br/> Button</small> | 
| Planned Amount | Planned amount for this project | The Planned Amount indicates the anticipated amount for this project or project line. | [c_projectline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projectline.html).PlannedAmt<small> numeric <br/> Amount</small> | 
| Printed | Indicates if this document / line is printed | The Printed checkbox indicates if this document or line will included when printing. | [c_projectline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projectline.html).IsPrinted<small> character(1) <br/> Yes-No</small> | 
| Planned Margin | Project&#x27;s planned margin amount | The Planned Margin Amount indicates the anticipated margin amount for this project or project line. | [c_projectline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projectline.html).PlannedMarginAmt<small> numeric <br/> Amount</small> | 
| Committed Amount | The (legal) commitment amount | The commitment amount is independent from the planned amount. You would use the planned amount for your realistic estimation, which might be higher or lower than the commitment amount. | [c_projectline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projectline.html).CommittedAmt<small> numeric <br/> Amount</small> | 
| Committed Quantity | The (legal) commitment Quantity | The commitment amount is independent from the planned amount. You would use the planned amount for your realistic estimation, which might be higher or lower than the commitment amount. | [c_projectline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projectline.html).CommittedQty<small> numeric <br/> Quantity</small> | 
| Invoiced Amount | The amount invoiced | The amount invoiced | [c_projectline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projectline.html).InvoicedAmt<small> numeric <br/> Amount</small> | 
| Quantity Invoiced | The quantity invoiced |  | [c_projectline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projectline.html).InvoicedQty<small> numeric <br/> Quantity</small> | 
| Order | Order | The Order is a control document.  The  Order is complete when the quantity ordered is the same as the quantity shipped and invoiced.  When you close an order, unshipped (backordered) quantities are cancelled. | [c_projectline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projectline.html).C_Order_ID<small> numeric(10) <br/> Search</small> | 
| Purchase Order | Purchase Order |  | [c_projectline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projectline.html).C_OrderPO_ID<small> numeric(10) <br/> Search</small> | 
| Project Issue | Project Issues (Material, Labor) | Issues to the project initiated by the &quot;Issue to Project&quot; process. You can issue Receipts, Time and Expenses, or Stock. | [c_projectline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projectline.html).C_ProjectIssue_ID<small> numeric(10) <br/> Table Direct</small> | 
| Processed | The document has been processed | The Processed checkbox indicates that a document has been processed. | [c_projectline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projectline.html).Processed<small> character(1) <br/> Yes-No</small> | 


### Tab: Issues

**[Created:** 02/09/2003 - **Updated:** 17/08/2021 **]**   
**Description:** Issues to the Project  
**Help:** The lab lists the Issues to the project initiated by the &quot;Issue to Project&quot; process. You can issue Receipts, Time and Expenses, or Stock.  
**Tab Level:** 1

Table 30: Issues - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_projectissue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projectissue.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_projectissue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projectissue.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Project | Financial Project | A Project allows you to track and control internal or external activities. | [c_projectissue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projectissue.html).C_Project_ID<small> numeric(10) <br/> Table Direct</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_projectissue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projectissue.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Line No | Unique line for this document | Indicates the unique line for a document.  It will also control the display order of the lines within a document. | [c_projectissue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projectissue.html).Line<small> numeric(10) <br/> Integer</small> | 
| Movement Date | Date a product was moved in or out of inventory | The Movement Date indicates the date that a product moved in or out of inventory.  This is the result of a shipment, receipt or inventory movement. | [c_projectissue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projectissue.html).MovementDate<small> timestamp without time zone <br/> Date</small> | 
| Product | Product, Service, Item | Identifies an item which is either purchased or sold in this organization. | [c_projectissue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projectissue.html).M_Product_ID<small> numeric(10) <br/> Search</small> | 
| Attribute Set Instance | Product Attribute Set Instance | The values of the actual Product Attribute Instances.  The product level attributes are defined on Product level. | [c_projectissue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projectissue.html).M_AttributeSetInstance_ID<small> numeric(10) <br/> Product Attribute</small> | 
| Locator | Warehouse Locator | The Locator indicates where in a Warehouse a product is located. | [c_projectissue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projectissue.html).M_Locator_ID<small> numeric(10) <br/> Locator (WH)</small> | 
| Movement Quantity | Quantity of a product moved. | The Movement Quantity indicates the quantity of a product that has been moved. | [c_projectissue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projectissue.html).MovementQty<small> numeric <br/> Quantity</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_projectissue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projectissue.html).Description<small> character varying(255) <br/> Text</small> | 
| Shipment/Receipt Line | Line on Shipment or Receipt document | The Shipment/Receipt Line indicates a unique line in a Shipment/Receipt document | [c_projectissue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projectissue.html).M_InOutLine_ID<small> numeric(10) <br/> Search</small> | 
| Expense Line | Time and Expense Report Line |  | [c_projectissue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projectissue.html).S_TimeExpenseLine_ID<small> numeric(10) <br/> Search</small> | 
| Document Status | The current status of the document | The Document Status indicates the status of a document at this time.  If you want to change the document status, use the Document Action field | [c_projectissue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projectissue.html).DocStatus<small> character varying(2) <br/> List</small> | 
| Process Project Issue |  |  | [c_projectissue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projectissue.html).DocAction<small> character(2) <br/> Button</small> | 
| Processed | The document has been processed | The Processed checkbox indicates that a document has been processed. | [c_projectissue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projectissue.html).Processed<small> character(1) <br/> Yes-No</small> | 
| Posted | Posting status | The Posted field indicates the status of the Generation of General Ledger Accounting Lines | [c_projectissue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projectissue.html).Posted<small> character(1) <br/> Button</small> | 


### Tab: Accounting

**[Created:** 10/07/2003 - **Updated:** 26/03/2006 **]**   
**Description:** Define Project Accounting  
**Help:** The Accounting Tab is used to define the Asset Account to use when a project is completed and the associated asset realized.  
**Tab Level:** 1

Table 40: Accounting - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_project_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_project_acct.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_project_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_project_acct.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Project | Financial Project | A Project allows you to track and control internal or external activities. | [c_project_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_project_acct.html).C_Project_ID<small> numeric(10) <br/> Table Direct</small> | 
| Accounting Schema | Rules for accounting | An Accounting Schema defines the rules used in accounting such as costing method, currency and calendar | [c_project_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_project_acct.html).C_AcctSchema_ID<small> numeric(10) <br/> Table Direct</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_project_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_project_acct.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Project Asset | Project Asset Account | The Project Asset account is the account used as the final asset account in capital projects | [c_project_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_project_acct.html).PJ_Asset_Acct<small> numeric(10) <br/> Account</small> | 
| Work In Progress | Account for Work in Progress | The Work in Process account is the account used in capital projects until the project is completed | [c_project_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_project_acct.html).PJ_WIP_Acct<small> numeric(10) <br/> Account</small> | 


