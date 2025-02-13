# Window: Package Maintenance

**[Created:** 11/12/2006 - **Updated:** 12/12/2006 **]**  
**Description:** Package installation history and maintenance  
**Help:** Review package installation.  Also perform package rollback if required  
![](/img/docs/manual/PackageMaintenance-Window_iDempiere_v12.0.0.png)

### Tab: Package Installation Log

**[Created:** 11/12/2006 - **Updated:** 06/08/2013 **]**   
**Description:** Installation history of packages  
**Help:**   
**Tab Level:** 0

Table 10: Package Installation Log - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_package_imp](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_imp.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_package_imp](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_imp.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Package Imp. |  |  | [ad_package_imp](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_imp.html).AD_Package_Imp_ID<small> numeric(10) <br/> ID</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_package_imp](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_imp.html).Name<small> character varying(500) <br/> String</small> | 
| Package Version |  |  | [ad_package_imp](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_imp.html).PK_Version<small> character varying(20) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_package_imp](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_imp.html).Description<small> character varying(1000) <br/> Memo</small> | 
| EMail Address | Electronic Mail Address | The Email Address is the Electronic Mail ID for this User and should be fully qualified (e.g. joe.smith@company.com). The Email Address is used to access the self service application functionality from the web. | [ad_package_imp](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_imp.html).EMail<small> character varying(60) <br/> String</small> | 
| Created | Date this record was created | The Created field indicates the date that this record was created. | [ad_package_imp](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_imp.html).Created<small> timestamp without time zone <br/> Date+Time</small> | 
| Created By | User who created this records | The Created By field indicates the user who created this record. | [ad_package_imp](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_imp.html).CreatedBy<small> numeric(10) <br/> Search</small> | 
| Package Status |  |  | [ad_package_imp](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_imp.html).PK_Status<small> character varying(22) <br/> String</small> | 
| Updated Date |  |  | [ad_package_imp](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_imp.html).UpdatedDate<small> character varying(25) <br/> String</small> | 
| PackRoll |  |  | [ad_package_imp](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_imp.html).Processing<small> character(1) <br/> Button</small> | 


### Tab: Objects Installed

**[Created:** 11/12/2006 - **Updated:** 06/08/2013 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 20: Objects Installed - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_package_imp_detail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_imp_detail.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_package_imp_detail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_imp_detail.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Package Imp. |  |  | [ad_package_imp_detail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_imp_detail.html).AD_Package_Imp_ID<small> numeric(10) <br/> Search</small> | 
| Action | Indicates the Action to be performed | The Action field is a drop down list box which indicates the Action to be performed for this Item. | [ad_package_imp_detail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_imp_detail.html).Action<small> character varying(20) <br/> String</small> | 
| Table | Database Table information | The Database Table provides the information of the table definition | [ad_package_imp_detail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_imp_detail.html).AD_Table_ID<small> numeric(10) <br/> Table Direct</small> | 
| Record UUID |  |  | [ad_package_imp_detail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_imp_detail.html).Record_UU<small> character varying(36) <br/> Record UUID</small> | 
| Record ID | Direct internal record ID | The Record ID is the internal unique identifier of a record. Please note that zooming to the record may not be successful for Orders, Invoices and Shipment/Receipts as sometimes the Sales Order type is not known. | [ad_package_imp_detail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_imp_detail.html).Record_ID<small> numeric(10) <br/> Record ID</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_package_imp_detail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_imp_detail.html).Name<small> character varying(2000) <br/> String</small> | 
| Type | Type of Validation (SQL, Java Script, Java Language) | The Type indicates the type of validation that will occur.  This can be SQL, Java Script or Java Language. | [ad_package_imp_detail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_imp_detail.html).Type<small> character varying(60) <br/> String</small> | 
| Success |  |  | [ad_package_imp_detail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_imp_detail.html).Success<small> character varying(20) <br/> String</small> | 
| Backup |  |  | [ad_package_imp_detail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_imp_detail.html).AD_Backup_ID<small> numeric(10) <br/> ID</small> | 
| Execution Code |  |  | [ad_package_imp_detail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_imp_detail.html).ExecCode<small> text <br/> Text</small> | 
| Result | Result of the action taken | The Result indicates the result of any action taken on this request. | [ad_package_imp_detail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_imp_detail.html).Result<small> text <br/> Text</small> | 


### Tab: Object Backups

**[Created:** 11/12/2006 - **Updated:** 06/08/2013 **]**   
**Description:** Details by column original values before the record was overwritten  
**Help:** Displays values for each column for each record that was updated by a package install.  This backup is used in the package reversal process.  
**Tab Level:** 2

Table 30: Object Backups - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_package_imp_backup](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_imp_backup.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_package_imp_backup](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_imp_backup.html).AD_Org_ID<small> numeric(10) <br/> ID</small> | 
| Imp. Package Detail |  |  | [ad_package_imp_backup](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_imp_backup.html).AD_Package_Imp_Detail_ID<small> numeric(10) <br/> ID</small> | 
| Table | Database Table information | The Database Table provides the information of the table definition | [ad_package_imp_backup](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_imp_backup.html).AD_Table_ID<small> numeric(10) <br/> ID</small> | 
| Column | Column in the table | Link to the database column of the table | [ad_package_imp_backup](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_imp_backup.html).AD_Column_ID<small> numeric(10) <br/> Search</small> | 
| Reference | System Reference and Validation | The Reference could be a display type, list or table validation. | [ad_package_imp_backup](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_imp_backup.html).AD_Reference_ID<small> numeric(10) <br/> Table</small> | 
| Col Value |  |  | [ad_package_imp_backup](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_imp_backup.html).ColValue<small> character varying(2000) <br/> String</small> | 
| Package Imp. Bck. Directory |  |  | [ad_package_imp_backup](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_imp_backup.html).AD_Package_Imp_Bck_Dir<small> character varying(255) <br/> String</small> | 
| Package Imp. Org. Dir. |  |  | [ad_package_imp_backup](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_imp_backup.html).AD_Package_Imp_Org_Dir<small> character varying(255) <br/> String</small> | 


