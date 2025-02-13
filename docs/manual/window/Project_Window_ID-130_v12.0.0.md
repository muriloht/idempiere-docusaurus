# Window: Project

**[Created:** 29/06/1999 - **Updated:** 30/06/2021 **]**  
**Description:** Maintain Projects  
**Help:** The Project Window is used to define the projects which will can be tracked by phases and tasks.  
![](/img/docs/manual/Project-Window_iDempiere_v12.0.0.png)

### Tab: Project

**[Created:** 29/06/1999 - **Updated:** 26/03/2006 **]**   
**Description:** Define Project  
**Help:** The Project Tab is used to define the Value, Name and Description for each project.  It also is defines the tracks the amounts assigned to, committed to and used for this project. Note that when the project Type is changed, the Phases and Tasks are re-created.  
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
| Line Level | Project Line Level | Level on which Project Lines are maintained | [c_project](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_project.html).ProjectLineLevel<small> character(1) <br/> List</small> | 
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
| Trx Organization | Performing or initiating organization | The organization which performs or initiates this transaction (for another organization).  The owning Organization may not be the transaction organization in a service bureau environment, with centralized services, and inter-organization transactions. | [c_project](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_project.html).AD_OrgTrx_ID<small> numeric(10) <br/> Table</small> | 
| Activity | Business Activity | Activities indicate tasks that are performed and used to utilize Activity based Costing | [c_project](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_project.html).C_Activity_ID<small> numeric(10) <br/> Table Direct</small> | 
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
| Close Project |  |  | [c_project](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_project.html).Processing<small> character(1) <br/> Button</small> | 


### Tab: Project Line

**[Created:** 26/03/2006 - **Updated:** 30/09/2009 **]**   
**Description:** Maintain Project Lines  
**Help:** Maintain Project Level Lines  
**Tab Level:** 1

Table 15: Project Line - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_projectline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projectline.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_projectline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projectline.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Project | Financial Project | A Project allows you to track and control internal or external activities. | [c_projectline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projectline.html).C_Project_ID<small> numeric(10) <br/> Table Direct</small> | 
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
| Production | Plan for producing a product | The Production uniquely identifies a Production Plan | [c_projectline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projectline.html).M_Production_ID<small> numeric(10) <br/> Search</small> | 


### Tab: Phase

**[Created:** 28/05/2003 - **Updated:** 26/03/2006 **]**   
**Description:** Maintain Actual Project Phase  
**Help:** Actual Phase of the Project with Status information - generated from Phase of Project Type.  
**Tab Level:** 1

