# Window: Migration Scripts

**[Created:** 15/02/2008 - **Updated:** 15/02/2008 **]**  
**Description:**   
**Help:**   
![](/img/docs/manual/MigrationScripts-Window_iDempiere_v12.0.0.png)

### Tab: Migration Scripts

**[Created:** 15/02/2008 - **Updated:** 15/02/2008 **]**   
**Description:**   
**Help:**   
**Tab Level:** 0

Table 10: Migration Scripts - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_migrationscript](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_migrationscript.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_migrationscript](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_migrationscript.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_migrationscript](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_migrationscript.html).Name<small> character varying(60) <br/> String</small> | 
| File Name | Name of the local file or URL | Name of a file in the local directory space - or URL (file://.., http://.., ftp://..) | [ad_migrationscript](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_migrationscript.html).FileName<small> character varying(500) <br/> FileName</small> | 
| Developer Name |  |  | [ad_migrationscript](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_migrationscript.html).DeveloperName<small> character varying(60) <br/> String</small> | 
| Apply Script |  |  | [ad_migrationscript](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_migrationscript.html).isApply<small> character(1) <br/> Yes-No</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_migrationscript](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_migrationscript.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Project | Name of the Project |  | [ad_migrationscript](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_migrationscript.html).ProjectName<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_migrationscript](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_migrationscript.html).Description<small> character varying(2000) <br/> Text</small> | 
| Reference | Reference for this record | The Reference displays the source document number. | [ad_migrationscript](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_migrationscript.html).Reference<small> character varying(2000) <br/> Text</small> | 
| URL | Full URL address - e.g. http://www.idempiere.org | The URL defines an fully qualified web address like http://www.idempiere.org | [ad_migrationscript](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_migrationscript.html).URL<small> character varying(2000) <br/> URL</small> | 
| Release No | Internal Release Number |  | [ad_migrationscript](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_migrationscript.html).ReleaseNo<small> character varying(10) <br/> Text</small> | 
| Status | Status of the currently running check | Status of the currently running check | [ad_migrationscript](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_migrationscript.html).Status<small> character(2) <br/> List</small> | 
| Script | Dynamic Java Language Script to calculate result | Use Java language constructs to define the result of the calculation | [ad_migrationscript](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_migrationscript.html).Script<small> bytea <br/> Binary</small> | 


