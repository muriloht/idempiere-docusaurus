# Window: Customer

**[Created:** 25/08/2013 - **Updated:** 12/09/2013 **]**  
**Description:**   
**Help:**   
![](/img/docs/manual/Customer-Window_iDempiere_v12.0.0.png)

### Tab: Customer

**[Created:** 25/08/2013 - **Updated:** 25/08/2013 **]**   
**Description:** Customer information  
**Help:**   
**Tab Level:** 0

Table 10: Customer - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Search Key | Search key for the record in the format required - must be unique | A search key allows you a fast method of finding a particular record.If you leave the search key empty, the system automatically creates a numeric number.  The document sequence used for this fallback number is defined in the &quot;Maintain Sequence&quot; window with the name &quot;DocumentNo_&quot;, where TableName is the actual name of the table (e.g. C_Order). | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).Value<small> character varying(40) <br/> String</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).Name<small> character varying(120) <br/> String</small> | 
| Name 2 | Additional Name |  | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).Name2<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Customer | Indicates if this Business Partner is a Customer | The Customer checkbox indicates if this Business Partner is a customer.  If it is select additional fields will display which further define this customer. | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).IsCustomer<small> character(1) <br/> Yes-No</small> | 
| Credit Status | Business Partner Credit Status | Credit Management is inactive if Credit Status is No Credit Check, Credit Stop or if the Credit Limit is 0.If active, the status is set automatically set to Credit Hold, if the Total Open Balance (including Vendor activities)  is higher then the Credit Limit. It is set to Credit Watch, if above 90% of the Credit Limit and Credit OK otherwise. | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).SOCreditStatus<small> character(1) <br/> List</small> | 
| Open Balance | Total Open Balance Amount in primary Accounting Currency | The Total Open Balance Amount is the calculated open item amount for Customer and Vendor activity.  If the Balance is below zero, we owe the Business Partner.  The amount is used for Credit Management.Invoices and Payment Allocations determine the Open Balance (i.e. not Orders or Payments). | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).TotalOpenBalance<small> numeric <br/> Amount</small> | 
| Credit Limit | Total outstanding invoice amounts allowed | The Credit Limit indicates the total amount allowed &quot;on account&quot; in primary accounting currency.  If the Credit Limit is 0, no check is performed.  Credit Management is based on the Total Open Amount, which includes Vendor activities. | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).SO_CreditLimit<small> numeric <br/> Amount</small> | 
| Credit Used | Current open balance | The Credit Used indicates the total amount of open or unpaid invoices in primary accounting currency for the Business Partner. Credit Management is based on the Total Open Amount, which includes Vendor activities. | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).SO_CreditUsed<small> numeric <br/> Amount</small> | 
| Tax ID | Tax Identification | The Tax ID field identifies the legal Identification number of this Entity. | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).TaxID<small> character varying(20) <br/> String</small> | 
| SO Tax exempt | Business partner is exempt from tax on sales | If a business partner is exempt from tax on sales, the exempt tax rate is used. For this, you need to set up a tax rate with a 0% rate and indicate that this is your tax exempt rate.  This is required for tax reporting, so that you can track tax exempt transactions. | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).IsTaxExempt<small> character(1) <br/> Yes-No</small> | 
| PO Tax exempt | Business partner is exempt from tax on purchases | If a business partner is exempt from tax on purchases, the exempt tax rate is used. For this, you need to set up a tax rate with a 0% rate and indicate that this is your tax exempt rate.  This is required for tax reporting, so that you can track tax exempt transactions. | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).IsPOTaxExempt<small> character(1) <br/> Yes-No</small> | 
| D-U-N-S | Dun &amp; Bradstreet Number | Used for EDI - For details see   www.dnb.com/dunsno/list.htm | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).DUNS<small> character varying(11) <br/> String</small> | 
| Reference No | Your customer or vendor number at the Business Partner&#x27;s site | The reference number can be printed on orders and invoices to allow your business partner to faster identify your records. | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).ReferenceNo<small> character varying(40) <br/> String</small> | 
| NAICS/SIC | Standard Industry Code or its successor NAIC - http://www.osha.gov/oshstats/sicser.html | The NAICS/SIC identifies either of these codes that may be applicable to this Business Partner. | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).NAICS<small> character varying(6) <br/> String</small> | 
| Rating | Classification or Importance | The Rating is used to differentiate the importance | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).Rating<small> character(1) <br/> String</small> | 
| Business Partner Group | Business Partner Group | The Business Partner Group provides a method of defining defaults to be used for individual Business Partners. | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).C_BP_Group_ID<small> numeric(10) <br/> Table Direct</small> | 
| Language | Language for this Business Partner if Multi-Language enabled | The Language identifies the language to use for display and formatting documents. It requires, that on Tenant level, Multi-Lingual documents are selected and that you have created/loaded the language. | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).AD_Language<small> character varying(6) <br/> Table</small> | 
| Sales Representative | Sales Representative or Company Agent | The Sales Representative indicates the Sales Rep for this Region.  Any Sales Rep must be a valid internal user. | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).SalesRep_ID<small> numeric(10) <br/> Table</small> | 
| URL | Full URL address - e.g. http://www.idempiere.org | The URL defines an fully qualified web address like http://www.idempiere.org | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).URL<small> character varying(120) <br/> URL</small> | 
| Prospect | Indicates this is a Prospect | The Prospect checkbox indicates an entity that is an active prospect. | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).IsProspect<small> character(1) <br/> Yes-No</small> | 
| Potential Life Time Value | Total Revenue expected | The Potential Life Time Value is the anticipated revenue in primary accounting currency to be generated by the Business Partner. | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).PotentialLifeTimeValue<small> numeric <br/> Amount</small> | 
| Actual Life Time Value | Actual Life Time Revenue | The Actual Life Time Value is the recorded revenue in primary accounting currency generated by the Business Partner. | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).ActualLifeTimeValue<small> numeric <br/> Amount</small> | 
| Acquisition Cost | The cost of gaining the prospect as a customer | The Acquisition Cost identifies the cost associated with making this prospect a customer. | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).AcqusitionCost<small> numeric <br/> Costs+Prices</small> | 
| Employees | Number of employees | Indicates the number of employees for this Business Partner.  This field displays only for Prospects. | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).NumberEmployees<small> numeric(10) <br/> Integer</small> | 
| Share | Share of Customer&#x27;s business as a percentage | The Share indicates the percentage of this Business Partner&#x27;s volume of the products supplied. | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).ShareOfCustomer<small> numeric(10) <br/> Integer</small> | 
| Sales Volume in 1.000 | Total Volume of Sales in Thousands of Currency | The Sales Volume indicates the total volume of sales for a Business Partner. | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).SalesVolume<small> numeric(10) <br/> Integer</small> | 
| First Sale | Date of First Sale | The First Sale Date identifies the date of the first sale to this Business Partner | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).FirstSale<small> timestamp without time zone <br/> Date</small> | 
| Price List | Unique identifier of a Price List | Price Lists are used to determine the pricing, margin and cost of items purchased or sold. | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).M_PriceList_ID<small> numeric(10) <br/> Table Direct</small> | 
| Discount Schema | Schema to calculate the trade discount percentage | After calculation of the (standard) price, the trade discount percentage is calculated and applied resulting in the final price. | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).M_DiscountSchema_ID<small> numeric(10) <br/> Table</small> | 
| Flat Discount % | Flat discount percentage |  | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).FlatDiscount<small> numeric <br/> Number</small> | 
| Discount Printed | Print Discount on Invoice and Order | The Discount Printed Checkbox indicates if the discount will be printed on the document. | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).IsDiscountPrinted<small> character(1) <br/> Yes-No</small> | 
| Order Description | Description to be used on orders | The Order Description identifies the standard description to use on orders for this Customer. | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).SO_Description<small> character varying(255) <br/> String</small> | 
| Order Reference | Transaction Reference Number (Sales Order, Purchase Order) of your Business Partner | The business partner order reference is the order reference for this specific transaction; Often Purchase Order numbers are given to print on Invoices for easier reference.  A standard number can be defined in the Business Partner (Customer) window. | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).POReference<small> character varying(20) <br/> String</small> | 
| Document Copies | Number of copies to be printed | The Document Copies indicates the number of copies of each document that will be generated. | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).DocumentCopies<small> numeric(10) <br/> Integer</small> | 
| Delivery Rule | Defines the timing of Delivery | The Delivery Rule indicates when an order should be delivered. For example should the order be delivered when the entire order is complete, when a line is complete or as the products become available. | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).DeliveryRule<small> character(1) <br/> List</small> | 
| Delivery Via | How the order will be delivered | The Delivery Via indicates how the products should be delivered. For example, will the order be picked up or shipped. | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).DeliveryViaRule<small> character(1) <br/> List</small> | 
| Invoice Rule | Frequency and method of invoicing | The Invoice Rule defines how a Business Partner is invoiced and the frequency of invoicing. | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).InvoiceRule<small> character(1) <br/> List</small> | 
| Invoice Schedule | Schedule for generating Invoices | The Invoice Schedule identifies the frequency used when generating invoices. | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).C_InvoiceSchedule_ID<small> numeric(10) <br/> Table Direct</small> | 
| Invoice Print Format | Print Format for printing Invoices | You need to define a Print Format to print the document. | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).Invoice_PrintFormat_ID<small> numeric(10) <br/> Table</small> | 
| Payment Rule | How you pay the invoice | The Payment Rule indicates the method of invoice payment. | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).PaymentRule<small> character(1) <br/> List</small> | 
| Payment Term | The terms of Payment (timing, discount) | Payment Terms identify the method and timing of payment. | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).C_PaymentTerm_ID<small> numeric(10) <br/> Table</small> | 
| Dunning | Dunning Rules for overdue invoices | The Dunning indicates the rules and method of dunning for past due payments. | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).C_Dunning_ID<small> numeric(10) <br/> Table Direct</small> | 


