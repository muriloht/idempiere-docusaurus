# Window: Dunning Run

**[Created:** 06/03/2004 - **Updated:** 03/06/2021 **]**  
**Description:** Manage Dunning Runs  
**Help:** Manage Dunning Runs  
![](/img/docs/manual/DunningRun-Window_iDempiere_v12.0.0.png)

### Tab: Dunning Run

**[Created:** 06/03/2004 - **Updated:** 02/01/2000 **]**   
**Description:** Manage Dunning Run  
**Help:** Manage Dunning Run  
**Tab Level:** 0

Table 10: Dunning Run - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_dunningrun](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_dunningrun.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_dunningrun](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_dunningrun.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_dunningrun](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_dunningrun.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Dunning Date | Date of Dunning |  | [c_dunningrun](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_dunningrun.html).DunningDate<small> timestamp without time zone <br/> Date</small> | 
| Dunning | Dunning Rules for overdue invoices | The Dunning indicates the rules and method of dunning for past due payments. | [c_dunningrun](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_dunningrun.html).C_Dunning_ID<small> numeric(10) <br/> Table Direct</small> | 
| Dunning Level |  |  | [c_dunningrun](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_dunningrun.html).C_DunningLevel_ID<small> numeric(10) <br/> Table Direct</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_dunningrun](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_dunningrun.html).Description<small> character varying(255) <br/> String</small> | 
| Create Dunning Run | Create Dunning Run Entries based on the Dunning Level criteria |  | [c_dunningrun](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_dunningrun.html).Processing<small> character(1) <br/> Button</small> | 
| Processed | The document has been processed | The Processed checkbox indicates that a document has been processed. | [c_dunningrun](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_dunningrun.html).Processed<small> character(1) <br/> Yes-No</small> | 


### Tab: Entry

**[Created:** 06/03/2004 - **Updated:** 02/01/2000 **]**   
**Description:** Dunning Run Entry  
**Help:** Maintain details of the dunning letter to a business partner  
**Tab Level:** 1

