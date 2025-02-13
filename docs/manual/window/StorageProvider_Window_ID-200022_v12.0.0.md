# Window: Storage Provider

**[Created:** 23/11/2012 - **Updated:** 23/11/2012 **]**  
**Description:**   
**Help:**   
![](/img/docs/manual/StorageProvider-Window_iDempiere_v12.0.0.png)

### Tab: Storage Provider

**[Created:** 23/11/2012 - **Updated:** 06/08/2013 **]**   
**Description:** Storage Provider  
**Help:**   
**Tab Level:** 0

Table 10: Storage Provider - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_storageprovider](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_storageprovider.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_storageprovider](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_storageprovider.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_storageprovider](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_storageprovider.html).Name<small> character varying(60) <br/> String</small> | 
| Method |  |  | [ad_storageprovider](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_storageprovider.html).Method<small> character varying(60) <br/> List</small> | 
| URL | Full URL address - e.g. http://www.idempiere.org | The URL defines an fully qualified web address like http://www.idempiere.org | [ad_storageprovider](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_storageprovider.html).URL<small> character varying(225) <br/> URL</small> | 
| Folder | A folder on a local or remote system to store data into | We store files in folders, especially media files. | [ad_storageprovider](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_storageprovider.html).Folder<small> character varying(255) <br/> String</small> | 
| User Name |  |  | [ad_storageprovider](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_storageprovider.html).UserName<small> character varying(60) <br/> String</small> | 
| Password | Password of any length (case sensitive) | The Password for this User.  Passwords are required to identify authorized users.  For iDempiere Users, you can change the password via the Process &quot;Reset Password&quot;. | [ad_storageprovider](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_storageprovider.html).Password<small> character varying(255) <br/> String</small> | 
| Default | Default value | The Default Checkbox indicates if this record will be used as a default value. | [ad_storageprovider](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_storageprovider.html).IsDefault<small> character(1) <br/> Yes-No</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_storageprovider](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_storageprovider.html).IsActive<small> character(1) <br/> Yes-No</small> | 


