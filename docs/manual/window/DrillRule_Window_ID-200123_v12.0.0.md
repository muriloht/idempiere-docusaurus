# Window: Drill Rule

**[Created:** 08/07/2022 - **Updated:** 08/07/2022 **]**  
**Description:**   
**Help:**   
![](/img/docs/manual/DrillRule-Window_iDempiere_v12.0.0.png)

### Tab: Drill Rule

**[Created:** 08/07/2022 - **Updated:** 08/07/2022 **]**   
**Description:**   
**Help:**   
**Tab Level:** 0

Table 10: Drill Rule - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_process_drillrule](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_process_drillrule.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_process_drillrule](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_process_drillrule.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_process_drillrule](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_process_drillrule.html).Name<small> character varying(255) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_process_drillrule](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_process_drillrule.html).Description<small> character varying(255) <br/> String</small> | 
| Process | Process or Report | The Process field identifies a unique Process or Report in the system. | [ad_process_drillrule](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_process_drillrule.html).AD_Process_ID<small> numeric(10) <br/> Table Direct</small> | 
| Show Help |  |  | [ad_process_drillrule](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_process_drillrule.html).ShowHelp<small> character(1) <br/> List</small> | 
| Table | Database Table information | The Database Table provides the information of the table definition | [ad_process_drillrule](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_process_drillrule.html).AD_Table_ID<small> numeric(10) <br/> Table Direct</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_process_drillrule](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_process_drillrule.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Report View | View used to generate this report | The Report View indicates the view used to generate this report. | [ad_process_drillrule](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_process_drillrule.html).AD_ReportView_ID<small> numeric(10) <br/> Table Direct</small> | 
| Valid | Element is valid | The element passed the validation check | [ad_process_drillrule](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_process_drillrule.html).IsValid<small> character(1) <br/> Yes-No</small> | 
| Print Format | Data Print Format | The print format determines how data is rendered for print. | [ad_process_drillrule](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_process_drillrule.html).AD_PrintFormat_ID<small> numeric(10) <br/> Table Direct</small> | 
| Process Parameter |  |  | [ad_process_drillrule](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_process_drillrule.html).AD_Process_Para_ID<small> numeric(10) <br/> Table Direct</small> | 


### Tab: Drill Rule Parameter

**[Created:** 08/07/2022 - **Updated:** 15/03/2023 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 20: Drill Rule Parameter - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_process_drillrule_para](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_process_drillrule_para.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_process_drillrule_para](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_process_drillrule_para.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Process Parameter |  |  | [ad_process_drillrule_para](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_process_drillrule_para.html).AD_Process_Para_ID<small> numeric(10) <br/> Table Direct</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_process_drillrule_para](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_process_drillrule_para.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Default Parameter | Default value of the parameter | The default value can be a variable like @#Date@ | [ad_process_drillrule_para](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_process_drillrule_para.html).ParameterDefault<small> character varying(255) <br/> String</small> | 
| Default To Parameter | Default value of the to parameter | The default value can be a variable like @#Date@ | [ad_process_drillrule_para](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_process_drillrule_para.html).ParameterToDefault<small> character varying(255) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_process_drillrule_para](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_process_drillrule_para.html).Description<small> character varying(255) <br/> String</small> | 


### Tab: Drill Rule Translation

**[Created:** 08/07/2022 - **Updated:** 27/10/2024 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 30: Drill Rule Translation - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_process_drillrule_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_process_drillrule_trl.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_process_drillrule_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_process_drillrule_trl.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Drill Rule |  |  | [ad_process_drillrule_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_process_drillrule_trl.html).AD_Process_DrillRule_ID<small> numeric(10) <br/> Search</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_process_drillrule_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_process_drillrule_trl.html).Name<small> character varying(255) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_process_drillrule_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_process_drillrule_trl.html).Description<small> character varying(255) <br/> String</small> | 
| Language | Language for this entity | The Language identifies the language to use for display and formatting | [ad_process_drillrule_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_process_drillrule_trl.html).AD_Language<small> character varying(6) <br/> Table</small> | 
| Translated | This column is translated | The Translated checkbox indicates if this column is translated. | [ad_process_drillrule_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_process_drillrule_trl.html).IsTranslated<small> character(1) <br/> Yes-No</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_process_drillrule_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_process_drillrule_trl.html).IsActive<small> character(1) <br/> Yes-No</small> | 


