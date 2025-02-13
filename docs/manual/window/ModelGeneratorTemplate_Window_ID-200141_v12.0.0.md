# Window: Model Generator Template

**[Created:** 10/07/2023 - **Updated:** 10/07/2023 **]**  
**Description:**   
**Help:**   
![](/img/docs/manual/ModelGeneratorTemplate-Window_iDempiere_v12.0.0.png)

### Tab: Model Generator Template

**[Created:** 10/07/2023 - **Updated:** 10/07/2023 **]**   
**Description:**   
**Help:**   
**Tab Level:** 0

Table 10: Model Generator Template - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_modelgeneratortemplate](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_modelgeneratortemplate.html).AD_Client_ID<small> numeric(10) <br/> Search</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_modelgeneratortemplate](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_modelgeneratortemplate.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_modelgeneratortemplate](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_modelgeneratortemplate.html).Name<small> character varying(60) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_modelgeneratortemplate](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_modelgeneratortemplate.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Folder | A folder on a local or remote system to store data into | We store files in folders, especially media files. | [ad_modelgeneratortemplate](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_modelgeneratortemplate.html).Folder<small> character varying(255) <br/> String</small> | 
| DB Table Name |  | You can use % or a comma separated list of table names (case sensitive)Using &#x27;@TableName@&#x27; will change to current table when executing the process | [ad_modelgeneratortemplate](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_modelgeneratortemplate.html).TableName<small> character varying(2000) <br/> String</small> | 
| Package Name |  |  | [ad_modelgeneratortemplate](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_modelgeneratortemplate.html).PackageName<small> character varying(60) <br/> String</small> | 
| Table Entity Type |  |  | [ad_modelgeneratortemplate](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_modelgeneratortemplate.html).TableEntityType<small> character varying(20) <br/> String</small> | 
| Column Entity Type |  |  | [ad_modelgeneratortemplate](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_modelgeneratortemplate.html).ColumnEntityType<small> character varying(20) <br/> String</small> | 


