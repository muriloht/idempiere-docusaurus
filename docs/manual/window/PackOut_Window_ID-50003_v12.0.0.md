# Window: Pack Out

**[Created:** 11/12/2006 - **Updated:** 25/05/2012 **]**  
**Description:** Create 2pack package  
**Help:**   
![](/img/docs/manual/PackOut-Window_iDempiere_v12.0.0.png)

### Tab: Export Package

**[Created:** 11/12/2006 - **Updated:** 06/08/2013 **]**   
**Description:**   
**Help:**   
**Tab Level:** 0

Table 10: Export Package - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant |  |  | [ad_package_exp](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_exp.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization |  |  | [ad_package_exp](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_exp.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name of Package | Name of Package |  | [ad_package_exp](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_exp.html).Name<small> character varying(60) <br/> String</small> | 
| Package Version |  |  | [ad_package_exp](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_exp.html).PK_Version<small> character varying(20) <br/> String</small> | 
| EMail Address | Electronic Mail Address | The Email Address is the Electronic Mail ID for this User and should be fully qualified (e.g. joe.smith@company.com). The Email Address is used to access the self service application functionality from the web. | [ad_package_exp](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_exp.html).EMail<small> character varying(30) <br/> String</small> | 
| Description of Package |  |  | [ad_package_exp](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_exp.html).Description<small> character varying(1000) <br/> Memo</small> | 
| Instructions |  |  | [ad_package_exp](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_exp.html).Instructions<small> character varying(1000) <br/> Memo</small> | 
| Date From | Starting date for a range | The Date From indicates the starting date of a range. | [ad_package_exp](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_exp.html).DateFrom<small> timestamp without time zone <br/> Date</small> | 
| Export Dictionary Entity |  |  | [ad_package_exp](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_exp.html).IsExportDictionaryEntity<small> character(1) <br/> Yes-No</small> | 
| Export Package |  |  | [ad_package_exp](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_exp.html).Processing<small> character(1) <br/> Button</small> | 


### Tab: Package Details

**[Created:** 11/12/2006 - **Updated:** 06/08/2013 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 20: Package Details - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant |  |  | [ad_package_exp_detail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_exp_detail.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization |  |  | [ad_package_exp_detail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_exp_detail.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Package Build ID |  |  | [ad_package_exp_detail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_exp_detail.html).AD_Package_Exp_ID<small> numeric(10) <br/> Table Direct</small> | 
| Line No | Unique line for this document | Indicates the unique line for a document.  It will also control the display order of the lines within a document. | [ad_package_exp_detail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_exp_detail.html).Line<small> numeric <br/> Integer</small> | 
| Type |  |  | [ad_package_exp_detail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_exp_detail.html).Type<small> character varying(10) <br/> List</small> | 
| Entity Type | System Entity Type | The entity type determines the ownership of Application Dictionary entries.  The types &quot;Dictionary&quot; and &quot;iDempiere&quot; should not be used and are maintainted by iDempiere (i.e. all changes are reversed during migration to the current definition). | [ad_package_exp_detail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_exp_detail.html).AD_EntityType_ID<small> numeric(10) <br/> Search</small> | 
| Menu |  |  | [ad_package_exp_detail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_exp_detail.html).AD_Menu_ID<small> numeric(10) <br/> Table Direct</small> | 
| File Name | Name of the local file or URL | Name of a file in the local directory space - or URL (file://.., http://.., ftp://..) | [ad_package_exp_detail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_exp_detail.html).FileName<small> character varying(255) <br/> String</small> | 
| Source File Directory | Current location of source file |  | [ad_package_exp_detail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_exp_detail.html).File_Directory<small> character varying(255) <br/> String</small> | 
| Target_Directory |  |  | [ad_package_exp_detail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_exp_detail.html).Target_Directory<small> character varying(255) <br/> String</small> | 
| Destination_FileName |  |  | [ad_package_exp_detail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_exp_detail.html).Destination_FileName<small> character varying(255) <br/> String</small> | 
| Destination_Directory |  |  | [ad_package_exp_detail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_exp_detail.html).Destination_Directory<small> character varying(255) <br/> String</small> | 
| Table |  |  | [ad_package_exp_detail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_exp_detail.html).AD_Table_ID<small> numeric(10) <br/> Search</small> | 
| DB Type |  |  | [ad_package_exp_detail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_exp_detail.html).DBType<small> character varying(22) <br/> List</small> | 
| SQL Expression/Statement |  |  | [ad_package_exp_detail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_exp_detail.html).SQLStatement<small> character varying(4000) <br/> Memo</small> | 
| Old Package Code |  |  | [ad_package_exp_detail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_exp_detail.html).AD_Package_Code_Old<small> character varying(2000) <br/> Memo</small> | 
| New Package Code |  |  | [ad_package_exp_detail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_exp_detail.html).AD_Package_Code_New<small> character varying(2000) <br/> Memo</small> | 
| Form |  |  | [ad_package_exp_detail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_exp_detail.html).AD_Form_ID<small> numeric(10) <br/> Search</small> | 
| Process |  |  | [ad_package_exp_detail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_exp_detail.html).AD_Process_ID<small> numeric(10) <br/> Search</small> | 
| Workflow |  |  | [ad_package_exp_detail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_exp_detail.html).AD_Workflow_ID<small> numeric(10) <br/> Search</small> | 
| Window | Data entry or display window | The Window field identifies a unique Window in the system. | [ad_package_exp_detail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_exp_detail.html).AD_Window_ID<small> numeric(10) <br/> Search</small> | 
| Role | Responsibility Role | The Role determines security and access a user who has this Role will have in the System. | [ad_package_exp_detail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_exp_detail.html).AD_Role_ID<small> numeric(10) <br/> Table Direct</small> | 
| Report View | View used to generate this report | The Report View indicates the view used to generate this report. | [ad_package_exp_detail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_exp_detail.html).AD_ReportView_ID<small> numeric(10) <br/> Search</small> | 
| Import Format |  |  | [ad_package_exp_detail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_exp_detail.html).AD_ImpFormat_ID<small> numeric(10) <br/> Table Direct</small> | 
| Dynamic Validation | Dynamic Validation Rule | These rules define how an entry is determined to valid. You can use variables for dynamic (context sensitive) validation. | [ad_package_exp_detail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_exp_detail.html).AD_Val_Rule_ID<small> numeric(10) <br/> Table Direct</small> | 
| Message | System Message | Information and Error messages | [ad_package_exp_detail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_exp_detail.html).AD_Message_ID<small> numeric(10) <br/> Search</small> | 
| Print Format | Data Print Format | The print format determines how data is rendered for print. | [ad_package_exp_detail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_exp_detail.html).AD_PrintFormat_ID<small> numeric(10) <br/> Table Direct</small> | 
| Reference | System Reference and Validation | The Reference could be a display type, list or table validation. | [ad_package_exp_detail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_exp_detail.html).AD_Reference_ID<small> numeric(10) <br/> Table Direct</small> | 
| Model Validator |  |  | [ad_package_exp_detail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_exp_detail.html).AD_ModelValidator_ID<small> numeric(10) <br/> Table Direct</small> | 
| Info Window | Info and search/select Window | The Info window is used to search and select records as well as display information relevant to the selection. | [ad_package_exp_detail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_exp_detail.html).AD_InfoWindow_ID<small> numeric(10) <br/> Table Direct</small> | 
| Release No | Internal Release Number |  | [ad_package_exp_detail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_exp_detail.html).ReleaseNo<small> character varying(20) <br/> List</small> | 
| Execution Code |  |  | [ad_package_exp_detail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_exp_detail.html).ExecCode<small> text <br/> Text</small> | 
| Notes |  |  | [ad_package_exp_detail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_exp_detail.html).Description<small> character varying(1000) <br/> Memo</small> | 


