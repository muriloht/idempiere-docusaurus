# Window: Error Message

**[Created:** 15/09/2000 - **Updated:** 02/01/2000 **]**  
**Description:** Display Error Messages  
**Help:** The Error Message Window displays all error messages generated.  This is for System Admin use only.  The records must be manually deleted.  
![](/img/docs/manual/ErrorMessage-Window_iDempiere_v12.0.0.png)

### Tab: Error Message

**[Created:** 15/09/2000 - **Updated:** 02/01/2000 **]**   
**Description:** Error Message  
**Help:** The Error Message Tab displays error messages that have been generated.  They can be deleted with an automated clean up process.  
**Tab Level:** 0

Table 10: Error Message - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_error](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_error.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_error](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_error.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_error](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_error.html).Name<small> character varying(60) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_error](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_error.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Language | Language for this entity | The Language identifies the language to use for display and formatting | [ad_error](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_error.html).AD_Language<small> character varying(6) <br/> Table</small> | 
| Validation code | Validation Code | The Validation Code displays the date, time and message of the error. | [ad_error](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_error.html).Code<small> character varying(2000) <br/> String</small> | 