### Tab: Opportunities

**[Created:** 25/08/2013 - **Updated:** 25/08/2013 **]**   
**Description:** Opportunities  
**Help:**   
**Tab Level:** 1

Table 15: Opportunities - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_opportunity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_opportunity.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_opportunity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_opportunity.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Document No | Document sequence number of the document | The document number is usually automatically generated by the system and determined by the document type of the document. If the document is not saved, the preliminary number is displayed in &quot;&quot;.If the document type of your document has no automatic document sequence defined, the field is empty if you create a new document. This is for documents which usually have an external number (like vendor invoice).  If you leave the field empty, the system will generate a document number for you. The document sequence used for this fallback number is defined in the &quot;Maintain Sequence&quot; window with the name &quot;DocumentNo_&quot;, where TableName is the actual name of the table (e.g. C_Order). | [c_opportunity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_opportunity.html).DocumentNo<small> character varying(60) <br/> String</small> | 
| Business Partner | Identifies a Business Partner | A Business Partner is anyone with whom you transact.  This can include Vendor, Customer, Employee or Salesperson | [c_opportunity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_opportunity.html).C_BPartner_ID<small> numeric(10) <br/> Search</small> | 
| User/Contact | User within the system - Internal or Business Partner Contact | The User identifies a unique user in the system. This could be an internal user or a business partner contact | [c_opportunity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_opportunity.html).AD_User_ID<small> numeric(10) <br/> Table Direct</small> | 
| Campaign | Marketing Campaign | The Campaign defines a unique marketing program.  Projects can be associated with a pre defined Marketing Campaign.  You can then report based on a specific Campaign. | [c_opportunity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_opportunity.html).C_Campaign_ID<small> numeric(10) <br/> Table Direct</small> | 
| Sales Representative | Sales Representative or Company Agent | The Sales Representative indicates the Sales Rep for this Region.  Any Sales Rep must be a valid internal user. | [c_opportunity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_opportunity.html).SalesRep_ID<small> numeric(10) <br/> Table</small> | 
| Sales Stage | Stages of the sales process | Define what stages your sales process will move through | [c_opportunity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_opportunity.html).C_SalesStage_ID<small> numeric(10) <br/> Table</small> | 
| Probability |  |  | [c_opportunity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_opportunity.html).Probability<small> numeric <br/> Amount</small> | 
| Expected Close | Expected Close | The Expected Close Date indicates the expected last or final date | [c_opportunity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_opportunity.html).ExpectedCloseDate<small> timestamp without time zone <br/> Date</small> | 
| Opportunity Amount | The estimated value of this opportunity. |  | [c_opportunity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_opportunity.html).OpportunityAmt<small> numeric <br/> Amount</small> | 
| Currency | The Currency for this record | Indicates the Currency to be used when processing or reporting on this record | [c_opportunity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_opportunity.html).C_Currency_ID<small> numeric(10) <br/> Table Direct</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_opportunity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_opportunity.html).Description<small> character varying(255) <br/> String</small> | 
| Comments | Comments or additional information | The Comments field allows for free form entry of additional information. | [c_opportunity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_opportunity.html).Comments<small> text <br/> Text</small> | 
| Order | Order | The Order is a control document.  The  Order is complete when the quantity ordered is the same as the quantity shipped and invoiced.  When you close an order, unshipped (backordered) quantities are cancelled. | [c_opportunity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_opportunity.html).C_Order_ID<small> numeric(10) <br/> Search</small> | 
| Close Date | Close Date | The Start Date indicates the last or final date | [c_opportunity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_opportunity.html).CloseDate<small> timestamp without time zone <br/> Date</small> | 
| Cost | Cost information |  | [c_opportunity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_opportunity.html).Cost<small> numeric <br/> Amount</small> | 