Table 20: Entry - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_dunningrunentry](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_dunningrunentry.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_dunningrunentry](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_dunningrunentry.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Dunning Run | Dunning Run |  | [c_dunningrunentry](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_dunningrunentry.html).C_DunningRun_ID<small> numeric(10) <br/> Table Direct</small> | 
| Dunning Level |  |  | [c_dunningrunentry](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_dunningrunentry.html).C_DunningLevel_ID<small> numeric(10) <br/> Table Direct</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_dunningrunentry](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_dunningrunentry.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Business Partner | Identifies a Business Partner | A Business Partner is anyone with whom you transact.  This can include Vendor, Customer, Employee or Salesperson | [c_dunningrunentry](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_dunningrunentry.html).C_BPartner_ID<small> numeric(10) <br/> Search</small> | 
| Partner Location | Identifies the (ship to) address for this Business Partner | The Partner address indicates the location of a Business Partner | [c_dunningrunentry](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_dunningrunentry.html).C_BPartner_Location_ID<small> numeric(10) <br/> Table Direct</small> | 
| User/Contact | User within the system - Internal or Business Partner Contact | The User identifies a unique user in the system. This could be an internal user or a business partner contact | [c_dunningrunentry](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_dunningrunentry.html).AD_User_ID<small> numeric(10) <br/> Table Direct</small> | 
| Currency | The Currency for this record | Indicates the Currency to be used when processing or reporting on this record | [c_dunningrunentry](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_dunningrunentry.html).C_Currency_ID<small> numeric(10) <br/> Search</small> | 
| Amount | Amount | Amount | [c_dunningrunentry](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_dunningrunentry.html).Amt<small> numeric <br/> Amount</small> | 
| Sales Representative | Sales Representative or Company Agent | The Sales Representative indicates the Sales Rep for this Region.  Any Sales Rep must be a valid internal user. | [c_dunningrunentry](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_dunningrunentry.html).SalesRep_ID<small> numeric(10) <br/> Table</small> | 
| Quantity | Quantity | The Quantity indicates the number of a specific product or item for this document. | [c_dunningrunentry](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_dunningrunentry.html).Qty<small> numeric <br/> Quantity</small> | 
| Note | Optional additional user defined information | The Note field allows for optional entry of user defined information regarding this record | [c_dunningrunentry](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_dunningrunentry.html).Note<small> character varying(2000) <br/> Text</small> | 
| Processed | The document has been processed | The Processed checkbox indicates that a document has been processed. | [c_dunningrunentry](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_dunningrunentry.html).Processed<small> character(1) <br/> Yes-No</small> | 


### Tab: Line

**[Created:** 06/03/2004 - **Updated:** 02/01/2000 **]**   
**Description:** Dinning Run Line  
**Help:** Maintain the information of the dunning letter line  
**Tab Level:** 2

Table 30: Line - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_dunningrunline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_dunningrunline.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_dunningrunline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_dunningrunline.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Dunning Run Entry | Dunning Run Entry |  | [c_dunningrunline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_dunningrunline.html).C_DunningRunEntry_ID<small> numeric(10) <br/> Table Direct</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_dunningrunline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_dunningrunline.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Invoice | Invoice Identifier | The Invoice Document. | [c_dunningrunline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_dunningrunline.html).C_Invoice_ID<small> numeric(10) <br/> Search</small> | 
| Payment | Payment identifier | The Payment is a unique identifier of this payment. | [c_dunningrunline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_dunningrunline.html).C_Payment_ID<small> numeric(10) <br/> Search</small> | 
| Invoice Payment Schedule | Invoice Payment Schedule | The Invoice Payment Schedule determines when partial payments are due. | [c_dunningrunline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_dunningrunline.html).C_InvoicePaySchedule_ID<small> numeric(10) <br/> Search</small> | 
| Amount | Amount | Amount | [c_dunningrunline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_dunningrunline.html).Amt<small> numeric <br/> Amount</small> | 
| In Dispute | Document is in dispute | The document is in dispute. Use Requests to track details. | [c_dunningrunline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_dunningrunline.html).IsInDispute<small> character(1) <br/> Yes-No</small> | 
| Open Amount | Open item amount |  | [c_dunningrunline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_dunningrunline.html).OpenAmt<small> numeric <br/> Amount</small> | 
| Converted Amount | Converted Amount | The Converted Amount is the result of multiplying the Source Amount by the Conversion Rate for this target currency. | [c_dunningrunline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_dunningrunline.html).ConvertedAmt<small> numeric <br/> Amount</small> | 
| Days due | Number of days due (negative: due in number of days) |  | [c_dunningrunline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_dunningrunline.html).DaysDue<small> numeric(10) <br/> Integer</small> | 
| Times Dunned | Number of times dunned previously |  | [c_dunningrunline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_dunningrunline.html).TimesDunned<small> numeric(10) <br/> Integer</small> | 
| Fee Amount | Fee amount in invoice currency | The Fee Amount indicates the charge amount on a dunning letter for overdue invoices.  This field will only display if the charge fee checkbox has been selected. | [c_dunningrunline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_dunningrunline.html).FeeAmt<small> numeric <br/> Amount</small> | 
| Interest Amount | Interest Amount | The Interest Amount indicates any interest charged or received on a Bank Statement. | [c_dunningrunline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_dunningrunline.html).InterestAmt<small> numeric <br/> Amount</small> | 
| Total Amount | Total Amount | The Total Amount indicates the total document amount. | [c_dunningrunline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_dunningrunline.html).TotalAmt<small> numeric <br/> Amount</small> | 
| Processed | The document has been processed | The Processed checkbox indicates that a document has been processed. | [c_dunningrunline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_dunningrunline.html).Processed<small> character(1) <br/> Yes-No</small> | 