Table 20: Phase - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_projectphase](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projectphase.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_projectphase](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projectphase.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Project | Financial Project | A Project allows you to track and control internal or external activities. | [c_projectphase](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projectphase.html).C_Project_ID<small> numeric(10) <br/> Table Direct</small> | 
| Standard Phase | Standard Phase of the Project Type | Phase of the project with standard performance information with standard work | [c_projectphase](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projectphase.html).C_Phase_ID<small> numeric(10) <br/> Table Direct</small> | 
| Sequence | Method of ordering records; lowest number comes first | The Sequence indicates the order of records | [c_projectphase](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projectphase.html).SeqNo<small> numeric(10) <br/> Integer</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [c_projectphase](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projectphase.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_projectphase](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projectphase.html).Description<small> character varying(255) <br/> Text</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [c_projectphase](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projectphase.html).Help<small> character varying(2000) <br/> Text</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_projectphase](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projectphase.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Complete | It is complete | Indication that this is complete | [c_projectphase](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projectphase.html).IsComplete<small> character(1) <br/> Yes-No</small> | 
| Start Date | First effective day (inclusive) | The Start Date indicates the first or starting date | [c_projectphase](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projectphase.html).StartDate<small> timestamp without time zone <br/> Date</small> | 
| End Date | Last effective date (inclusive) | The End Date indicates the last date in this range. | [c_projectphase](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projectphase.html).EndDate<small> timestamp without time zone <br/> Date</small> | 
| Invoice Rule | Invoice Rule for the project | The Invoice Rule for the project determines how orders (and consequently invoices) are created.  The selection on project level can be overwritten on Phase or Task | [c_projectphase](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projectphase.html).ProjInvoiceRule<small> character(1) <br/> List</small> | 
| Planned Amount | Planned amount for this project | The Planned Amount indicates the anticipated amount for this project or project line. | [c_projectphase](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projectphase.html).PlannedAmt<small> numeric <br/> Amount</small> | 
| Product | Product, Service, Item | Identifies an item which is either purchased or sold in this organization. | [c_projectphase](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projectphase.html).M_Product_ID<small> numeric(10) <br/> Search</small> | 
| Quantity | Quantity | The Quantity indicates the number of a specific product or item for this document. | [c_projectphase](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projectphase.html).Qty<small> numeric <br/> Quantity</small> | 
| Committed Amount | The (legal) commitment amount | The commitment amount is independent from the planned amount. You would use the planned amount for your realistic estimation, which might be higher or lower than the commitment amount. | [c_projectphase](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projectphase.html).CommittedAmt<small> numeric <br/> Amount</small> | 
| Generate Order | Generate Order from Project Phase | The Generate Order process will generate a new Order document based on the project phase or tasks. A price list and warehouse/service point must be defined on the project.  If a product is defined on phase level, the Phase information is used as the basis for the Order (milestone invoicing) - otherwise the individual tasks. | [c_projectphase](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projectphase.html).GenerateOrder<small> character(1) <br/> Button</small> | 
| Order | Order | The Order is a control document.  The  Order is complete when the quantity ordered is the same as the quantity shipped and invoiced.  When you close an order, unshipped (backordered) quantities are cancelled. | [c_projectphase](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projectphase.html).C_Order_ID<small> numeric(10) <br/> Search</small> | 


### Tab: Phase Line

**[Created:** 26/03/2006 - **Updated:** 30/09/2009 **]**   
**Description:** Project Lines of Phase  
**Help:** Maintain Project Lines on Phase Level  
**Tab Level:** 2

Table 25: Phase Line - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_projectline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projectline.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_projectline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projectline.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Project Phase | Phase of a Project |  | [c_projectline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projectline.html).C_ProjectPhase_ID<small> numeric(10) <br/> Table Direct</small> | 
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
| Production | Plan for producing a product | The Production uniquely identifies a Production Plan | [c_projectline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projectline.html).M_Production_ID<small> numeric(10) <br/> Search</small> | 


### Tab: Task

**[Created:** 01/06/2003 - **Updated:** 26/03/2006 **]**   
**Description:** Actual Project Task  
**Help:** A Project Task in a Project Phase represents the actual work.  
**Tab Level:** 2

Table 30: Task - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_projecttask](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projecttask.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_projecttask](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projecttask.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Project Phase | Phase of a Project |  | [c_projecttask](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projecttask.html).C_ProjectPhase_ID<small> numeric(10) <br/> Table Direct</small> | 
| Standard Task | Standard Project Type Task | Standard Project Task in a Project Phase with standard effort | [c_projecttask](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projecttask.html).C_Task_ID<small> numeric(10) <br/> Table Direct</small> | 
| Sequence | Method of ordering records; lowest number comes first | The Sequence indicates the order of records | [c_projecttask](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projecttask.html).SeqNo<small> numeric(10) <br/> Integer</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [c_projecttask](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projecttask.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_projecttask](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projecttask.html).Description<small> character varying(255) <br/> Text</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [c_projecttask](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projecttask.html).Help<small> character varying(2000) <br/> Text</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_projecttask](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projecttask.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Invoice Rule | Invoice Rule for the project | The Invoice Rule for the project determines how orders (and consequently invoices) are created.  The selection on project level can be overwritten on Phase or Task | [c_projecttask](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projecttask.html).ProjInvoiceRule<small> character(1) <br/> List</small> | 
| Planned Amount | Planned amount for this project | The Planned Amount indicates the anticipated amount for this project or project line. | [c_projecttask](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projecttask.html).PlannedAmt<small> numeric <br/> Amount</small> | 
| Product | Product, Service, Item | Identifies an item which is either purchased or sold in this organization. | [c_projecttask](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projecttask.html).M_Product_ID<small> numeric(10) <br/> Search</small> | 
| Quantity | Quantity | The Quantity indicates the number of a specific product or item for this document. | [c_projecttask](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projecttask.html).Qty<small> numeric <br/> Quantity</small> | 
| Committed Amount | The (legal) commitment amount | The commitment amount is independent from the planned amount. You would use the planned amount for your realistic estimation, which might be higher or lower than the commitment amount. | [c_projecttask](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projecttask.html).CommittedAmt<small> numeric <br/> Amount</small> | 


### Tab: Task Line

**[Created:** 26/03/2006 - **Updated:** 30/09/2009 **]**   
**Description:** Project Lines of Tasks  
**Help:** Maintain Project Lines of Tasks  
**Tab Level:** 3

Table 40: Task Line - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_projectline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projectline.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_projectline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projectline.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
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
| Production | Plan for producing a product | The Production uniquely identifies a Production Plan | [c_projectline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projectline.html).M_Production_ID<small> numeric(10) <br/> Search</small> | 


### Tab: Accounting

**[Created:** 26/09/1999 - **Updated:** 26/03/2006 **]**   
**Description:** Define Project Accounting  
**Help:** The Accounting Tab is used to define the Asset Account to use when a project is completed and the associated asset realized.  
**Tab Level:** 1

Table 50: Accounting - Fields 

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