### Tab: Contacts

**[Created:** 25/08/2013 - **Updated:** 25/08/2013 **]**   
**Description:** Customer Contacts  
**Help:**   
**Tab Level:** 1

Table 20: Contacts - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Business Partner | Identifies a Business Partner | A Business Partner is anyone with whom you transact.  This can include Vendor, Customer, Employee or Salesperson | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).C_BPartner_ID<small> numeric(10) <br/> Search</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).Description<small> character varying(255) <br/> String</small> | 
| Comments | Comments or additional information | The Comments field allows for free form entry of additional information. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).Comments<small> character varying(2000) <br/> Text</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| EMail Address | Electronic Mail Address | The Email Address is the Electronic Mail ID for this User and should be fully qualified (e.g. joe.smith@company.com). The Email Address is used to access the self service application functionality from the web. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).EMail<small> character varying(60) <br/> String</small> | 
| Password | Password of any length (case sensitive) | The Password for this User.  Passwords are required to identify authorized users.  For iDempiere Users, you can change the password via the Process &quot;Reset Password&quot;. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).Password<small> character varying(1024) <br/> String</small> | 
| Greeting | Greeting to print on correspondence | The Greeting identifies the greeting to print on correspondence. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).C_Greeting_ID<small> numeric(10) <br/> Table Direct</small> | 
| Partner Location | Identifies the (ship to) address for this Business Partner | The Partner address indicates the location of a Business Partner | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).C_BPartner_Location_ID<small> numeric(10) <br/> Table Direct</small> | 
| Title | Name this entity is referred to as | The Title indicates the name that an entity is referred to as. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).Title<small> character varying(40) <br/> String</small> | 
| Birthday | Birthday or Anniversary day | Birthday or Anniversary day | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).Birthday<small> timestamp without time zone <br/> Date</small> | 
| Phone | Identifies a telephone number | The Phone field identifies a telephone number | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).Phone<small> character varying(40) <br/> String</small> | 
| 2nd Phone | Identifies an alternate telephone number. | The 2nd Phone field identifies an alternate telephone number. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).Phone2<small> character varying(40) <br/> String</small> | 
| Fax | Facsimile number | The Fax identifies a facsimile number for this Business Partner or  Location | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).Fax<small> character varying(40) <br/> String</small> | 
| Notification Type | Type of Notifications | Emails or Notification sent out for Request Updates, etc. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).NotificationType<small> character(1) <br/> List</small> | 
| Position | Job Position |  | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).C_Job_ID<small> numeric(10) <br/> Table Direct</small> | 
| Full BP Access | The user/contact has full access to Business Partner information and resources | If selected, the user has full access to the Business Partner (BP) information (Business Documents like Orders, Invoices - Requests) or resources (Assets, Downloads). If you deselect it, the user has no access rights unless, you explicitly grant it in tab &quot;BP Access&quot; | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).IsFullBPAccess<small> character(1) <br/> Yes-No</small> | 
| EMail Verify | Date Email was verified |  | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).EMailVerifyDate<small> timestamp without time zone <br/> Date+Time</small> | 
| Verification Info | Verification information of EMail Address | The field contains additional information how the EMail Address has been verified | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).EMailVerify<small> character varying(40) <br/> String</small> | 
| Last Contact | Date this individual was last contacted | The Last Contact indicates the date that this Business Partner Contact was last contacted. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).LastContact<small> timestamp without time zone <br/> Date</small> | 
| Last Result | Result of last contact | The Last Result identifies the result of the last contact made. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).LastResult<small> character varying(255) <br/> String</small> | 


