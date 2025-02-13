# Window: Dunning

**[Created:** 04/12/1999 - **Updated:** 02/01/2000 **]**  
**Description:** Maintain Dunning Levels  
**Help:** The Dunning Window defines the parameters that will be used when generating Dunning Letters.  Each customer can be associated with a Dunning Code.  
![](/img/docs/manual/Dunning-Window_iDempiere_v12.0.0.png)

### Tab: Dunning

**[Created:** 04/12/1999 - **Updated:** 02/01/2000 **]**   
**Description:** Maintain Dunning Rules  
**Help:** The Dunning Tab defines the parameters for a dunning level.  
**Tab Level:** 0

Table 10: Dunning - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_dunning](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_dunning.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_dunning](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_dunning.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [c_dunning](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_dunning.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_dunning](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_dunning.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_dunning](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_dunning.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Default | Default value | The Default Checkbox indicates if this record will be used as a default value. | [c_dunning](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_dunning.html).IsDefault<small> character(1) <br/> Yes-No</small> | 
| Create levels sequentially | Create Dunning Letter by level sequentially | If selected, the dunning letters are created in the sequence of the dunning levels.  Otherwise, the dunning level is based on the days (over)due. | [c_dunning](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_dunning.html).CreateLevelsSequentially<small> character(1) <br/> Yes-No</small> | 


### Tab: Level

**[Created:** 25/01/2000 - **Updated:** 02/01/2000 **]**   
**Description:** Maintain Dunning Level  
**Help:** The Dunning Level Tab defines the timing and frequency of the dunning notices.  
**Tab Level:** 1

Table 20: Level - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_dunninglevel](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_dunninglevel.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_dunninglevel](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_dunninglevel.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Dunning | Dunning Rules for overdue invoices | The Dunning indicates the rules and method of dunning for past due payments. | [c_dunninglevel](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_dunninglevel.html).C_Dunning_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [c_dunninglevel](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_dunninglevel.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_dunninglevel](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_dunninglevel.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_dunninglevel](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_dunninglevel.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Days after due date | Days after due date to dun (if negative days until due) | The Days After Due Date indicates the number of days after the payment due date to initiate dunning. If the number is negative, it includes not the not due invoices. | [c_dunninglevel](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_dunninglevel.html).DaysAfterDue<small> numeric(10) <br/> Number</small> | 
| Show Not Due | Show/print all invoices which are not due (yet). | The dunning letter with this level includes all not due invoices. | [c_dunninglevel](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_dunninglevel.html).IsShowNotDue<small> character(1) <br/> Yes-No</small> | 
| Days between dunning | Days between sending dunning notices | The Days Between Dunning indicates the number of days between sending dunning notices. | [c_dunninglevel](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_dunninglevel.html).DaysBetweenDunning<small> numeric(10) <br/> Integer</small> | 
| Show All Due | Show/print all due invoices | The dunning letter with this level includes all due invoices. | [c_dunninglevel](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_dunninglevel.html).IsShowAllDue<small> character(1) <br/> Yes-No</small> | 
| Charge fee | Indicates if fees will be charged for overdue invoices | The Charge Fee checkbox indicates if the dunning letter will include fees for overdue invoices | [c_dunninglevel](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_dunninglevel.html).ChargeFee<small> character(1) <br/> Yes-No</small> | 
| Fee Amount | Fee amount in invoice currency | The Fee Amount indicates the charge amount on a dunning letter for overdue invoices.  This field will only display if the charge fee checkbox has been selected. | [c_dunninglevel](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_dunninglevel.html).FeeAmt<small> numeric <br/> Amount</small> | 
| Print Text | The label text to be printed on a document or correspondence. | The Label to be printed indicates the name that will be printed on a document or correspondence. The max length is 2000 characters. | [c_dunninglevel](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_dunninglevel.html).PrintName<small> character varying(60) <br/> String</small> | 
| Note | Optional additional user defined information | The Note field allows for optional entry of user defined information regarding this record | [c_dunninglevel](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_dunninglevel.html).Note<small> character varying(2000) <br/> Text</small> | 
| Dunning Print Format | Print Format for printing Dunning Letters | You need to define a Print Format to print the document. | [c_dunninglevel](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_dunninglevel.html).Dunning_PrintFormat_ID<small> numeric(10) <br/> Table</small> | 
| Credit Stop | Set the business partner to credit stop | If a dunning letter of this level is created, the business partner is set to Credit Stop (needs to be manually changed). | [c_dunninglevel](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_dunninglevel.html).IsSetCreditStop<small> character(1) <br/> Yes-No</small> | 
| Set Payment Term | Set the payment term of the Business Partner | If a dunning letter of this level is created, the payment term of this business partner is overwritten. | [c_dunninglevel](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_dunninglevel.html).IsSetPaymentTerm<small> character(1) <br/> Yes-No</small> | 
| Payment Term | The terms of Payment (timing, discount) | Payment Terms identify the method and timing of payment. | [c_dunninglevel](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_dunninglevel.html).C_PaymentTerm_ID<small> numeric(10) <br/> Table Direct</small> | 
| Collection Status | Invoice Collection Status | Status of the invoice collection process | [c_dunninglevel](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_dunninglevel.html).InvoiceCollectionType<small> character(1) <br/> List</small> | 
| Is Statement | Dunning Level is a definition of a statement |  | [c_dunninglevel](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_dunninglevel.html).IsStatement<small> character(1) <br/> Yes-No</small> | 


### Tab: Translation

**[Created:** 25/01/2000 - **Updated:** 27/10/2024 **]**   
**Description:** Dunning Level Translation  
**Help:**   
**Tab Level:** 2

Table 30: Translation - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_dunninglevel_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_dunninglevel_trl.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_dunninglevel_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_dunninglevel_trl.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Dunning Level |  |  | [c_dunninglevel_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_dunninglevel_trl.html).C_DunningLevel_ID<small> numeric(10) <br/> Table Direct</small> | 
| Language | Language for this entity | The Language identifies the language to use for display and formatting | [c_dunninglevel_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_dunninglevel_trl.html).AD_Language<small> character varying(6) <br/> Table</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_dunninglevel_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_dunninglevel_trl.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Print Text | The label text to be printed on a document or correspondence. | The Label to be printed indicates the name that will be printed on a document or correspondence. The max length is 2000 characters. | [c_dunninglevel_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_dunninglevel_trl.html).PrintName<small> character varying(60) <br/> String</small> | 
| Note | Optional additional user defined information | The Note field allows for optional entry of user defined information regarding this record | [c_dunninglevel_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_dunninglevel_trl.html).Note<small> character varying(2000) <br/> Text</small> | 
| Translated | This column is translated | The Translated checkbox indicates if this column is translated. | [c_dunninglevel_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_dunninglevel_trl.html).IsTranslated<small> character(1) <br/> Yes-No</small> | 