### Tab: Activities

**[Created:** 25/08/2013 - **Updated:** 25/08/2013 **]**   
**Description:** Customer Contact Activities  
**Help:**   
**Tab Level:** 2

Table 30: Activities - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_contactactivity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_contactactivity.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_contactactivity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_contactactivity.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Sales Representative | Sales Representative or Company Agent | The Sales Representative indicates the Sales Rep for this Region.  Any Sales Rep must be a valid internal user. | [c_contactactivity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_contactactivity.html).SalesRep_ID<small> numeric(10) <br/> Table</small> | 
| Activity Type | Type of activity, e.g. task, email, phone call |  | [c_contactactivity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_contactactivity.html).ContactActivityType<small> character varying(10) <br/> List</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_contactactivity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_contactactivity.html).Description<small> character varying(255) <br/> String</small> | 
| User/Contact | User within the system - Internal or Business Partner Contact | The User identifies a unique user in the system. This could be an internal user or a business partner contact | [c_contactactivity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_contactactivity.html).AD_User_ID<small> numeric(10) <br/> Search</small> | 
| Sales Opportunity |  |  | [c_contactactivity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_contactactivity.html).C_Opportunity_ID<small> numeric(10) <br/> Table Direct</small> | 
| Comments | Comments or additional information | The Comments field allows for free form entry of additional information. | [c_contactactivity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_contactactivity.html).Comments<small> text <br/> Text</small> | 
| Start Date | First effective day (inclusive) | The Start Date indicates the first or starting date | [c_contactactivity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_contactactivity.html).StartDate<small> timestamp without time zone <br/> Date+Time</small> | 
| End Date | Last effective date (inclusive) | The End Date indicates the last date in this range. | [c_contactactivity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_contactactivity.html).EndDate<small> timestamp without time zone <br/> Date+Time</small> | 
| Complete | It is complete | Indication that this is complete | [c_contactactivity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_contactactivity.html).IsComplete<small> character(1) <br/> Yes-No</small> | 


### Tab: Locations

**[Created:** 25/08/2013 - **Updated:** 25/08/2013 **]**   
**Description:** Customer Locations  
**Help:**   
**Tab Level:** 1

Table 40: Locations - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_bpartner_location](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner_location.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_bpartner_location](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner_location.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Business Partner | Identifies a Business Partner | A Business Partner is anyone with whom you transact.  This can include Vendor, Customer, Employee or Salesperson | [c_bpartner_location](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner_location.html).C_BPartner_ID<small> numeric(10) <br/> Search</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [c_bpartner_location](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner_location.html).Name<small> character varying(60) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_bpartner_location](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner_location.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Address | Location or Address | The Location / Address field defines the location of an entity. | [c_bpartner_location](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner_location.html).C_Location_ID<small> numeric(10) <br/> Location (Address)</small> | 
| Phone | Identifies a telephone number | The Phone field identifies a telephone number | [c_bpartner_location](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner_location.html).Phone<small> character varying(40) <br/> String</small> | 
| 2nd Phone | Identifies an alternate telephone number. | The 2nd Phone field identifies an alternate telephone number. | [c_bpartner_location](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner_location.html).Phone2<small> character varying(40) <br/> String</small> | 
| Fax | Facsimile number | The Fax identifies a facsimile number for this Business Partner or  Location | [c_bpartner_location](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner_location.html).Fax<small> character varying(40) <br/> String</small> | 
| ISDN | ISDN or modem line | The ISDN identifies a ISDN or Modem line number. | [c_bpartner_location](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner_location.html).ISDN<small> character varying(40) <br/> String</small> | 
| Ship Address | Business Partner Shipment Address | If the Ship Address is selected, the location is used to ship goods to a customer or receive goods from a vendor. | [c_bpartner_location](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner_location.html).IsShipTo<small> character(1) <br/> Yes-No</small> | 
| Invoice Address | Business Partner Invoice/Bill Address | If the Invoice Address is selected, the location is used to send invoices to a customer or receive invoices from a vendor. | [c_bpartner_location](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner_location.html).IsBillTo<small> character(1) <br/> Yes-No</small> | 
| Pay-From Address | Business Partner pays from that address and we&#x27;ll send dunning letters there | If the Pay-From Address is selected, this location is the address the Business Partner pays from and where dunning letters will be sent to. | [c_bpartner_location](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner_location.html).IsPayFrom<small> character(1) <br/> Yes-No</small> | 
| Remit-To Address | Business Partner payment address | If the Remit-To Address is selected, the location is used to send payments to the vendor. | [c_bpartner_location](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner_location.html).IsRemitTo<small> character(1) <br/> Yes-No</small> | 
| Sales Region | Sales coverage region | The Sales Region indicates a specific area of sales coverage. | [c_bpartner_location](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner_location.html).C_SalesRegion_ID<small> numeric(10) <br/> Table</small> | 


### Tab: Contract Prices

**[Created:** 25/08/2013 - **Updated:** 25/08/2013 **]**   
**Description:** Customer specific prices  
**Help:**   
**Tab Level:** 1

Table 50: Contract Prices - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [m_bp_price](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_bp_price.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [m_bp_price](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_bp_price.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Business Partner | Identifies a Business Partner | A Business Partner is anyone with whom you transact.  This can include Vendor, Customer, Employee or Salesperson | [m_bp_price](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_bp_price.html).C_BPartner_ID<small> numeric(10) <br/> Search</small> | 
| Product | Product, Service, Item | Identifies an item which is either purchased or sold in this organization. | [m_bp_price](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_bp_price.html).M_Product_ID<small> numeric(10) <br/> Search</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [m_bp_price](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_bp_price.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Valid from | Valid from including this date (first day) | The Valid From date indicates the first day of a date range | [m_bp_price](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_bp_price.html).ValidFrom<small> timestamp without time zone <br/> Date</small> | 
| Valid to | Valid to including this date (last day) | The Valid To date indicates the last day of a date range | [m_bp_price](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_bp_price.html).ValidTo<small> timestamp without time zone <br/> Date</small> | 
| Comments | Comments or additional information | The Comments field allows for free form entry of additional information. | [m_bp_price](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_bp_price.html).Comments<small> character varying(2000) <br/> Text</small> | 
| Price Override Type | Type of price override, fixed price or discount off list |  | [m_bp_price](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_bp_price.html).PriceOverrideType<small> character(1) <br/> List</small> | 
| Break Value | Low Value of trade discount break level | Starting Quantity or Amount Value for break level | [m_bp_price](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_bp_price.html).BreakValue<small> numeric <br/> Number</small> | 
| Discount % | Discount in percent | The Discount indicates the discount applied or taken as a percentage. | [m_bp_price](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_bp_price.html).Discount<small> numeric <br/> Amount</small> | 
| Currency | The Currency for this record | Indicates the Currency to be used when processing or reporting on this record | [m_bp_price](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_bp_price.html).C_Currency_ID<small> numeric(10) <br/> Table Direct</small> | 
| List Price | List Price | The List Price is the official List Price in the document currency. | [m_bp_price](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_bp_price.html).PriceList<small> numeric <br/> Costs+Prices</small> | 
| Standard Price | Standard Price | The Standard Price indicates the standard or normal price for a product on this price list | [m_bp_price](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_bp_price.html).PriceStd<small> numeric <br/> Costs+Prices</small> | 
| Limit Price | Lowest price for a product | The Price Limit indicates the lowest price for a product stated in the Price List Currency. | [m_bp_price](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_bp_price.html).PriceLimit<small> numeric <br/> Costs+Prices</small> | 
| Net Price | Net Price including all discounts | If price is set as &quot;Net Price&quot; no further discounts will be applied. | [m_bp_price](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_bp_price.html).IsNetPrice<small> character(1) <br/> Yes-No</small> | 


### Tab: Requests

**[Created:** 25/08/2013 - **Updated:** 25/08/2013 **]**   
**Description:** Customer requests  
**Help:**   
**Tab Level:** 1

Table 60: Requests - Fields 

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


### Tab: Orders

**[Created:** 25/08/2013 - **Updated:** 25/08/2013 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 70: Orders - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [rv_orderdetail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/rv_orderdetail.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [rv_orderdetail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/rv_orderdetail.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Order | Order | The Order is a control document.  The  Order is complete when the quantity ordered is the same as the quantity shipped and invoiced.  When you close an order, unshipped (backordered) quantities are cancelled. | [rv_orderdetail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/rv_orderdetail.html).C_Order_ID<small> numeric(10) <br/> Search</small> | 
| Order Reference | Transaction Reference Number (Sales Order, Purchase Order) of your Business Partner | The business partner order reference is the order reference for this specific transaction; Often Purchase Order numbers are given to print on Invoices for easier reference.  A standard number can be defined in the Business Partner (Customer) window. | [rv_orderdetail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/rv_orderdetail.html).POReference<small> character varying(20) <br/> String</small> | 
| Date Ordered | Date of Order | Indicates the Date an item was ordered. | [rv_orderdetail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/rv_orderdetail.html).DateOrdered<small> timestamp without time zone <br/> Date</small> | 
| Date Promised | Date Order was promised | The Date Promised indicates the date, if any, that an Order was promised for. | [rv_orderdetail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/rv_orderdetail.html).DatePromised<small> timestamp without time zone <br/> Date</small> | 
| Document Type | Document type or rules | The Document Type determines document sequence and processing rules | [rv_orderdetail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/rv_orderdetail.html).C_DocType_ID<small> numeric(10) <br/> Table Direct</small> | 
| Document Status | The current status of the document | The Document Status indicates the status of a document at this time.  If you want to change the document status, use the Document Action field | [rv_orderdetail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/rv_orderdetail.html).DocStatus<small> character(2) <br/> List</small> | 
| Business Partner | Identifies a Business Partner | A Business Partner is anyone with whom you transact.  This can include Vendor, Customer, Employee or Salesperson | [rv_orderdetail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/rv_orderdetail.html).C_BPartner_ID<small> numeric(10) <br/> Search</small> | 
| Partner Location | Identifies the (ship to) address for this Business Partner | The Partner address indicates the location of a Business Partner | [rv_orderdetail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/rv_orderdetail.html).C_BPartner_Location_ID<small> numeric(10) <br/> Search</small> | 
| User/Contact | User within the system - Internal or Business Partner Contact | The User identifies a unique user in the system. This could be an internal user or a business partner contact | [rv_orderdetail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/rv_orderdetail.html).AD_User_ID<small> numeric(10) <br/> Search</small> | 
| Currency | The Currency for this record | Indicates the Currency to be used when processing or reporting on this record | [rv_orderdetail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/rv_orderdetail.html).C_Currency_ID<small> numeric(10) <br/> Search</small> | 
| Warehouse | Storage Warehouse and Service Point | The Warehouse identifies a unique Warehouse where products are stored or Services are provided. | [rv_orderdetail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/rv_orderdetail.html).M_Warehouse_ID<small> numeric(10) <br/> Table Direct</small> | 
| Sales Representative | Sales Representative or Company Agent | The Sales Representative indicates the Sales Rep for this Region.  Any Sales Rep must be a valid internal user. | [rv_orderdetail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/rv_orderdetail.html).SalesRep_ID<small> numeric(10) <br/> Table</small> | 
| Product | Product, Service, Item | Identifies an item which is either purchased or sold in this organization. | [rv_orderdetail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/rv_orderdetail.html).M_Product_ID<small> numeric(10) <br/> Search</small> | 
| Quantity | The Quantity Entered is based on the selected UoM | The Quantity Entered is converted to base product UoM quantity | [rv_orderdetail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/rv_orderdetail.html).QtyEntered<small> numeric <br/> Quantity</small> | 
| UOM | Unit of Measure | The UOM defines a unique non monetary Unit of Measure | [rv_orderdetail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/rv_orderdetail.html).C_UOM_ID<small> numeric(10) <br/> Table Direct</small> | 
| Unit Price | Actual Price | The Actual or Unit Price indicates the Price for a product in source currency. | [rv_orderdetail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/rv_orderdetail.html).PriceActual<small> numeric <br/> Costs+Prices</small> | 
| Ordered Quantity | Ordered Quantity | The Ordered Quantity indicates the quantity of a product that was ordered. | [rv_orderdetail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/rv_orderdetail.html).QtyOrdered<small> numeric <br/> Quantity</small> | 
| Price | Price Entered - the price based on the selected/base UoM | The price entered is converted to the actual price based on the UoM conversion | [rv_orderdetail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/rv_orderdetail.html).PriceEntered<small> numeric <br/> Costs+Prices</small> | 
| Qty to deliver |  |  | [rv_orderdetail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/rv_orderdetail.html).QtyToDeliver<small> numeric <br/> Quantity</small> | 
| Qty to invoice |  |  | [rv_orderdetail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/rv_orderdetail.html).QtyToInvoice<small> numeric <br/> Quantity</small> | 


